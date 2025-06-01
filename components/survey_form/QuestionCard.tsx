"use client";
import React, { useState ,useEffect } from "react";
import Image from "next/image";
import { Progress } from "@heroui/progress";
import { CheckboxGroup, Checkbox } from "@heroui/checkbox";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";

interface SurveyOption {
  label: string;
  tags: string[];
}

interface SurveyQuestion {
  question: string;
  options: SurveyOption[];
}

interface PropsType {
  step: number;
  totalSteps: number;
  surveyQuestion: SurveyQuestion;
  next: (selectedTags: string[]) => void;
  previous: () => void;
  selected: string[];
  setSelected: (tags: string[]) => void;
}

export default function QuestionCard({
  step,
  totalSteps,
  surveyQuestion,
  next,
  previous,
  selected,
  setSelected
}: PropsType) {

  const isLastStep = step === totalSteps;
    const [tags, setTags] = useState<string[][]>([]); 
    const [isFinish, setIsFinish] = useState<boolean>(false); 

  const handleNext = () => {
    next(selected);
    console.log(selected);
    setSelected([]); // reset for the next step if needed
  };

  const handleFinish = () => {
    next(selected); // ส่งคำตอบสุดท้าย
    setIsFinish(true)
    console.log("Survey finished, generating calendar...");
    // TODO: เพิ่ม logic สำหรับสร้างปฏิทินที่นี่
  };

  return (
    <div className="w-full grid grid-cols-12 gap-12 p-14 rounded-2xl shadow-2xl">
      <div className="col-span-12">
        <h1>
          <span className={title({ color: "blue", size: "sm" })}>
            Moment of Mind&nbsp;
          </span>
        </h1>
        <Progress
          aria-label="Loading..."
          className="w-full mt-4"
          value={(step / totalSteps) * 100}
        />
      </div>

      <div className="col-span-6">
        <Image
          className="overflow-hidden object-cover w-full rounded-3xl"
          alt="image landscape explain about mental health"
          height={100}
          width={200}
          src="/images/mockup_image.jpeg"
        />
      </div>

      <div className="col-span-6 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-xl mb-6">{surveyQuestion.question}</h2>
          <CheckboxGroup value={selected} onValueChange={setSelected}>
            {surveyQuestion.options.map((option, index) => (
              <Checkbox key={index} value={option.tags.join(",")}>
                {option.label}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>

        <div className="w-full mt-8 flex justify-end">
          <Button
            className="mr-3"
            color="secondary"
            onClick={previous}
            isDisabled={step === 1}
          >
            Previous
          </Button>
           {isLastStep ? (
          <Button color="success" onClick={handleFinish} isDisabled={selected.length === 0}>
            Finish
          </Button>
        ) : (
          <Button color="primary" onClick={handleNext} isDisabled={selected.length === 0}>
            Next
          </Button>
        )}
        </div>
      </div>
    </div>
  );
}

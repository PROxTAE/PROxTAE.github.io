"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Progress } from "@heroui/progress";
import { CheckboxGroup, Checkbox } from "@heroui/checkbox";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import ConfirmModal from "./ConfirmModal";
import { Fade } from "react-awesome-reveal";

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
  setFinish: (isFinish: boolean) => void;
}

export default function QuestionCard({
  step,
  totalSteps,
  surveyQuestion,
  next,
  previous,
  selected,
  setSelected,
  setFinish,
}: PropsType) {
  const isLastStep = step === totalSteps;

  const handleNext = () => {
    next(selected);
    console.log(selected);
    setSelected([]);
  };

  const handleFinish = () => {
    next(selected);
    setFinish(true);
  };

  return (
    <div className="w-full grid grid-cols-12 gap-6 sm:gap-12 p-0 sm:p-6 md:p-14 rounded-2xl ">
      <div className="col-span-12">
        <h1>
          <span className={title({ color: "blue", size: "sm" })}>
            Moment of Mind&nbsp;
          </span>
          <Fade
            triggerOnce
            delay={300}
            cascade
            damping={0.1}
            className="!flex flex-wrap sm:!block justify-center text-wrap sm:text-xl mt-3 text-gray-600"
          >
            “ Take a moment… for your mind.”
          </Fade>
        </h1>
        <Progress
          aria-label="Loading..."
          className="w-full mt-4"
          value={(step / totalSteps) * 100}
        />
      </div>

      <div className="col-span-12 sm:col-span-6">
        <Image
          className="overflow-hidden object-cover w-full rounded-3xl"
          alt="image landscape explain about mental health"
          height={100}
          width={200}
          src="/images/hero_3_2.png"
        />
      </div>

      <div className="col-span-12 sm:col-span-6 flex flex-col justify-between">
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
            <ConfirmModal
              isDisabled={selected.length === 0}
              setFinish={handleFinish}
            />
          ) : (
            // <Button color="success" onClick={handleFinish} isDisabled={selected.length === 0}>
            //   Finish
            // </Button>
            <Button
              color="primary"
              onClick={handleNext}
              isDisabled={selected.length === 0}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

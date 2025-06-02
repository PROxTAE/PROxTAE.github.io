"use client";

import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import surveyQuestions from "./question_list"; // Array<SurveyQuestion>
import { useRouter } from "next/navigation";
export default function FormPage() {
  const [step, setStep] = useState(1);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [answers, setAnswers] = useState<string[][]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedStep = localStorage.getItem("survey_step");
    const savedAnswers = localStorage.getItem("survey_answers");

    if (savedStep) setStep(parseInt(savedStep));
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
  }, []);

  useEffect(() => {
    if (isFinish) {
      if (typeof window !== "undefined") {
        localStorage.setItem("tags_for_calendar", JSON.stringify(answers));
        localStorage.removeItem("survey_answers");
        router.push("/calendar");
      }
    }
  }, [isFinish]);

  const [selected, setSelected] = useState<string[]>([]); // ค่าที่เลือกในปัจจุบัน
  const totalSteps = surveyQuestions.length;

  const handleNext = (selectedTags: string[]) => {
    const updatedAnswers = [...answers];
    updatedAnswers[step - 1] = selectedTags;
    setAnswers(updatedAnswers);

    if (step < totalSteps) {
      const nextStep = step + 1;
      setStep(nextStep);
      setSelected(updatedAnswers[nextStep - 1] || []); // ✅ โหลดค่าที่เคยเลือก
    } else {
      console.log("All answers:", updatedAnswers.flat());
    }
  };
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      setSelected(answers[step - 2] || []); // โหลดคำตอบที่เลือกไว้ในคำถามก่อนหน้า
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("survey_answers", JSON.stringify(answers));
    }
  }, [answers]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("survey_step", step.toString());
    }
  }, [step]);
  return (
    <div className="w-full p-0 sm:p-5 md:p-28">
      <QuestionCard
        step={step}
        totalSteps={totalSteps}
        surveyQuestion={surveyQuestions[step - 1]}
        next={handleNext}
        previous={handlePrevious}
        selected={selected} // 🟦 ส่งค่าที่เคยเลือก
        setSelected={setSelected}
        setFinish={setIsFinish}
      />
    </div>
  );
}

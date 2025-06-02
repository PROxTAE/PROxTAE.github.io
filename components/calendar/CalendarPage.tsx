"use client";
import { Button } from "@heroui/button";
import React, { useState, useEffect, useRef } from "react";
import activityList from "./activity_list";
import html2canvas from "html2canvas";
import Image from "next/image";
import { useRouter } from "next/navigation";
const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

interface activityListType {
  activity: string;
  tags: string[];
  duration: number;
}

export default function CalendarPage() {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [answers, setAnswers] = useState<activityListType[]>([]);
  const [tags, setTags] = useState<string[][]>([]);
  const router = useRouter();
  useEffect(() => {
    const savedAnswers = localStorage.getItem("tags_for_calendar");
    if (savedAnswers) {
      const parsed = JSON.parse(savedAnswers);
      setTags(parsed);

      const allTags = parsed.flatMap((tagGroup: string[]) =>
        tagGroup.join(",").split(",")
      );

      const filteredActivities = activityList.filter((activity) =>
        activity.tags.some((tag) => allTags.includes(tag))
      );

      setAnswers(filteredActivities);
    }else{
      router.push("/form-survey");
    }
  }, []);
  const generateCalendar = () => {
    const totalDays = 30;
    const calendar: { day: number; text: string }[] = [];

    for (let i = 1; i <= totalDays; i++) {
      const randomIndex = i % answers.length;
      calendar.push({
        day: i,
        text: answers[randomIndex]?.activity || "🧘‍♀️ no no no",
      });
    }

    return calendar;
  };
const downloadAsImage = () => {
  if (calendarRef.current) {
    html2canvas(calendarRef.current, {
      scale: 2, // เพิ่มความคมชัด
      useCORS: true,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "moment-of-mind-calendar.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }
};

  const calendar = generateCalendar();

  return (
    <div className="relative">
    <div className="absolute">
      <div
        ref={calendarRef}
        className="bg-white mx-auto rounded-2xl "
        style={{
          width: "1122px", // A4 landscape @ 96 DPI
          height: "794px",
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        <h1 className="text-4xl font-bold text-primary mb-2">Moment of Mind</h1>
        <p className="text-gray-600 mb-10">“Take a moment... for your mind.”</p>
{/* 
          <Image
                  className="overflow-hidden object-cover w-full rounded-3xl mb-5"
                  alt="image landscape explain about mental health"
                  height={100}
                  width={200}
                  src="/images/mockup_image.jpeg"
                /> */}

        <div className="grid grid-cols-7 gap-4">
          {days.map((d) => (
            <div key={d} className="font-bold text-primary">
              {d}
            </div>
          ))}
          {calendar.map(({ day, text }) => (
            <div
              key={day}
              className="text-left pt-3 text-sm border-t border-secondary"
            >
              <div className="text-orange-500 text-xl font-sans font-semibold mb-1">
                {String(day).padStart(2, "0")}
              </div>
              <div className="text-black">{text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-start gap-4 relative bottom-0">
        <Button color="primary" onPress={downloadAsImage}>
          Save to image
        </Button>
      </div>
    </div>
    </div>
  );
}

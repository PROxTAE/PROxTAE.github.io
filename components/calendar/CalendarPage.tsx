"use client";
import { Button } from "@heroui/button";
import React, { useState, useEffect } from "react";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const calendarData = [
  "✍️ Write down 3 things you’re grateful for.",
  "🐾 Spend 15 minutes playing with your pet mindfully.",
  "🚶‍♂️ Take a walk around your neighborhood without headphones.",
  "☕ Make your favorite drink and sit by the window.",
  "📴 Unplug from social media for 3 hours.",
  "🧘‍♀️ Take 3 deep breaths every hour today.",
  "🪴 Water your plants and talk to them.",
];

export default function CalendarPage() {
  const [answers, setAnswers] = useState<string[][]>([]);
  const [tags, setTags] = useState<string[][]>([]);
  useEffect(() => {
    const savedAnswers = localStorage.getItem("survey_answers");
    if (savedAnswers) setTags(JSON.parse(savedAnswers));
  }, []);

  const generateCalendar = () => {
    const totalDays = 30;
    const calendar: { day: number; text: string }[] = [];
    for (let i = 1; i <= totalDays; i++) {
      calendar.push({
        day: i,
        text: calendarData[(i - 1) % calendarData.length],
      });
    }
    return calendar;
  };

  const calendar = generateCalendar();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">Moment of Mind</h1>
      <p className="text-gray-600 mb-10">“Take a moment... for your mind.”</p>
      {tags}
      <div className="grid grid-cols-7 gap-6 ">
        {days.map((d) => (
          <div key={d} className="font-bold text-primary">
            {d}
          </div>
        ))}

        {calendar.map(({ day, text }, index) => (
          <div key={day} className="text-left border-t pt-3 text-sm ">
            <div className="text-orange-500 font-semibold mb-1">
              {String(day).padStart(2, "0")}
            </div>
            <div>{text}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-end gap-4">
        <Button color="secondary">Print</Button>
        <Button color="primary">Download</Button>
      </div>
    </div>
  );
}

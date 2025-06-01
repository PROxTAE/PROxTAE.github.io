import React from "react";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export default function PoorMentalHealth() {
  return (
    <div className="w-full">
      <Slide triggerOnce direction="down" className="text-center">
        <span className={title({ color: "blue", size: "sm" })}>
          Poor mental health doesn’t always mean mental illness.
        </span>
      </Slide>
      <Fade
        cascade
        triggerOnce
        damping={0.02}
        className=" !flex !justify-center !flex-wrap text-center mt-4"
      >
        Even people without a diagnosed condition can feel
      </Fade>

      <div className="w-full grid grid-cols-12 gap-6 md:gap-12 mt-10 ">
        <div className="col-span-6 sm:col-span-3">
          <Zoom triggerOnce duration={2000} direction="up">
            <Image
              className="overflow-hidden object-cover aspect-square w-full rounded-xl sm:rounded-3xl"
              alt="image landscape expan about mental health"
              height={100}
              width={200}
              src="/images/mockup_image.jpeg"
            />
          </Zoom>
          <div className="mt-4">
            <div className="flex">
              {" "}
              <span className="text-orange-400 font-bold text-lg mr-2">
                |{" "}
              </span>{" "}
              <Fade triggerOnce className="!flex !flex-wrap">Burned out</Fade>
            </div>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Zoom triggerOnce duration={2000} delay={100} direction="up">
            <Image
              className="overflow-hidden object-cover aspect-square w-full rounded-xl sm:rounded-3xl"
              alt="image landscape expan about mental health"
              height={100}
              width={200}
              src="/images/mockup_image.jpeg"
            />
          </Zoom>
          <div className="mt-4">
            <div className="flex">
              {" "}
              <span className="text-orange-400 font-bold text-lg mr-2">
                |{" "}
              </span>{" "}
              <Fade triggerOnce className="!flex !flex-wrap">Emotionally numb</Fade>
            </div>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Zoom triggerOnce duration={2000}  delay={200} direction="up">
            <Image
              className="overflow-hidden object-cover aspect-square w-full rounded-xl sm:rounded-3xl"
              alt="image landscape expan about mental health"
              height={100}
              width={200}
              src="/images/mockup_image.jpeg"
            />
          </Zoom>
          <div className="mt-4">
            <div className="flex">
              <span className="text-orange-400 font-bold text-lg mr-2">| </span>{" "}
              <Fade triggerOnce className="!flex !flex-wrap">Unmotivated</Fade>
            </div>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Zoom triggerOnce duration={2000}  delay={300} direction="up">
            <Image
              className="overflow-hidden object-cover aspect-square w-full rounded-xl sm:rounded-3xl"
              alt="image landscape expan about mental health"
              height={100}
              width={200}
              src="/images/mockup_image.jpeg"
            />
          </Zoom>
          <div className="mt-4">
            <div className="flex">
              <span className="text-orange-400 font-bold text-lg mr-2">| </span>{" "}
              <Fade className="!flex !flex-wrap">Chronically anxious</Fade>
            </div>
          </div>
        </div>

        <Slide triggerOnce direction="up" className="col-span-12 text-center">
          <p>
            That’s why checking in with your mental health — just like you would
            with your physical health — is essential.
          </p>
        </Slide>
      </div>
    </div>
  );
}

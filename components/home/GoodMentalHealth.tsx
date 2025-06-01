import React from "react";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Fade, Slide } from "react-awesome-reveal";

export default function GoodMentalHealth() {
  return (
    <div className="w-full">
      <Slide triggerOnce direction="down" className="">
        <span className={title({ color: "blue", size: "sm" })}>
          Good mental health means
        </span>
      </Slide>

      <div className="w-full grid grid-cols-12 gap-6 md:gap-12 mt-10 ">
        <div className="col-span-12 sm:col-span-6">
          <Slide triggerOnce direction="left">
          <Image
            className="overflow-hidden object-cover aspect-[4/2] w-full rounded-xl sm:rounded-3xl"
            alt="image landscape expan about mental health"
            height={100}
            width={200}
            src="/images/mockup_image.jpeg"
          />
          </Slide>
          <Fade triggerOnce className="mt-4">
            <p>
              {" "}
              <span className="text-orange-400 font-bold text-lg">- </span>{" "}
              Feeling generally positive about yourself and your life
            </p>
          </Fade>
        </div>

        <div className="col-span-12 sm:col-span-6">
          <Slide triggerOnce direction="right">
          <Image
            className="overflow-hidden object-cover aspect-[4/2] w-full rounded-xl sm:rounded-3xl"
            alt="image landscape expan about mental health"
            height={100}
            width={200}
            src="/images/mockup_image.jpeg"
          />
          </Slide>
          <Fade triggerOnce className="mt-4">
            <p>
              {" "}
              <span className="text-orange-400 font-bold text-lg">- </span>{" "}
              Being able to connect with others
            </p>
          </Fade>
        </div>

        <div className="col-span-12 sm:col-span-6">
          <Slide triggerOnce  delay={200} direction="left">
          <Image
            className="overflow-hidden object-cover aspect-[4/2] w-full rounded-xl sm:rounded-3xl"
            alt="image landscape expan about mental health"
            height={100}
            width={200}
            src="/images/mockup_image.jpeg"
          />
          </Slide>
          <Fade triggerOnce  delay={300} className="mt-4">
            <p>
              {" "}
              <span className="text-orange-400 font-bold text-lg">- </span>{" "}
              Having the tools to cope with stress, failure, or uncertainty
            </p>
          </Fade>
        </div>

        <div className="col-span-12 sm:col-span-6">
          <Slide triggerOnce delay={200} direction="right">
          <Image
            className="overflow-hidden object-cover aspect-[4/2] w-full rounded-xl sm:rounded-3xl"
            alt="image landscape expan about mental health"
            height={100}
            width={200}
            src="/images/mockup_image.jpeg"
          />
          </Slide>
          <Fade triggerOnce delay={300} className="mt-4">
            <p>
              {" "}
              <span className="text-orange-400 font-bold text-lg">- </span>{" "}
              Knowing when to rest, reflect, or ask for help
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

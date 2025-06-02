import React from "react";
import Image from "next/image";
import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";
import Link from "next/link";
import { Button } from "@heroui/button";
import { title } from "../primitives";
export default function () {
  return (
    <div className="w-full grid grid-cols-12 gap-6 md:gap-12">
      <div className=" col-span-6 md:col-span-3 order-2 md:order-1">
        <Fade triggerOnce direction="left">
          <Image
            className="overflow-hidden object-cover h-[300px] w-full rounded-xl sm:rounded-3xl"
            alt="image landscape expan about mental health"
            height={1000}
            width={2000}
            src="/images/last_section_2.png"
          />
        </Fade>
      </div>
      <div className="col-span-12 md:col-span-6 order-1 md:order-2">
        <Fade triggerOnce direction="down">
          <Image
            className="overflow-hidden object-cover h-[300px] w-full rounded-xl sm:rounded-3xl"
            alt="image landscape expan about mental health"
            height={1000}
            width={2000}
            src="/images/last_section_1.png"
          />
        </Fade>
      </div>
      <div className=" col-span-6 md:col-span-3 order-3">
        <Fade triggerOnce direction="right">
          <Image
            className="overflow-hidden object-cover h-[300px] w-full rounded-xl sm:rounded-3xl"
            alt="image landscape expan about mental health"
            height={1000}
            width={2000}
            src="/images/last_section_3.png"
          />
        </Fade>
      </div>

      <div className="col-span-12 flex justify-center order-4">
        <Fade triggerOnce direction="up">
          <h3 className="font-bold max-w-[600px] text-center">
            "Mental health is not a destination, but a journey. And every step
            you take to care for your mind is worth it."
          </h3>
        </Fade>
      </div>

      <div className="col-span-12 ">
        <Slide
          triggerOnce
          direction="down"
          className="col-span-7 sm:h-[250px] "
        >
          <Fade
            triggerOnce
            delay={200}
            cascade
            className=" text-center "
          >
            <span className={title({ color: "blue", size: "lg" })}>
              Moment of Mind&nbsp;
            </span>
            <br />
            {/* <span className="text-xl md:text-3xl">
              Welcome to Moment of Mind
            </span> */}
            <Fade
              triggerOnce
              delay={300}
              cascade
              damping={0.1}
              className="!flex flex-wrap sm:!block justify-center text-wrap sm:text-xl mt-3 text-gray-600"
            >
              “ Take a moment… for your mind.”
            </Fade>
            <JackInTheBox triggerOnce delay={2000} className="mt-4">
              <Link href="/form-survey">
                <Button className="" color="secondary">
                  <Image
                    alt="calendar icon"
                    src="/solar_calendar-linear.svg"
                    height={16}
                    width={16}
                  />{" "}
                  Create your Moment
                </Button>
              </Link>
            </JackInTheBox>
          </Fade>
        </Slide>
      </div>
    </div>
  );
}

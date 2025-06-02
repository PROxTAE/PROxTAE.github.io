import React from "react";
// import { Image } from "@heroui/image";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
export default function MentalHealthBalance() {
  return (
    <div className="w-full  ">
      <Slide triggerOnce direction="down" className=" text-center ">
        <span className={title({ color: "blue", size: "sm" })}>
          Mental health is not just the absence of illness. &nbsp;
        </span>
      </Slide>

      <div className="  relative max-w-full mt-64 sm:mt-16  ">
        <Fade
          duration={2000}
          triggerOnce
          className=" z-10 relative sm:h-full !w-full"
        >
          <Image
            className="overflow-hidden object-cover rounded-xl sm:rounded-3xl  w-full h-full  "
            alt="hero Image "
            height={2000}
            src="/images/bg-2.png"
            width={2000}
          />
        </Fade>

        <Fade
          direction="up"
          triggerOnce
          duration={2000}
          className="z-20 absolute bottom-0    sm:right-0"
        >
          <Image
            className=" rounded-xl sm:rounded-3xl  hover:scale-105 transition-all"
            alt="hero Image "
            height={300}
            src="/images/hero_3_2.png"
            width={300}
          />
        </Fade>
      </div>
      {/* <Zoom triggerOnce className=" mt-14">
        <Image
          className="overflow-hidden object-cover w-full rounded-xl aspect-[3/1] sm:rounded-3xl"
          alt="image landscape expan about mental health"
          height={100}
          width={2000}
          src="/images/hero_3_1.png"
        />
      </Zoom> */}
      <Slide triggerOnce direction="up" className="mt-12 flex justify-center ">
        <p className="text-center max-w-[600px] ">
          It’s the presence of balance, self-awareness, and emotional
          well-being. Just like physical health,
          <span className="text-secondary">
            we all have mental health. And just like the body
          </span>{" "}
          , the mind needs care, attention, and rest.
        </p>
      </Slide>
    </div>
  );
}

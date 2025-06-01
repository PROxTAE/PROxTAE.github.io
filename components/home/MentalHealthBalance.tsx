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

      <Zoom triggerOnce className=" mt-14">
        <Image
          className="overflow-hidden object-cover w-full rounded-xl sm:rounded-3xl"
          alt="image landscape expan about mental health"
          height={100}
          width={200}
          src="/images/landscape_image_mockup.png"
        />
      </Zoom>
      <Slide triggerOnce direction="up"  className="mt-12 flex justify-center ">
        <p className="text-center max-w-[600px] ">
          It’s the presence of balance, self-awareness, and emotional
          well-being. Just like physical health,
          <span className="text-secondary">we all have mental health. And just like the body</span> , the
          mind needs care, attention, and rest.
        </p>
      </Slide>
    </div>
  );
}

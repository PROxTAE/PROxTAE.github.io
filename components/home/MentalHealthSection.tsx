import React from "react";
// import { Image } from "@heroui/image";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
export default function MentalHealthSection() {
  return (
    <div className="w-full  ">
      <Slide triggerOnce direction="down" duration={1000}>
      <div className=" text-center ">
        <span className={title({ color: "blue", size: "sm" })}>
          Understanding &nbsp;
        </span>
        <span className={title({ color: "yellow", size: "sm" })}>
          Your Mental Health&nbsp;
        </span>
      </div>
      </Slide>

      <Zoom triggerOnce duration={2000} className=" mt-14">
        <Image
          className="overflow-hidden object-cover aspect-[3/1] w-full rounded-xl sm:rounded-3xl"
          alt="image landscape expan about mental health"
          height={100}
          width={200}
          src="/images/landscape_image_mockup.png"
        />
      </Zoom>
      <Fade  triggerOnce className="mt-12">
        <p>
          The CDC defines mental health as “our emotional, psychological, and
          social well-being. It affects how we think, feel, and act. It also
          helps determine how we handle stress, relate to others, and make
          healthy choices.”
        </p>
      </Fade>
      <Slide triggerOnce direction="up" className="mt-10 flex justify-center">
        <h4 className="font-bold text-center max-w-[600px]">
          Mental health isn’t just about avoiding mental illness. It’s about how
          you think, feel, and act — and how well you can cope with life.
        </h4>
      </Slide>
    </div>
  );
}

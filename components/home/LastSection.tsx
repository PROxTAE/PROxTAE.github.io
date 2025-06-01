import React from "react";
import Image from "next/image";
import { Fade  } from "react-awesome-reveal";
export default function () {
  return (
    <div className="w-full grid grid-cols-12 gap-6 md:gap-12">
      <div className=" col-span-6 md:col-span-3 order-2 md:order-1">

        <Fade triggerOnce direction="left">
        <Image
          className="overflow-hidden object-cover h-[300px] w-full rounded-xl sm:rounded-3xl"
          alt="image landscape expan about mental health"
          height={100}
          width={200}
          src="/images/mockup_image.jpeg"
        />
        </Fade>
      </div>
      <div className="col-span-12 md:col-span-6 order-1 md:order-2">
        <Fade triggerOnce direction="down">
        <Image
          className="overflow-hidden object-cover h-[300px] w-full rounded-xl sm:rounded-3xl"
          alt="image landscape expan about mental health"
          height={100}
          width={200}
          src="/images/mockup_image.jpeg"
        />
        </Fade>
      </div>
      <div className=" col-span-6 md:col-span-3 order-3">
        <Fade triggerOnce direction="right">
        <Image
          className="overflow-hidden object-cover h-[300px] w-full rounded-xl sm:rounded-3xl"
          alt="image landscape expan about mental health"
          height={100}
          width={200}
          src="/images/mockup_image.jpeg"
        />
        </Fade>
      </div>

      <div className="col-span-12 flex justify-center order-4">
        <Fade triggerOnce direction="up">
        <h3 className="font-bold max-w-[600px] text-center">
            "Mental health is not a destination, but a journey. And every step you take to care for your mind is worth it."
        </h3>
        </Fade>
      </div>
    </div>
  );
}

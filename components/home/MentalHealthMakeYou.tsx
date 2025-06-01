import React from "react";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Slide  } from "react-awesome-reveal";

export default function MentalHealthMakeYou() {
  return (
    <div className="w-full">
      <Slide triggerOnce duration={2000} direction="up" className="">
        <span className={title({ color: "blue", size: "sm" })}>
          It plays a role in how you
        </span>
      </Slide>

      <div className="w-full grid grid-cols-12 gap-6 sm:gap-12 mt-10  ">
        <Slide triggerOnce  className="col-span-12 md:col-span-4">
          <Image
            className="overflow-hidden object-cover h-[200px] md:h-full w-full rounded-xl sm:rounded-3xl"
            alt="image landscape expan about mental health"
            height={100}
            width={200}
            src="/images/mockup_image.jpeg"
          />
        </Slide>

        <div className="col-span-12 md:col-span-8 grid grid-cols-8 gap-6 md:gap-12 ">
          <div className="col-span-4">
            <Slide triggerOnce  className="">
              <Image
                className="overflow-hidden object-cover aspect-[4/2]  w-full rounded-xl sm:rounded-3xl"
                alt="image landscape expan about mental health"
                height={100}
                width={200}
                src="/images/mockup_image.jpeg"
              />
              <div className="mt-2">
                <h3 className=" font-bold text-md sm:text-lg">Handle stress</h3>
              </div>
            </Slide>

            <Slide triggerOnce   className="mt-6 ">
              <Image
                className="overflow-hidden object-cover aspect-[4/3]  w-full rounded-xl sm:rounded-3xl"
                alt="image landscape expan about mental health"
                height={100}
                width={200}
                src="/images/mockup_image.jpeg"
              />
              <div className="mt-2">
                <h3 className=" font-bold text-md sm:text-lg">
                  Build relationships
                </h3>
              </div>
            </Slide>
          </div>

          <div className="col-span-4">
            <Slide triggerOnce direction="right"  className="">
              <Image
                className="overflow-hidden object-cover aspect-[4/3]  w-full rounded-xl sm:rounded-3xl"
                alt="image landscape expan about mental health"
                height={100}
                width={200}
                src="/images/healthy_choices.png"
              />
              <div className="mt-2">
                <h3 className=" font-bold text-md sm:text-lg">
                  Make healthy choices
                </h3>
              </div>
            </Slide>

            <Slide triggerOnce direction="right"  className="mt-6">
              <Image
                className="overflow-hidden object-cover aspect-[4/2] w-full rounded-xl sm:rounded-3xl"
                alt="image landscape expan about mental health"
                height={100}
                width={200}
                src="/images/mockup_image.jpeg"
              />
              <div className="mt-2">
                <h3 className=" font-bold text-md sm:text-lg">
                  Feel about your day-to-day life
                </h3>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

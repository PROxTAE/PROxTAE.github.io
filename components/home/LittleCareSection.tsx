import React from "react";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Fade } from "react-awesome-reveal";

export default function LittleCareSection() {
  return (
    <div className="w-full">
      <Fade triggerOnce cascade direction="down">
        <div className="text-center">
          <span className={title({ color: "blue", size: "sm" })}>
            A{" "}
            <span className={title({ color: "yellow", size: "sm" })}>
              little care
            </span>{" "}
            goes a long way.
          </span>
        </div>
        <div className="text-center mt-4">
          Taking small steps to support your mental health daily can
        </div>
      </Fade>

      <div className="w-full grid grid-cols-12 gap-6 md:gap-12 mt-10  ">
        <div className="col-span-6 md:col-span-8 md:grid md:grid-cols-8 gap-6 md:gap-12 ">
          <div className="col-span-8 md:col-span-5">
            <Fade triggerOnce cascade>
              <Image
                className="overflow-hidden object-cover h-[200px]  w-full rounded-xl sm:rounded-3xl"
                alt="image landscape expan about mental health"
                height={100}
                width={200}
                src="/images/mockup_image.jpeg"
              />
              <div className="mt-2">
                <h3 className=" font-bold text-lg">
                  Protect you from stress and burnout
                </h3>
              </div>
            </Fade>
          </div>

          <div className="col-span-8 md:col-span-3">
            <Fade triggerOnce cascade>
              <Image
                className="overflow-hidden object-cover  h-[200px]  w-full rounded-xl sm:rounded-3xl"
                alt="image landscape expan about mental health"
                height={100}
                width={200}
                src="/images/mockup_image.jpeg"
              />
              <div className="mt-2">
                <h3 className=" font-bold text-lg">Improve your focus</h3>
              </div>
            </Fade>
          </div>

          <div className=" col-span-8 hidden md:block">
            <Fade triggerOnce cascade>
              <Image
                className="overflow-hidden object-cover h-[300px] w-full rounded-xl sm:rounded-3xl"
                alt="image landscape expan about mental health"
                height={100}
                width={200}
                src="/images/mockup_image.jpeg"
              />
              <div className="mt-2">
                <h3 className=" font-bold text-lg">
                  Boost your energy and motivation
                </h3>
              </div>
            </Fade>
          </div>
        </div>

        <div className="col-span-6 md:col-span-4 ">
          <Fade triggerOnce className="  h-[80%] sm:h-[95%]">

            <Image
              className="overflow-hidden object-cover h-full w-full rounded-xl sm:rounded-3xl"
              alt="image landscape expan about mental health"
              height={100}
              width={200}
              src="/images/mockup_image.jpeg"
            />
          </Fade>
            <Fade triggerOnce delay={200} className="mt-2">
              <h3 className=" font-bold text-lg">Deepen your relationships</h3>
            </Fade>
          
        </div>

        <div className=" col-span-12 block md:hidden ">
          <Fade triggerOnce cascade>
            <Image
              className="overflow-hidden object-cover h-[300px] w-full rounded-xl sm:rounded-3xl"
              alt="image landscape expan about mental health"
              height={100}
              width={200}
              src="/images/mockup_image.jpeg"
            />
            <div className="mt-2">
              <h3 className=" font-bold text-lg">
                Boost your energy and motivation
              </h3>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

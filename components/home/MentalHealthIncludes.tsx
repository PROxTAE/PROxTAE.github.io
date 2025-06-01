import React from "react";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Fade, Slide } from "react-awesome-reveal";

export default function MentalHealthIncludes() {
  return (
    <div className="">
      <Slide triggerOnce duration={2000} className="">
        <span className={title({ color: "blue", size: "sm" })}>
          Mental health includes
        </span>
      </Slide>

      <div className=" grid grid-cols-12 gap-6 md:gap-12 mt-10 ">
        {/* Your thoughts */}
        <div className="col-span-6 sm:col-span-3">
          <Fade direction="up" triggerOnce duration={1000} className="w-full">
            <Image
              className="overflow-hidden object-cover aspect-[3/4] w-full  rounded-xl sm:rounded-3xl"
              alt="image landscape expan about mental health"
              height={100}
              width={200}
              src="/images/your_thoughts.png"
            />
          </Fade>
          <div className="mt-4">
            <Fade
              cascade
              triggerOnce
              damping={0.05}
              className="text-orange-400 font-bold text-lg"
            >
              Your thoughts
            </Fade>
            <Slide direction="up" triggerOnce>
              <p>how you view yourself and the world</p>
            </Slide>
          </div>
        </div>

        {/* Your emotions */}
        <div className="col-span-6 sm:col-span-3">
          <Fade direction="up" triggerOnce duration={1000} className="w-full">
            <Image
              className="overflow-hidden object-cover aspect-[3/4] w-full rounded-xl sm:rounded-3xl"
              alt="image landscape expan about mental health"
              height={100}
              width={200}
              src="/images/your_emotions.png"
            />
          </Fade>
          <div className="mt-4">
            <Fade
              cascade
              triggerOnce
              damping={0.05}
              className="text-orange-400 font-bold text-lg"
            >
              Your emotions
            </Fade>
            <Slide direction="up" triggerOnce>
              <p>
                how you process feelings like joy, sadness, stress, or anger
              </p>
            </Slide>
          </div>
        </div>
        {/* Your behavior  */}
        <div className="col-span-6 sm:col-span-3">
          <Fade direction="up" triggerOnce duration={1000} className="w-full">
            <Image
              className="overflow-hidden object-cover aspect-[3/4] w-full rounded-xl sm:rounded-3xl"
              alt="image landscape expan about mental health"
              height={100}
              width={200}
              src="/images/your_behavior.png"
            />
          </Fade>
          <div className="mt-4">
            <Fade
              cascade
              triggerOnce
              damping={0.05}
              className="text-orange-400 font-bold text-lg"
            >
              Your behavior
            </Fade>
            <Slide direction="up" triggerOnce>
              <p>how you react to challenges and interact with others</p>
            </Slide>
          </div>
        </div>
        {/* Your resilience */}
        <div className="col-span-6 sm:col-span-3">
          <Fade direction="up" triggerOnce duration={1000} className="w-full">
            <Image
              className="overflow-hidden object-cover aspect-[3/4] w-full rounded-xl sm:rounded-3xl"
              alt="image landscape expan about mental health"
              height={100}
              width={200}
              src="/images/your_resilience.png"
            />
          </Fade>
          <div className="mt-4">
            <Fade
              cascade
              triggerOnce
              damping={0.05}
              className="text-orange-400 font-bold text-lg"
            >
              Your resilience
            </Fade>
            <Slide direction="up" triggerOnce>
              <p>how you bounce back from difficult situations</p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

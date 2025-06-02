import React from "react";
import Image from "next/image";
// import { Image } from "@heroui/image";
import { title, subtitle } from "@/components/primitives";
import { Fade, Slide } from "react-awesome-reveal";


export default function AboutProject() {
  return (
    <div className="w-full md:grid grid-cols-12 gap-12 ">
      <div className="col-span-12 md:col-span-5 flex flex-col justify-center ">
        <div className="">
          <Fade triggerOnce   className={title({ color: "blue", size: "sm" })}>
            What is Moment of Mind?&nbsp;
          </Fade>
          <div className="mt-4">
            <Fade triggerOnce cascade>
                &nbsp;
              <span className="text-secondary">Moment of Mind</span> 
              <span>
                is a wellness platform that helps you reconnect
              with your inner self through small, meaningful daily activities.
              Based on your lifestyle and personality, we generate a 30-day
              calendar tailored to promote balance and joy—starting with just a
              moment a day.
                </span> 
            </Fade>
          </div>
        </div>
      </div>

      <Slide triggerOnce direction="right" duration={2000} className="col-span-12 md:col-span-7 mt-6 md:mt-0">
        <Image
          className="overflow-hidden object-cover  aspect-[3/2] w-full rounded-2xl "
          alt="HeroUI hero Image with delay"
          height={1000}
          src="/images/about_project.png"
          width={1000}
        />
      </Slide>
    </div>
  );
}

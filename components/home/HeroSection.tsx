import React from "react";
// import { Image } from "@heroui/image";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";

export default function HeroSection() {
  return (
    <div className="w-auto h-auto sm:w-full md:h-svh  flex items-center ">
      <div className="   sm:grid sm:grid-cols-12 gap-6 md:gap-12 mt-0 md:-mt-20  ">
        <Fade
          duration={2000}
          triggerOnce
          direction="left"
          className="col-span-5 hidden  sm:block"
        >
          <Image
            className="overflow-hidden object-cover h-full w-full rounded-xl sm:rounded-3xl "
            alt="HeroUI hero Image with delay"
            height={600}
            src="/images/hero_1.png"
            width={600}
          />
        </Fade>
        <div className="col-span-12 sm:col-span-7 grid grid-cols-7 gap-6 md:gap-12 mt-14 sm:mt-0">
          <Slide
            triggerOnce
            direction="down"
            className="col-span-7 sm:h-[250px] "
          >
            <Fade triggerOnce delay={200} cascade className=" text-center sm:text-left">
              <span className={title({ color: "blue", size: "lg" })}>
                Moment of Mind&nbsp;
              </span>
              <br />
              <span className="text-xl md:text-3xl">
                Welcome to Moment of Mind
              </span>
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
                <Button className="" color="primary">
                  Create your Moment
                </Button>
              </JackInTheBox>
            </Fade>
          </Slide>
          <Fade
            duration={2000}
            triggerOnce
            className="col-span-4 sm:col-span-3 "
          >
            <Image
              className="object-cover h-full w-full rounded-xl sm:rounded-3xl "
              alt="hero Image"
              height={300}
              src="/images/hero_2.png"
              width={300}
            />
          </Fade>
          <Fade
            duration={2000}
            triggerOnce
            className="col-span-3 block sm:hidden "
          >
            <Image
              className="overflow-hidden object-cover h-full w-full rounded-xl sm:rounded-3xl "
              alt="HeroUI hero Image with delay"
              height={600}
              src="/images/hero_1.png"
              width={600}
            />
          </Fade>
          <div className="col-span-7 sm:col-span-4 relative max-w-full   ">
            <Fade duration={2000} triggerOnce className=" z-10 relative h-[200px] sm:h-full !w-full">
              <Image
                className="overflow-hidden object-cover rounded-xl sm:rounded-3xl  w-full h-full  "
                alt="hero Image "
                height={300}
                src="/images/hero_3_1.png"
                width={300}
              />
            </Fade>

              <Fade
                direction="up"
                duration={2000}
                
                className="z-20 absolute bottom-0  right-0"
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
        </div>
      </div>
    </div>
  );
}

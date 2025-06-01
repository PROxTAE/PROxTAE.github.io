import React from "react";
import Image from "next/image";
import { JackInTheBox } from "react-awesome-reveal";
export default function JustPhotoSection() {
  return (
    <JackInTheBox triggerOnce duration={2000} className="w-full">
      <Image
        className="overflow-hidden object-cover aspect-[3/1] w-full rounded-xl sm:rounded-3xl"
        alt="image landscape expan about mental health"
        height={100}
        width={200}
        src="/images/landscape_image_mockup.png"
      />
    </JackInTheBox>
  );
}


import HeroSection from "@/components/home/HeroSection";
import AboutProject from "@/components/home/AboutProject";
import MentalHealthSection from "@/components/home/MentalHealthSection";
import MentalHealthIncludes from "@/components/home/MentalHealthIncludes";
import MentalHealthMakeYou from "@/components/home/MentalHealthMakeYou";
import MentalHealthBalance from "@/components/home/MentalHealthBalance";
import GoodMentalHealth from "@/components/home/GoodMentalHealth";
import PoorMentalHealth from "@/components/home/PoorMentalHealth";
import JustPhotoSection from "@/components/home/JustPhotoSection";
import LittleCareSection from "@/components/home/LittleCareSection";
import LastSection from "@/components/home/LastSection";

export default function Home() {
  return (
    <>
      <section className="">
        <HeroSection />
      </section>
      <section className="mt-64">
        <AboutProject/>
      </section>
      <section className="mt-64">
        <MentalHealthSection/>
      </section>
      <section className="mt-64">
        <MentalHealthIncludes/>
      </section>
      <section className="mt-64">
        <MentalHealthMakeYou/>
      </section>
      <section className="mt-64">
        <MentalHealthBalance/>
      </section>
      <section className="mt-64">
        <GoodMentalHealth/>
      </section>
      <section className="mt-64">
        <PoorMentalHealth/>
      </section>
      <section className="mt-64">
        <JustPhotoSection/>
      </section>
      <section className="mt-64">
        <LittleCareSection/>
      </section>
      <section className="mt-64">
        <LastSection/>
      </section>

    </>
  );
}

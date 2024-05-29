"use client";
import Carousel from "../components/Carousel";
export default function About() {
  //add pictures from my phone later.
  return (
    <div className="grid place-items-center">
      <article className="prose text-center text-2xl ">
        <h1>About Me</h1>
        <p className="mx-5">
          Hello! I&apos;m Chad, a 23 y/o who loves outdoor adventures, cooking, and
          all things technology. Oh and did I mention I have a twin?{" "}
        </p>
        <Carousel ></Carousel>
      </article>
    </div>
  );
}

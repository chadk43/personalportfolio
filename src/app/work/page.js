"use client";

import WorkTimeline from "../components/WorkTimeline";

const downloadFile = () => {
  const url = "/Chad Koivuneva Resume.pdf";
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "Chad Koivuneva Resume.pdf";
  anchor.click();
};

export default function Work() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <article className="prose text-center text-2xl max-w-full px-4">
        <h1>Work Experience</h1>
        <button
          className="btn  btn-primary my-4"
          onClick={downloadFile}
        >
          Download My Resume
        </button>
        <div className="mx-5">
          <WorkTimeline />
        </div>
        <h1>Education</h1>
        <div className="mx-24">
          <div className="wrap">
            <h2 className="inline ">Mount Royal University</h2>
            <p className="inline"> | 2019-2023</p>
          </div>
          <h3 className="my-1">Bachelors of Science</h3>
          <p>Computer Science </p>

          <h3 className="inline">COMP TIA A+</h3>
          <p className="inline "> | 2024</p>
        </div>{" "}
        &nbsp;
        <div className="whitespace-nowrap mb-20 "></div>
      </article>
    </div>
  );
}

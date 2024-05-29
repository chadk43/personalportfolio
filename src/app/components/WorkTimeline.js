export default function WorkTimeline() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">2022-Current</time>
          <div className="text-lg font-black">Webmaster, AAN</div>
          In my role as Head Webmaster for the Alberta Nurses Association, I am
          responsible for performing website updates in wordpress, implementing
          monthly newsletters/webinars, and optimizing the platform for enhanced
          performance.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end md:text-start  mb-10">
          <time className="font-mono italic">December 2023-Current</time>
          <div className="text-lg font-black">Tutor, Scholars</div>
          I&apos;ve always had a passion for helping others, and as a tutor I get to
          help students succeed in their course work. At Scholars I teach
          English, Math, and Science for K-12 students and create learning
          videos for their social media.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">2022</time>
          <div className="text-lg font-black">
            Customer Service Representative, Soffrittos
          </div>
          At Soffrittos, I provided comprehensive customer support and ensured a
          positive shopping experience. I also took on technical
          responsibilities by efficiently fixing the POS system and managing
          inventory.
        </div>
        <hr/>
      </li>
    </ul>
  );
}

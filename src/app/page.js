"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  /*Can play with width/height. Set w-full and h-full and manually do md: w-3/5 md: h-3/5 as necessary*/
  return (
    <div>
      <main className="grid place-items-center h-[calc(100vh-200px)] ">
        <div className="block sm:hidden px-4 py-2 ">
          <article className="prose text-center text-2xl">
            <h1>Chad</h1>
            <h1>Koivuneva</h1>
            <p></p>
          </article>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-4 grid-flow-row sm:grid-flow-col gap-2 px-4 py-12 sm:mb-0 mb-80 leading-10 w-9/12 h-96 xl:w-7/12 sm:w-10/12">
          <div className="hidden sm:flex p-4 rounded-xl sm:row-span-4 whitespace-normal items-end justify-items-end">
            <div className="max-w-full">
              <article className="prose text-left text-2xl">
                <h1>Chad</h1>
                <h1>Koivuneva</h1>
                <p></p>
              </article>
            </div>
          </div>

          <button
            className="flex justify-center items-center pb-9 pt-7 btn btn-neutral rounded-xl col-span-1 whitespace-normal"
            onClick={() => router.push("/about")}
          >
            <p className="max-w-full text-center">About</p>
          </button>
          <button
            className="flex justify-center items-center pb-9 pt-7 btn btn-primary rounded-xl row-span-1 col-span-1 whitespace-normal"
            onClick={() => router.push("/work")}
          >
            <p className="max-w-full text-center">
              Education & Work Experience
            </p>
          </button>
          <button
            className="flex justify-center items-center pb-9 pt-7 btn btn-secondary rounded-xl row-span-1 col-span-1 whitespace-normal"
            onClick={() => router.push("/projects")}
          >
            <div className="max-w-full text-center">Projects</div>
          </button>
          <div
            className=" flex justify-center items-center pb-9 pt-7 btn btn-accent rounded-xl row-span-1 col-span-1 whitespace-normal"
            onClick={() => router.push("/contact")}
          >
            <p className="max-w-full text-center">Contact</p>
          </div>
        </div>
      </main>
    </div>
  );
}

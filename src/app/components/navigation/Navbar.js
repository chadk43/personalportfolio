"use client";
import ThemeChange from "./Themechange";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className="navbar sticky top-0 bg-opacity-90 backdrop-blur-lg z-10">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost m-4">
          <ThemeChange></ThemeChange>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </button>
      </div>
      <div className="flex-1"></div>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost m-4"
          onClick={() => router.push("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

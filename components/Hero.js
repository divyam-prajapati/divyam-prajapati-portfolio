import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden max-w-7xl  mx-auto">
      {/* Text container */}

      <div className="w-full md:w-1/3 mx-auto text-center md:text-left mx-4">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-2xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-2xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Tech Savvy.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-2xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              AI Enthusiast.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-2xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Problem Solver.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-50">
        <div className="w-3/4">
          <img src={userData.avatarUrl} 
            alt="logo" 
            style={{
              ["filter"]: "contrast(110%) brightness(110%) saturate(100%) sepia(30%) hue-rotate(0deg) grayscale(100%) invert(0%) blur(0px)",
              ["mix-blend-mode"]: "normal",
              ["background"]: "rgba(0, 0, 0, 0)", 
              ["opacity"]: "1",
            }} 
          />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

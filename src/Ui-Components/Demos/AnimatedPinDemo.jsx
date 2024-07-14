import React from "react";
import { PinContainer } from "../components/resume-3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="3d-resume grid justify-center items-center mt-32 ">
      <h2 className="flex justify-center mt-32 text-4xl" >Resume</h2>
      <div className="h-[40rem] w-full flex items-center justify-center ">
        <PinContainer
        
          title="/ui.aceternity.com"
          href="https://www.linkedin.com/in/dinesh-k-725343293"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              My Resume
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500  ">
                Click or Hover here to get my resume 👇
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}

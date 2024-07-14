import React from "react";
import { FlipWords } from "../components/flip-words";
import Gmail_Icons from "../../assets/gmail.png";
import Github_Icons from "../../assets/github.png";
import linkedin_Icons from "../../assets/linkedin.png";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

export function FlipWordsDemo() {
  const names = ["Dinesh "];
  const words = ["unique", "beautiful", "modern"];

  const handleConfetti = () => {
    confetti();
  };

  return (
    <div className=" grid gap-5 justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Hi I'm
        <FlipWords words={names} className="hover:text-cyan-400" /> <br />
        Web Developer <br />
        I can create
        <FlipWords words={words} className="hover:text-emerald-300" />
        Websites
      </div>
      <Button
        disableRipple
        className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0  after:z-[-1] after:transition after:!duration-500 hover:after:scale-110 hover:after:opacity-0 bg-blue-500 hover:bg-orange-500"
        size="lg"
        onPress={handleConfetti}
      >
        Press me
      </Button>
      <div >
        <ul className="flex gap-5 w-32">
          <li>
            <a href="">
              <img src={Gmail_Icons} alt=" not available" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dinesh-k-725343293">
              <img src={linkedin_Icons} alt=" not available" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Dinesh-Web-It">
              <img src={Github_Icons} alt=" not available" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

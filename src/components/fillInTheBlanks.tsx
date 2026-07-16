"use client";

import { useState } from "react";
import Image from "next/image";
import Checkmark from "@/public/checkmark.svg"
import Neutral from "@/public/neutral.svg"
import X from "@/public/x.svg"
import ProgressBar from "./progressBar";
import { X as Cancel } from "react-feather";
import Link from "next/link";



export default function fillInTheBlanks({ data }: any) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0)
  const [increment, setIncrement] = useState(0)
  const [indicator, setIndicator] = useState<"neutral" | "correct" | "wrong">("neutral");
  const [selected, setSelected] = useState("");
  const question = data.file.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / data.file.questions.length) * 100;

  if (!indicator) {
    setIndicator('neutral')
  }

  function checkAnswer(option: string) {
    if (option === question.answer) {
      setIndicator("correct");

      setTimeout(() => {
        if (currentQuestion < data.file.questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelected("");
          setIndicator("neutral");
        } else {
          window.history.back();
        }
      }, 1000);

    } else {
      setIndicator("wrong");
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center pt-5 gap-5">
        <Cancel className="cursor-pointer" onClick={() => window.history.back()}/>
        <ProgressBar progress={increment} />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl">
            {data.courseIndex.Sections[data.sectionButANumber].lessons[data.lessonButANumber].name}
          </h1>
          <p>{question.question}</p>
          <div className='flex gap-3 pt-4'>
            {question.options.map((option: string) => (
              <div 
                key={option}
                onClick={() => setSelected(option)} 
                className={`${
                  selected === option
                    ? "bg-teal-400 text-black"
                    : "bg-[#1f1f1f]"
                } rounded-xl p-3`} 
              >
                {option}
              </div>
            ))}  
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full">
          <hr className='border-neutral-800'/>
        </div>
        <div className={`flex flex-row p-10 justify-between items-center
            ${indicator === "neutral"
                  ? ""
                  : indicator == "correct"
                  ? "bg-green-400"
                  : "bg-red-400"
            }
          `}>
          <div className="flex items-center gap-5">
            <Image
              src={ // ? a ternary operator 
                indicator === "neutral" // ? if indicator is neutral
                  ? Neutral // * return Neutral
                  : indicator === "correct" // ? elif if indicator is correct
                  ? Checkmark // * return Checkmark
                  : X // ? else return X
              }
              alt={indicator}
              width={80}
              height={80}
              className="rounded-lg"
            />
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">{
              indicator === "correct"
                ? "Correct Answer!"
                : indicator === "wrong"
                ? "Incorrect Answer!"
                : ""
              }</h1>
            <h1>The quick brown fox jumped over the lazy dog</h1>
          </div>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center justify-center w-50 h-20 bg-teal-400 rounded-3xl" onClick={ () =>
              !selected ? alert("Please select an option and try again") : checkAnswer(selected)
            }>
              <p className="font-bold text-black text-xl">Check Answer</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

import React, { useState } from "react";
import Quiz from "./Quiz";
const AuthForm = () => {
  const [qusIdx, setQusIdx] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const qus = [
    {
      question: "1. What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "London"],
      answer: "Paris"
    },
    {
      question: "2. Who is the current Prime Minister of India?",
      options: ["Modi", "BJP", "Narendra Modi", "Ajit Kumar Gandhi"],
      answer: "Narendra Modi"
    },
    {
      question: "3. -2-2 ?",
      options: ["-1", "-2", "-3", "-4"],
      answer: "-4"
    }
  ];
  const handleClick = (e) => {
    setCurrentAnswer(e);
    if (e === qus[qusIdx].answer) {
      setScore(score + 1);
    }

  };

  const handleNext = () => {
    // if (qus.length-1 == qusIdx) {
    //   setQusIdx(0);
    //    setCurrentAnswer(null);
    //   return;
    // }
    setQusIdx(qusIdx + 1);
    setCurrentAnswer(null);
  };
  return (
    <>
      {qusIdx < qus.length ? (
        <>
          {" "}
          <div>
            <Quiz
              currentAnswerrr={currentAnswer}
              handleClickkk={handleClick}
              qusss={qus[qusIdx].question}
              optionnn={qus[qusIdx].options}
            />
          </div>
          <div className="text-center mt-3 font-extrabold">
            <button
              onClick={handleNext}
              className={
                currentAnswer === null
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-black"
              }
              disabled={currentAnswer === null}
            >
              NEXT
            </button>
          </div>
        </>
      ) : (
          <>
            <div className="text-center font-extrabold bg-sky-400 mt-5">Your Score is : { score}</div>
          </>
      )}
    </>
  );
};

export default AuthForm;

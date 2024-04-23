import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeElapsedInSeconds, setIsTimeElapsedInSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let timeInterval;
    if (isTimerRunning) {
      timeInterval = setInterval(() => {
        setIsTimeElapsedInSeconds((prevTime) => prevTime + 0.1);
        setMilliseconds((preMilliseconds) => (preMilliseconds + 100) % 1000);
      }, 1);
    }
    return () => clearInterval(timeInterval);
  }, [isTimerRunning]);

  const resetTimer = () => {
    clearInterval();
    setIsTimerRunning(false);
    setIsTimeElapsedInSeconds(0);
  };

  const stopTimer = () => {
    clearInterval();
    setIsTimerRunning(false);
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };
  const renderSeconds = () => {
    const seconds = Math.floor(timeElapsedInSeconds % 60);
    return seconds < 10 ? `0${seconds}` : seconds;
  };
  const renderMinutes = () => {
    const minutes = Math.floor(timeElapsedInSeconds / 60);
    return minutes < 10 ? `0${minutes}` : minutes;
  };

  const renderMilliseconds = () => {
    return milliseconds < 10
      ? `00${milliseconds}`
      : milliseconds < 100
      ? `0${milliseconds}`
      : milliseconds;
  };

  const time = `${renderMinutes()} : ${renderSeconds()} : ${renderMilliseconds()}`;

  return (
    <>
      <div className=" flex justify-center bg-slate-100 h-screen">
        <div className=" flex flex-col items-center justify-center bg-white shadow-2xl w-96 h-[36rem] border-2 mt-10 border-black ">
          <h1 className=" text-4xl mb-4 ">Stopwatch</h1>
          <div className=" flex flex-col items-center justify-center w-3/4 h-1/2 border-2 border-black space-y-14 shadow-2xl rounded-md">
            <h1 className=" text-xl font-bold">Timer</h1>
            <h1 className="text-4xl">{time}</h1>
            <div className="">
              <button
                className=" border-2 px-3 mx-2 rounded-md bg-green-400"
                onClick={startTimer}
              >
                <p className=" text-2xl">Start</p>
              </button>
              <button
                className=" border-2 px-3 mx-2 rounded-md bg-red-400"
                onClick={stopTimer}
              >
                <p className=" text-2xl">Stop</p>
              </button>
              <button
                className=" border-2 px-3 mx-1 rounded-md bg-yellow-400 "
                onClick={resetTimer}
              >
                <p className=" text-2xl">Reset</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

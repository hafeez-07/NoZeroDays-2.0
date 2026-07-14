"use client";

import { Play, Pause, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Focus() {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [savedTime, setSavedTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number | null>(null);
  let intervalRef = useRef<number | null>(null);

  //load the stored timer
  useEffect(() => {
    const saved = localStorage.getItem("focus-timer");
    if (saved) {
      const savedTimer = JSON.parse(saved);
      setIsRunning(savedTimer.isRunning);
      setStartTime(savedTimer.startTime);
      setSavedTime(savedTimer.savedTime);
    }
  }, []);

  //continue after refresh if timer is stopped or display where it paused
  useEffect(() => {
    if (isRunning) {
      setElapsedTime((savedTime ?? 0) + Date.now() - (startTime ?? 0));
      intervalRef.current = window.setInterval(() => {
        setElapsedTime((savedTime ?? 0) + Date.now() - (startTime ?? 0));
      }, 1000);
    } else {
      setElapsedTime(savedTime);
    }

    return () => {
      if (intervalRef.current != null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, savedTime, startTime]);

  const startHandler = () => {
    setIsRunning(true);
    const resumeTime = Date.now();
    setStartTime(resumeTime);

    localStorage.setItem(
      "focus-timer",
      JSON.stringify({
        isRunning: true,
        startTime: resumeTime,
        savedTime,
      }),
    );
  };

  const pauseHandler = () => {
    setIsRunning(false);
    setSavedTime(elapsedTime);
    localStorage.setItem(
      "focus-timer",
      JSON.stringify({
        isRunning: false,
        startTime,
        savedTime: elapsedTime,
      }),
    );
  };

  const resetHandler = () => {
    setIsRunning(false);
    setStartTime(0);
    setElapsedTime(0);
    setSavedTime(0);
    localStorage.setItem(
      "focus-timer",
      JSON.stringify({
        isRunning: false,
        startTime: null,
        savedTime: null,
      }),
    );
  };

  const totalSeconds = Math.floor((elapsedTime ?? 0) / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor(totalSeconds / 3600);

  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedHours = String(hours).padStart(2, "0");

  return (
    <section
      id="focus"
      className="flex-1 p-8 border border-zinc-800 bg-zinc-900 rounded-2xl"
    >
      <header>
        <h2 className="text-2xl font-semibold">Focus Session</h2>
        <p className="text-zinc-400 text-sm">
          Every minute counts. No zero days.
        </p>
      </header>
      <div className="mt-5 ">
        <div className="flex gap-1  justify-center  text-5xl font-mono ">
          {formattedHours}
          <span className="text-zinc-500">:</span>
          {formattedMinutes}
          <span className="text-zinc-500">:</span>
          {formattedSeconds}
        </div>
        <div className="text-center text-zinc-400 text-sm">
          {isRunning ? "Focus in progress" : "Ready when you are"}
        </div>
        <div className="mt-5 flex justify-center gap-3 ">
          <button
            onClick={startHandler}
            disabled={isRunning}
            className="disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 bg-zinc-300 px-4 py-1 rounded text-zinc-950 cursor-pointer hover:opacity-80 hover:scale-[1.01] transition duration-300 ease-in "
          >
            <Play fill="black" size={16} />
            Start
          </button>
          <button
            onClick={pauseHandler}
            disabled={!isRunning}
            className=" disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 bg-zinc-300 px-4 py-1 rounded text-zinc-950 cursor-pointer hover:opacity-80 hover:scale-[1.01] transition duration-300 ease-in"
          >
            <Pause fill="black" size={16} />
            Pause
          </button>
          <button
            onClick={resetHandler}
            className="flex border border-zinc-700 gap-2 items-center  px-2 py-1 rounded text-zinc-50 cursor-pointer hover:ring hover:opacity-80 hover:scale-[1.01] transition duration-300 ease-in"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
        <div className="mt-8 space-y-2">
          <div className="flex gap-2 justify-center">
            <p>Session Count : </p>
            <p> 4</p>
          </div>
        </div>
      </div>
    </section>
  );
}

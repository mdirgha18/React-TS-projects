// PomodoroTimer.tsx
import React, { useState, useEffect } from "react";

const PomodoroTimer: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const padStartFallback = (
    str: string,
    length: number,
    padChar: string
  ): string => {
    return str.length >= length
      ? str
      : new Array(length - str.length + 1).join(padChar) + str;
  };

  useEffect(() => {
    let interval: number;

    if (isActive) {
      interval = window.setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          clearInterval(interval);
          setIsActive(false); // Timer is finished
        } else if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else if (!isActive && (minutes !== 25 || seconds !== 0)) {
      setMinutes(25);
      setSeconds(0);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsActive(false);
  };
  return (
    <div className="timer-container">
      <h2>Pomodoro Timer</h2>
      <h1>
        {padStartFallback(String(minutes), 2, "0")}:
        {padStartFallback(String(seconds), 2, "0")}
      </h1>
      <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;

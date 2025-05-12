import React, { useState, useEffect } from "react";

const PomodoroTimer: React.FC = () => {
  // State for minutes and seconds
  const [minutes, setMinutes] = useState(25); // Start with 25 minutes
  const [seconds, setSeconds] = useState(0);  // Start with 0 seconds
  const [isActive, setIsActive] = useState(false); // State to toggle timer (start/pause)

  // Function to ensure minutes and seconds have two digits
  const padStartFallback = (
    str: string,
    length: number,
    padChar: string
  ): string => {
    return str.length >= length
      ? str
      : new Array(length - str.length + 1).join(padChar) + str;
  };

  // useEffect to manage the timer interval when the timer is active
  useEffect(() => {
    let interval: number;

    // When the timer is active, update the time every second
    if (isActive) {
      interval = window.setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          // If the time is up (0 minutes and 0 seconds), stop the timer
          clearInterval(interval);
          setIsActive(false); // Timer is finished, stop it
        } else if (seconds === 0) {
          // If seconds reach 0, decrease the minutes and reset seconds to 59
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          // If seconds are still greater than 0, just decrease the seconds
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000); // Run the interval every 1000ms (1 second)
    } else if (!isActive && (minutes !== 25 || seconds !== 0)) {
      // If timer is paused or reset, set it back to the default 25 minutes and 0 seconds
      setMinutes(25);
      setSeconds(0);
    }

    // Cleanup the interval on component unmount or when timer is paused
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]); // Re-run when the isActive, minutes, or seconds state changes

  // Toggle the timer between start and pause
  const toggleTimer = () => {
    setIsActive(!isActive); // Change the state to either start or pause
  };

  // Reset the timer to the default 25 minutes and 0 seconds
  const resetTimer = () => {
    setMinutes(25); // Reset minutes
    setSeconds(0);  // Reset seconds
    setIsActive(false); // Pause the timer
  };

  return (
    <div className="timer-container">
      <h2>Pomodoro Timer</h2>
      {/* Display the time in MM:SS format */}
      <h1>
        {padStartFallback(String(minutes), 2, "0")}:
        {padStartFallback(String(seconds), 2, "0")}
      </h1>
      {/* Button to start or pause the timer */}
      <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
      {/* Button to reset the timer */}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;

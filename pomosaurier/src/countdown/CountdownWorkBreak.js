import { useState } from "react";
import Countdown from "./Countdown";

export default function CountdownWorkBreak({ timers, run, reset, notify, numTimer }) {

  return (
    <Countdown
      timeInSec={
        numTimer === 0
          ? timers.work * 60
          : numTimer === 1
          ? timers.break * 60
          : numTimer === 2
          ? timers.work * 60
          : numTimer === 3
          ? timers.break * 60
          : numTimer === 4
          ? timers.work * 60
          : numTimer === 5
          ? timers.break * 60
          : numTimer === 6
          ? timers.work * 60
          : timers.longBreak * 60
      }
      run={run}
      reset={reset}
      notify={notify}
    />
  );
}

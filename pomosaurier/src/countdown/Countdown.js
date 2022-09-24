import { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";

export default function Countdown({ run, timeInSec, notify, reset }) {
  const ONESECOND = 1000;
  const [secondsLeft, setSecondsLeft] = useState(timeInSec);

  useEffect(() => {
    setSecondsLeft(timeInSec);
  }, [timeInSec, reset]);

  useInterval(() => {
    if (run) {
      setSecondsLeft(secondsLeft - 1);
    }
    if (secondsLeft === 1) {
      notify();
    }
  }, ONESECOND);

  return (
    <>
      <div>
        {Math.floor(secondsLeft / 3600).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {Math.floor((secondsLeft % 3600) / 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {Math.floor((secondsLeft % 3600) % 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";

export default function Countdown({
  run,
  timeInSec,
  notify,
  reset,
  numTimer,
  notificationPermission,
}) {
  const img = process.env.PUBLIC_URL + "/img/DinoGreenOnBeige.png";

  const ONESECOND = 1000;
  const [secondsLeft, setSecondsLeft] = useState(timeInSec);

  useEffect(() => {
    setSecondsLeft(timeInSec);
  }, [timeInSec, reset]);

  function showNotification(bodyText) {
    const notification = new Notification("POMOSAUR!", {
      body: bodyText,
      icon: img,
    });
  }

  useInterval(() => {
    if (run) {
      setSecondsLeft(secondsLeft - 1);
    }
    if (secondsLeft === 1) {
      if (notificationPermission) {
        if (
          numTimer === 1 ||
          numTimer === 3 ||
          numTimer === 5 ||
          numTimer === 7
        ) {
          showNotification(
            "Time to get productive! The Working Phase has started."
          );
        } else if (numTimer === 0 || numTimer === 2 || numTimer === 4) {
          showNotification("Small Break Has started!");
        } else {
          showNotification("Time to relax! Your long break has started!");
        }
      }
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

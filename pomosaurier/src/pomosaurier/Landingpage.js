import { useState } from "react";

import CountdownTotal from "../countdown/CountdownTotal";
import CountdownWorkBreak from "../countdown/CountdownWorkBreak";
import useDebounce from "../hooks/useDebounce";
import ModalTimerSettings from "./ModalTimerSettings";
import "./LandingpageCSS.css";
import ButtonRow from "./ButtonRow";

export default function Landingpage() {
  const [numTimer, setNumTimer] = useState(0);
  const [notifiedTotal, setNotifiedTotal] = useState(false);
  const [notifiedWork, setNotifiedWork] = useState(false);
  const [reset, setReset] = useState(false);
  const [run, setRun] = useState(false);
  const [show, setShow] = useState(false);
  const [timers, setTimers] = useState({
    total: 180,
    work: 20,
    break: 5,
    longBreak: 10,
  });

  const [newWork, setNewWork] = useState(0);
  const [newBreak, setNewBreak] = useState(0);
  const [newLongBreak, setNewLongBreak] = useState(0);
  const [newTotal, setNewTotal] = useState(0);

  const resetNewTimers = () => {
    setNewBreak(0);
    setNewLongBreak(0);
    setNewTotal(0);
    setNewWork(0);
  };

  const handleChangeWork = (e) => {
    setNewWork(e.target.value);
  };

  const handleChangeBreak = (e) => {
    setNewBreak(e.target.value);
  };

  const handleChangeLongBreak = (e) => {
    setNewLongBreak(e.target.value);
  };

  const handleChangeTotal = (e) => {
    setNewTotal(e.target.value);
  };

  const handleSumbit = () => {
    let newTimers = {
      total: newTotal !== 0 ? newTotal : timers.total,
      work: newWork !== 0 ? newWork : timers.work,
      break: newBreak !== 0 ? newBreak : timers.break,
      longBreak: newLongBreak !== 0 ? newLongBreak : timers.longBreak,
    };

    setTimers(newTimers);

    setShow(false);
    resetNewTimers();
  };

  const resetCountdown = () => {
    if (reset) {
      setReset(false);
    } else {
      setReset(true);
    }
    setRun(false);
    setNotifiedTotal(false);
    setNotifiedWork(false);
    setNumTimer(0);
  };

  const notifyTotal = () => {
    setNotifiedTotal(true);
    setRun(false);
    resetCountdown();
    console.log("totalCounter 0");
  };

  const notifyWork = () => {
    setNotifiedWork(true);
    setNumTimer((numTimer + 1) % 8);
    console.log((numTimer + 1) % 8);
  };

  return (
    <>
      <CountdownTotal
        totalTimeMin={timers.total}
        run={run}
        reset={reset}
        notify={() => notifyTotal()}
      />
      <CountdownWorkBreak
        timers={timers}
        run={run}
        reset={reset}
        notify={() => notifyWork()}
        numTimer={numTimer}
      />

      <ModalTimerSettings
        show={show}
        onHide={() => setShow(false)}
        handleChangeBreak={(e) => handleChangeBreak(e)}
        handleChangeLongBreak={(e) => handleChangeLongBreak(e)}
        handleChangeWork={(e) => handleChangeWork(e)}
        handleChangeTotal={(e) => handleChangeTotal(e)}
        handleSubmit={() => handleSumbit()}
        workTime={timers.work}
        breakTime={timers.break}
        longBreakTime={timers.longBreak}
        totalTime={timers.total}

      />
      <ButtonRow
        resetCountdown={() => resetCountdown()}
        run={run}
        setRun={(v) => setRun(v)}
        setShow={(b) => setShow(b)}
        notifyWork={() => notifyWork()}
      />
    </>
  );
}
import { useEffect, useState } from "react";

import CountdownTotal from "../countdown/CountdownTotal";
import CountdownWorkBreak from "../countdown/CountdownWorkBreak";
import ModalTimerSettings from "./ModalTimerSettings";
import "./LandingpageCSS.css";
import ButtonRow from "./ButtonRow";
import Dinosaur from "./Dinosaur";
import Header from "./Header";
import TimeShow from "./TimeShow";
import Footer from "./Footer";
import Alter from "./Alert";

export default function Landingpage() {
  const [notificationPermission, setNotificationPermission] = useState(false);
  const [numTimer, setNumTimer] = useState(0);
  const [notifiedTotal, setNotifiedTotal] = useState(false);
  const [notifiedWork, setNotifiedWork] = useState(false);
  const [reset, setReset] = useState(false);
  const [run, setRun] = useState(false);
  const [show, setShow] = useState(false);
  const img = process.env.PUBLIC_URL + "/img/DinoGreenOnBeige.png";
  const [timers, setTimers] = useState({
    total: 180,
    work: 20,
    break: 5,
    longBreak: 10,
  });

  const [colorsInputs, setColorsInput] = useState({
    total: "bg-white",
    work: "bg-white",
    break: "bg-white",
    longBreak: "bg-white",
  });

  const [newWork, setNewWork] = useState(0);
  const [newBreak, setNewBreak] = useState(0);
  const [newLongBreak, setNewLongBreak] = useState(0);
  const [newTotal, setNewTotal] = useState(0);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(() => {
        setNotificationPermission(true);
        showNotification(
          "I will notify you when your break or working-phase has started :)"
        );
      });
    } else {
      setNotificationPermission(true);
    }
  }, []);

  function showNotification(bodyText) {
    const notification = new Notification("POMOSAUR!", {
      body: bodyText,
      icon: img,
    });
  }

  const resetNewTimers = () => {
    setNewBreak(0);
    setNewLongBreak(0);
    setNewTotal(0);
    setNewWork(0);
  };

  const handleChangeWork = (e) => {
    setNewWork(parseFloat(e.target.value));
  };

  const handleChangeBreak = (e) => {
    setNewBreak(parseFloat(e.target.value));
  };

  const handleChangeLongBreak = (e) => {
    setNewLongBreak(parseFloat(e.target.value));
  };

  const handleChangeTotal = (e) => {
    setNewTotal(parseFloat(e.target.value));
  };

  const [invalidInput, setInvalidInput] = useState(false);

  const handleSumbit = () => {
    let newTimers = {
      total: newTotal > 0 && newTotal <= 1440 ? newTotal : timers.total,
      work: newWork > 0 && newTotal <= 1440 ? newWork : timers.work,
      break:
        newBreak > 0 && newTotal <= 1440
          ? newBreak === newWork || newBreak === timers.work
            ? newBreak - 0.05
            : newBreak
          : timers.break,
      longBreak:
        newLongBreak > 0 && newTotal <= 1440
          ? newLongBreak === newWork || newLongBreak === timers.work
            ? newLongBreak + 0.05
            : newLongBreak
          : timers.longBreak,
    };

    setTimers(newTimers);

    setShow(false);
    resetNewTimers();
    resetCountdown();
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
    showNotification("You have finished your learning session! Good Job!");
  };

  const notifyWork = () => {
    setNotifiedWork(true);
    setNumTimer((numTimer + 1) % 8);
  };

  const backgroundColors = ["#FBF2CF", "#937DC2", "#F7A76C"];

  const [currentStyle, setCurrentStyle] = useState(0);
  const styleDino = [
    {
      name: "beige",
      backgroundColor: "#F7EDDB",
      picture: "/img/DinoGreenOnBeige.png",
      shadow1: "#d2c9ba",
      shadow2: "#fffffc",
      shadowCombined: "7px 7px 14px #d2c9ba, -7px -7px 14px #fffffc",
    },
    {
      name: "orange",
      backgroundColor: "#E5CB9F",
      picture: "/img/DinoBlueOnOrange.png",
      shadow1: "#c3ad87",
      shadow2: "#ffe9b7",
      shadowCombined: "7px 7px 14px #c3ad87, -7px -7px 14px #ffe9b7",
    },
    {
      name: "blue",
      backgroundColor: "#C6DCE4",
      picture: "/img/DinoPinkOnBlue.png",
      shadow1: "#a8bbc2",
      shadow2: "#e4fdff",
      shadowCombined: "7px 7px 14px #a8bbc2, -7px -7px 14px #e4fdff",
    },
  ];
  const arrowRight = () => {
    if (currentStyle < styleDino.length - 1) {
      setCurrentStyle(currentStyle + 1);
    }
  };

  const arrowLeft = () => {
    if (currentStyle > 0) {
      setCurrentStyle(currentStyle - 1);
    }
  };
  return (
    <>
      <div
        className="outsideDiv"
        style={{ backgroundColor: styleDino[currentStyle].backgroundColor }}
      >
        <Header
          totalTimeMin={timers.total}
          run={run}
          reset={reset}
          notify={() => notifyTotal()}
          timers={timers}
          notifyTotal={() => notifyTotal()}
        />
        <Alter show={showAlert} setShow={(value) => setShowAlert(value)} />
        <Dinosaur
          styles={styleDino}
          currentStyle={currentStyle}
          arrowLeft={() => arrowLeft()}
          arrowRight={() => arrowRight()}
          styleLength={styleDino.length}
        />

        <TimeShow
          timers={timers}
          run={run}
          reset={reset}
          notify={() => notifyWork()}
          numTimer={numTimer}
          notifyWork={() => notifyWork()}
          CountdownWorkBreak={CountdownWorkBreak}
          notificationPermission={notificationPermission}
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
          arrowRight={() => arrowRight()}
          arrowLeft={() => arrowLeft()}
          styleDino={styleDino}
          currentStyle={currentStyle}
        />
        <Footer />
      </div>
    </>
  );
}

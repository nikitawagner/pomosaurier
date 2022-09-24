import Button from "react-bootstrap/esm/Button";
import "./LandingpageCSS.css";

import { FiSettings } from "react-icons/fi";
import {
  BsFillPlayFill,
  BsFillSkipEndFill,
  BsFillPauseFill,
} from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

export default function ButtonRow({
  setShow,
  run,
  setRun,
  resetCountdown,
  notifyWork,
  styleDino,
  currentStyle,
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="buttonRow">
        <div
          className={styleDino[currentStyle].name + " button"}
          onClick={() => setShow(true)}
        >
          <FiSettings size={25} />
        </div>
        <div
          className={styleDino[currentStyle].name + " button"}
          onClick={() => (run ? setRun(false) : setRun(true))}
        >
          {run ? <BsFillPauseFill size={25} /> : <BsFillPlayFill size={25} />}
        </div>
        <div
          className={styleDino[currentStyle].name + " button"}
          onClick={() => resetCountdown()}
        >
          <GrPowerReset size={25} />
        </div>
        <div
          className={styleDino[currentStyle].name + " button"}
          onClick={() => notifyWork()}
        >
          <BsFillSkipEndFill size={25} />
        </div>
      </div>
    </div>
  );
}

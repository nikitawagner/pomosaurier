import Button from "react-bootstrap/esm/Button";
import "./LandingpageCSS.css";

export default function ButtonRow({
  setShow,
  run,
  setRun,
  resetCountdown,
  notifyWork,
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={() => setShow(true)}
        variant="secondary"
        size="sm"
        className="m-2 settingsButton button"
      >
        settings
      </Button>
      <Button
        onClick={() => (run ? setRun(false) : setRun(true))}
        variant={run ? "warning" : "success"}
        size="sm"
        className="m-2 pauseButton button"
      >
        {run ? "pause" : "start"}
      </Button>
      <Button
        onClick={() => resetCountdown()}
        variant="danger"
        size="sm"
        className="m-2 resetButton button"
      >
        reset
      </Button>
      <Button
        onClick={() => notifyWork()}
        variant="secondary"
        size="sm"
        className="m-2 skipButton button"
      >
        skip
      </Button>
    </div>
  );
}

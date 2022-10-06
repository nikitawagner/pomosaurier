import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputForm from "./InputForm";

export default function ModalTimerSettings({
  show,
  onHide,
  handleChangeWork,
  handleChangeBreak,
  handleChangeLongBreak,
  handleChangeTotal,
  handleSubmit,
  workTime,
  breakTime,
  longBreakTime,
  totalTime,
}) {
  return (
    <Modal
      show={show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <InputForm
        color={"bg-white"}
        onChange={(e) => handleChangeTotal(e)}
        title={"Total Worktime in Minutes"}
        value={totalTime}
        min={1}
      />
      <InputForm
        color={"bg-white"}
        onChange={(e) => handleChangeWork(e)}
        title={"Worktime in Minutes"}
        value={workTime}
        min={1}
      />
      <InputForm
        color={"bg-white"}
        onChange={(e) => handleChangeBreak(e)}
        title={"Breaktime in Minutes"}
        value={breakTime}
        min={1}
      />

      <InputForm
        color={"bg-white"}
        onChange={(e) => handleChangeLongBreak(e)}
        title={"Longbreaktime in Minutes"}
        value={longBreakTime}
        min={1}
      />
      <Button
        size="lg"
        className="m-2"
        onClick={handleSubmit}
        variant="success"
      >
        change timers
      </Button>
      <Modal.Footer>
        <Button onClick={onHide} size="lg" variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

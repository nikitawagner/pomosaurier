import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

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
      <Form.Group className="p-2">
        <Form.Label>Total Worktime in Minutes</Form.Label>
        <Form.Control
          onChange={(e) => handleChangeTotal(e)}
          type="number"
          size="lg"
          placeholder={totalTime}
        />
      </Form.Group>
      <Form.Group className="p-2">
        <Form.Label>Worktime in Minutes</Form.Label>
        <Form.Control
          onChange={(e) => handleChangeWork(e)}
          type="number"
          size="lg"
          placeholder={workTime}
        />
      </Form.Group>
      <Form.Group className="p-2">
        <Form.Label>Breaktime in Minutes</Form.Label>
        <Form.Control
          onChange={(e) => handleChangeBreak(e)}
          type="number"
          size="lg"
          placeholder={breakTime}
        />
      </Form.Group>
      <Form.Group className="p-2">
        <Form.Label>Longbreaktime in Minutes</Form.Label>
        <Form.Control
          onChange={(e) => handleChangeLongBreak(e)}
          type="number"
          size="lg"
          placeholder={longBreakTime}
        />
      </Form.Group>
      <Button
        size="lg"
        className="m-2"
        onClick={handleSubmit}
        variant="success"
      >
        set new times
      </Button>
      <Modal.Footer>
        <Button onClick={onHide} size="lg" variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

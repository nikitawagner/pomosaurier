import Form from "react-bootstrap/Form";

export default function InputForm({ color, value, onChange, title }) {
  return (
    <Form.Group className="p-2" validated="true">
      <Form.Label>{title}</Form.Label>
      <Form.Control
        onChange={onChange}
        type="number"
        size="lg"
        defaultValue={value}
        className={color}
      />
    </Form.Group>
  );
}

import { AiFillLinkedin } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/nikita-wagner-b1026a225/"
        target="_blank"
      >
        <AiFillLinkedin style={{ margin: "5px" }} />
      </a>
      <a href="#" target="_blank">
        <TbWorld style={{ margin: "5px" }} />
      </a>
    </div>
  );
}

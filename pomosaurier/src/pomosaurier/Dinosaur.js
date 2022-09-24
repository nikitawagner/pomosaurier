import "./DinosaurCSS.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export default function Dinosaur({
  styles,
  currentStyle,
  arrowLeft,
  arrowRight,
  styleLength,
}) {
  return (
    <div className="outsideContainerDinosaur">
      {currentStyle !== 0 ? (
        <AiOutlineArrowLeft className="arrow" size={30} onClick={arrowLeft} />
      ) : (
        <AiOutlineArrowLeft
          className="arrow"
          size={30}
          onClick={arrowLeft}
          color="#F7EDDB"
        />
      )}

      <img src={styles[currentStyle].picture} alt="dinosaur picture" />

      {currentStyle < styleLength - 1 ? (
        <AiOutlineArrowRight className="arrow" size={30} onClick={arrowRight} />
      ) : (
        <AiOutlineArrowRight
          className="arrow"
          size={30}
          onClick={arrowRight}
          color="#C6DCE4"
        />
      )}
    </div>
  );
}

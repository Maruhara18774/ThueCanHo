import React, { useState, useRef } from "react";
import "../../style/paner-form/Accordion.css";
import "../../RegistrationDetail.css";
import Chervon from "./Chervon";
function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion-icon");

  const content = useRef();
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
    );
  }
  return (
    <div className="accordion-section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion-title">{props.title}</p>
        <Chervon
          className={`${setRotate}`}
          width={10}
          fill={"#777"}
          value={"Expand"}
        />
      </button>

      <div
        ref={content}
        className="accordion-content"
        style={{ maxHeight: `${setHeight}` }}
      >
        <div className="accordion-text">{props.content}</div>
      </div>
    </div>
  );
}

export default Accordion;

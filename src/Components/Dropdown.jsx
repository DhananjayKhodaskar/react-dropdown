import React, { useState } from "react";
const options = ["Yes", "Probably Not", "Not Sure"];
function Dropdown() {
  const [mouseOver, setMouseOver] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  function handleMouseOver() {
    console.log(mouseOver);
    setMouseOver("true");
  }
  function handleSelectedOption(event) {
    const id = event.target.id;
    const option = options[id];
    console.log(option);
    setSelectedOption(option);
    setMouseOver(null);
  }

  return (
    <div>
      <h1>Should You Use Dropdown?</h1>
      <div>
        {selectedOption ? <h4>{selectedOption}</h4> : null}
        <button className="dropbtn" onMouseOver={handleMouseOver}>
          Choose Option
        </button>
      </div>
      <div class="dropdown">
        {mouseOver ? (
          <div
            className="dropdown-content"
            style={{ display: `${mouseOver ? "block" : "none"}` }}
          >
            {options.map((option, index) => {
              return (
                <h5
                  key={index}
                  id={index}
                  className="border"
                  onClick={handleSelectedOption}
                >
                  {option}
                </h5>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;

import React from "react";

const BubblingExample: React.FC = () => {
  const handleDivClick = () => {
    alert("DIV bosildi");
  };

  const handleButtonClick = () => {
    alert("BUTTON bosildi");
  };

  return (
    <div onClick={handleDivClick} style={{ padding: "20px", border: "1px solid black" }}>
      <button onClick={handleButtonClick} style={{ padding: "10px" }}>
        Meni bos
      </button>
    </div>
  );
};

export default BubblingExample;
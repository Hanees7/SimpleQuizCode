import React from "react";

const Quiz = ({ qusss, optionnn, handleClickkk, currentAnswerrr }) => {
  return (
    <>
      <div className="text-center">
        <h2 className="m-3">{qusss}</h2>
        <ul className="cursor-pointer ">
          {optionnn.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleClickkk(item)}
              className={
                currentAnswerrr === item ? "bg-green-600" : ""
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Quiz;

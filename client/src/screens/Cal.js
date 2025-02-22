import React, { useState } from "react";

function Cal() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const changeHandler = (e) => {
    if (e.target.name == "num1") {
      setNumber1(e.target.value);
    } else {
      setNumber2(e.target.value);
    }
  };
  function sumClick() {
    setResult(Number(number1) + Number(number2));
  }
  function mulClick() {
    setResult(Number(number1) * Number(number2));
  }
  function divClick() {
    setResult(Number(number1) / Number(number2));
  }
  function clearClick() {
    setNumber1(0);
    setNumber2(0);
    setResult(0);
  }
  return (
    <>
      <b>Enter First Number : </b>{" "}
      <input
        type="number"
        name="num1"
        onChange={changeHandler}
        value={number1}
      />
      <br />
      <br />
      <b>Enter Second Number </b>{" "}
      <input
        type="number"
        name="num2"
        onChange={changeHandler}
        value={number2}
      />
      <br />
      <br />
      <b>Result : </b>
      {result}
      <br />
      <br />
      <button className="btn btn-info m-1" onClick={sumClick}>
        Sum
      </button>
      <button className="btn btn-primary" onClick={mulClick}>
        Mul
      </button>
      <button className="btn btn-success m-1" onClick={divClick}>
        Div
      </button>
      <button className="btn btn-danger" onClick={clearClick}>
        Clear
      </button>
    </>
  );
}

export default Cal;

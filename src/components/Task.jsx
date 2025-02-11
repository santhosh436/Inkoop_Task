import { useState } from "react";

const TaskComponent = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const resetOtherInputs = (currentInput) => {
    if (currentInput !== 1) {
      setInput1("");
      setMessage1("");
    }
    if (currentInput !== 2) {
      setInput2("");
      setMessage2("");
    }
    if (currentInput !== 3) {
      setInput3("");
      setMessage3("");
    }
  };

  const handleInput1 = (e) => {
    const value = e.target.value;
    setInput1(value);

    if (value === "") {
      setMessage1("");
      return;
    }

    const num = parseFloat(value);
    if (num < 0) {
      setMessage1("Please enter a positive number");
    } else {
      setMessage1("You entered a positive number");
    }
  };

  const handleInput2 = (e) => {
    const value = e.target.value;
    setInput2(value);

    if (value === "") {
      setMessage2("");
      return;
    }

    const num = parseInt(value, 10);
    if (num % 2 !== 0 || isNaN(num)) {
      setMessage2("Please enter an even number");
    } else {
      const nextEvens = [num + 2, num + 4, num + 6].join(", ");
      setMessage2(`Next three even numbers: ${nextEvens}`);
    }
  };

  const handleInput3 = (e) => {
    const value = e.target.value;
    setInput3(value);

    if (value === "") {
      setMessage3("");
      return;
    }

    const num = parseInt(value, 10);
    if (num % 2 === 0 || isNaN(num)) {
      setMessage3("Please enter an odd number");
    } else {
      const nextOdds = [num + 2, num + 4, num + 6].join(", ");
      setMessage3(`Next three odd numbers: ${nextOdds}`);
    }
  };

  const inputStyles =
    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2";

  const focusStyles = {
    1: "focus:ring-orange-500",
    2: "focus:ring-black",
    3: "focus:ring-blue-500",
  };

  const inputs = [
    {
      label: "Input 1",
      value: input1,
      onChange: handleInput1,
      onFocus: () => resetOtherInputs(1),
      message: message1,
      focusClass: focusStyles[1],
    },
    {
      label: "Input 2",
      value: input2,
      onChange: handleInput2,
      onFocus: () => resetOtherInputs(2),
      message: message2,
      focusClass: focusStyles[2],
    },
    {
      label: "Input 3",
      value: input3,
      onChange: handleInput3,
      onFocus: () => resetOtherInputs(3),
      message: message3,
      focusClass: focusStyles[3],
    },
  ];

  return (
    <div className="font-poppins max-w-md mx-auto p-10 my-16 shadow-md rounded-xl">
      <h1 className="text-center text-2xl mb-10 font-semibold">Task</h1>
      {inputs.map((input, index) => (
        <div key={index} className="mb-[60px]">
          <h2 className="text-lg font-medium text-green-800 mb-2 font-poppins">{input.label}</h2>
          <input
            type="number"
            className={`${inputStyles} ${input.focusClass}`}
            value={input.value}
            onChange={input.onChange}
            onFocus={input.onFocus}
          />
          {input.message && (
            <p
              className={`mt-1 text-sm font-poppins ${
                input.message.includes("Please") ? "text-red-500" : "text-green-500"
              }`}
            >
              {input.message}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskComponent;

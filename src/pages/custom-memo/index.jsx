import useCustomMemo from "../../hooks/use-custom-memo";
import React, { useMemo, useState } from "react";

function expensiveFunction(num) {
  console.log("expensive function");

  // eslint-disable-next-line no-empty
  for (let i = 0; i < 100000; i++) {}

  return num * 2;
}

function CustomMemo() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  // const expFuncResult = useMemo(() => expensiveFunction(count), [count]);

  useCustomMemo(() => expensiveFunction(count), [count]);

  return (
    <div>
      <p className="text-center text-6xl font-bold mt-12">Custom Memo</p>

      <div className="mt-28 flex flex-col justify-center items-center gap-8">
        <p className="text-center text-4xl font-semibold">Count: {count}</p>

        <button onClick={(prevState) => setCount((prevState) => prevState + 1)}>
          increment
        </button>

        <input
          type="text"
          className="border"
          placeholder="enter  name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default CustomMemo;

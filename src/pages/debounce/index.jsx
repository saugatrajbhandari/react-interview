import { useState } from "react";
import useDebounce from "../../hooks/use-debounce";

function Debounce() {
  const [text, setText] = useState("");

  const debounceValue = useDebounce(text, 1000);

  console.log(debounceValue, "value");

  return (
    <div>
      <p className="text-center text-6xl font-bold mt-12">Debounce</p>
      <div className="flex justify-center mt-12">
        <input
          type="text"
          className="border"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Debounce;

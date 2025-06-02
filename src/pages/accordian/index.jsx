import React, { useState } from "react";
import { accordionData } from "./data";
import { ChevronDown } from "lucide-react";
import classNames from "classnames";

function Accordian() {
  const [open, setOpen] = useState(-1);

  const handleToggle = (index) => {
    if (index === open) {
      setOpen(-1);
      return;
    }
    setOpen(index);
  };

  return (
    <div className="flex justify-center items-center  h-[calc(100vh-50px)]">
      <div className="bg-neutral-100 rounded-2xl shadow-2xl p-6 space-y-4 w-[80vw]">
        {accordionData.map((item, index) => (
          <div
            key={item.title}
            className="flex items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-lg font-semibold text-neutral-950">
                {item.title}
              </h3>
              {index === open && <p>{item.description}</p>}
            </div>
            <ChevronDown
              onClick={() => handleToggle(index)}
              className={classNames("cursor-pointer", {
                "rotate-180": index === open,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordian;

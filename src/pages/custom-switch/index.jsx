import { useState } from "react";
import Switch from "./components/switch";

function CustomSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="m-10">
      <Switch isOn={isOn} handleToggle={handleToggle} label="switch " />
    </div>
  );
}

export default CustomSwitch;

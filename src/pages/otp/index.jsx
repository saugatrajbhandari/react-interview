import React, { useRef, useState } from "react";
import style from "./otp.module.css";

function Otp() {
  const length = 4;

  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    const tempOtp = [...otp];

    // ensure the field consist only one value
    tempOtp[index] = value.slice(0, 1);
    setOtp(tempOtp);

    // move to another otp field
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // for backspace
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste (to allow pasting full OTP)
  const handlePaste = (event) => {
    const data = event.clipboardData.getData("text").slice(0, length); // Get pasted data

    console.log(event);
    if (!/^\d*$/.test(data)) return; // Ensure only digits are pasted

    const updatedOtp = [...otp];
    for (let i = 0; i < data.length; i++) {
      updatedOtp[i] = data[i];
    }
    setOtp(updatedOtp);

    // Focus on the last filled input
    const nextIndex = data.length >= length ? length - 1 : data.length;
    inputRefs.current[nextIndex]?.focus();
  };

  console.log(otp);
  console.log(inputRefs);

  return (
    <div className={style.container}>
      <div className={style.otpContainer}>
        {Array.from({ length }).map((_, index) => (
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            key={index}
            type="number"
            onChange={(e) => handleOtpChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            value={otp[index]}
            maxLength={1}
            className={style.input}
          />
        ))}
      </div>

      <div className={style.result}>
        <p>Entered OTP: {otp.join("")}</p>
      </div>
    </div>
  );
}

export default Otp;

import { useState } from "react";
import "./toast-component.css";
import { Check, X, Info } from "lucide-react";

const icons = {
  success: <Check />,
  warning: <Info />,
  error: <X />,
};

const className = {
  success: "success",
  error: "error",
  warning: "warning",
};

function ToastComponent(props) {
  const { type, setToast, position = "top-right", message = "toast" } = props;

  return (
    <div className={`toaster ${className[type]} ${position}`}>
      <p>{message}</p>
      <div className="cursor-pointer" onClick={() => setToast(null)}>
        {" "}
        <X />
      </div>
    </div>
  );
}

export default ToastComponent;

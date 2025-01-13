import React from "react";
import useToast from "./hooks/useToast";

function Toast() {
  const { Component, triggerToast } = useToast();

  return (
    <div>
      <button
        onClick={() =>
          triggerToast({
            type: "success",
            message: "wuppy",
            position: "top-left",
          })
        }
      >
        success
      </button>
      <button
        onClick={() =>
          triggerToast({ type: "warning", position: "top-center" })
        }
      >
        warning
      </button>
      <button onClick={() => triggerToast({ type: "error" })}>error</button>

      {Component}
    </div>
  );
}

export default Toast;

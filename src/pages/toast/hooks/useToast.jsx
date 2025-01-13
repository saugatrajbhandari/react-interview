import React, { useCallback, useRef, useState } from "react";
import ToastComponent from "../component/toast-component";

function useToast() {
  const [toast, setToast] = useState();

  let timer = useRef(null);

  const triggerToast = (args) => {
    clearTimeout(timer.current);
    setToast(args);
    timer.current = setTimeout(() => {
      setToast();
    }, args?.duration ?? 3000);
  };

  const Component = toast ? (
    <ToastComponent {...toast} setToast={setToast} />
  ) : (
    <></>
  );

  return { Component, triggerToast };
}

export default useToast;

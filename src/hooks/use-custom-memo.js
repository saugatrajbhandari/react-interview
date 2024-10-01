import { useRef } from "react";

function isArrayEqual(prevDependancy, currDependancy) {
  if (
    !prevDependancy ||
    !currDependancy ||
    prevDependancy.length !== currDependancy.length
  ) {
    return false;
  }

  for (let i = 0; i < prevDependancy.length; i++) {
    if (prevDependancy[i] !== currDependancy[i]) {
      return false;
    }
  }

  return true;
}

function useCustomMemo(callback, dependancyArray) {
  const memoRef = useRef({
    memoizedValue: undefined,
    lastDependancyArray: undefined,
  });

  if (
    !memoRef.current.memoizedValue ||
    !isArrayEqual(memoRef.current.lastDependancyArray, dependancyArray)
  ) {
    const newMemoizedValue = callback();
    memoRef.current.memoizedValue = newMemoizedValue;
    memoRef.current.lastDependancyArray = dependancyArray;
  }

  return memoRef.current.memoizedValue;
}

export default useCustomMemo;

import { useState, useEffect } from "react";

const DEBOUNCE_TIME = 200;

function debounce(callback, waitTime) {
  let timeNow = Date.now();
  return () => {
    if (timeNow - Date.now() + waitTime < 0) {
      callback();
      timeNow = Date.now();
    }
  };
}

const getPageYOffsetPosition = () => {
  return {
    position: window.pageYOffset,
  };
};

function useWindowYPositionChange({
  callback: onScroll,
  debounceTime = DEBOUNCE_TIME,
}) {
  const [scrollPosition, setScrollPosition] = useState({ position: 0 });

  const handleSetPosition = () => setScrollPosition(getPageYOffsetPosition());

  useEffect(() => {
    handleSetPosition();
    const handler = debounce(handleSetPosition, debounceTime);

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  useEffect(() => {
    if (typeof onScroll == "function") {
      onScroll(scrollPosition);
    }
  }, [scrollPosition]);

  return scrollPosition;
}

export default useWindowYPositionChange;

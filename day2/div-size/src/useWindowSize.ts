import { useEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const listenCallback = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", listenCallback);
    return () => {
      window.removeEventListener("resize", listenCallback);
    };
  }, []);
  return size;
}

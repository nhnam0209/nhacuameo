"use client";
import React, { createContext, useEffect, useState } from "react";
export const WidthContext = createContext(0);

const ContextIndex = (props: any) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <WidthContext.Provider value={width}>
      {props.children}
    </WidthContext.Provider>
  );
};

export default ContextIndex;

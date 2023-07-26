"use client";
import { WidthContext } from "@/contexts/width";
import React, { useContext } from "react";

function NavigationbarDesktop() {
  const width = useContext(WidthContext);

  return <div>NavigationbarDesktop</div>;
}

export default NavigationbarDesktop;

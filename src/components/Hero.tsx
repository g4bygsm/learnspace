import { Type } from "lucide-react";
import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div>
      <Typed strings={["HTML", "CSS"]} typeSpeed={120} backSpeed={140} loop />
    </div>
  );
};

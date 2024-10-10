import React from "react";
import { Rainify } from "rainify";
const Raindrops: React.FC = () => {
  console.log("rain started...");
  return (
    <Rainify
      isRaining
      intensity={1000}
      color="skyblue"
      zIndex={0}
      speed={10}
      wind={10}
      thickness={1}
      splashColor="skyblue"
      splashDuration={6}
    />
  );
};

export default Raindrops;

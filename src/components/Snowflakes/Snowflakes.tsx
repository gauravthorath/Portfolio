import React from "react";
import Snowfall from "react-snowfall";

const Snowflakes: React.FC = () => {
  return (
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
      }}
      snowflakeCount={500}
      // color = defaultConfig.color,
      // changeFrequency = defaultConfig.changeFrequency,
      radius={[4, 6]}
      // speed = defaultConfig.speed,
      // wind = defaultConfig.wind,
      // rotationSpeed = defaultConfig.rotationSpeed,
      // images,
    />
  );
};

export default Snowflakes;

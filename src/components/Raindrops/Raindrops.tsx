// Raindrops.tsx
import React from "react";
import "./Raindrops.css";
const Raindrops: React.FC = () => {
  return (
    <div className="raindrops" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="raindrop">
          <div className="inner">💧</div> {/* Raindrop emoji */}
        </div>
      ))}
    </div>
  );
};

export default Raindrops;

import { useEffect, useState } from "react";
import "./progress.css";

export const ProgressBar = ({ progress }) => {
  const [pro, setPro] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPro(progress);
    }, 100);
  }, [progress]);
  return (
    <div className="outter">
      <div
        className="inner"
        style={{
          transform: `translateX(${pro - 100}%)`,
          //   width: `${progress}`,
          color: pro < 5 ? "black" : "white",
        }}
        // accessability
        aria-role="progressbar"
        aria-valuenow={pro}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {pro}%
      </div>
    </div>
  );
};

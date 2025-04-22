import { useState, useEffect } from "react";
import "./styles.css";

// how to accessibality to app
// to add accessibality we add role tag in html
// when ever you animate we need use
// Transform and translate options

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 1000);
  }, [progress]);

  return (
    <div className="outter">
      <div
        className="inner"
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {progress}%
      </div>
    </div>
  );
};

const bars = [0, 5, 10, 30, 50, 70, 90];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {bars.map((bar) => {
        return (
          <div>
            <ProgressBar key={bar} progress={bar} />
          </div>
        );
      })}
    </div>
  );
}

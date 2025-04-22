import { ProgressBar } from "./component/progress";

export default function Epp() {
  const bars = [0, 5, 10, 20, 30, 40, 50];
  return (
    <div>
      {bars.map((bar) => {
        return (
          <div key={bar}>
            <ProgressBar progress={bar} />
          </div>
        );
      })}
    </div>
  );
}

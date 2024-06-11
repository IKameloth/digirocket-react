import { useEffect, useState } from "react";

const ProgressBar = ({ duration }: { duration: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 100; // Update every 100ms
    const increment = 100 / (duration / interval); // Increment per interval

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return oldProgress + increment;
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <div className="w-full bg-gray-300 h-4 rounded">
      <div
        className="bg-blue-500 h-4 rounded"
        style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
      ></div>
    </div>
  );
};

export default ProgressBar;

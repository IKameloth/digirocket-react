import { useToast } from "src/context/toast-context";
import ProgressBar from "./ProgressBar";

const iconTypes: { [key in "info" | "success" | "warning" | "error"]: string } =
  {
    info: "ℹ️",
    success: "✅",
    warning: "⚠️",
    error: "❌",
  };

interface ToastProps {
  id: string;
  type: "info" | "success" | "warning" | "error";
  message: string;
  duration?: number;
}

const Toast = ({
  id,
  type,
  message,
  duration = 3000,
}: ToastProps): JSX.Element => {
  const { removeToast } = useToast();

  return (
    <div
      className={`flex items-center p-4 mb-4 text-white rounded shadow-lg ${
        type === "info"
          ? "bg-blue-500"
          : type === "success"
          ? "bg-green-500"
          : type === "warning"
          ? "bg-yellow-500"
          : "bg-red-500"
      }`}
    >
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <ProgressBar duration={duration} />
      </div>
      <span className="text-2xl">{iconTypes[type]}</span>
      <div className="ml-3">{message}</div>
      <button
        className="ml-auto bg-transparent border-0 text-2xl leading-none outline-none focus:outline-none"
        onClick={() => removeToast(id)}
      >
        ×
      </button>
    </div>
  );
};

export default Toast;

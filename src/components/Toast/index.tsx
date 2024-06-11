import { useToast } from "src/context/toast-context";
import ProgressBar from "./ProgressBar";
import { CircleAlert, CircleCheckBig, CircleX, Info } from "lucide-react";

interface ToastProps {
  id: string;
  type: "info" | "success" | "warning" | "error";
  message: string;
  duration?: number;
}

const iconTypes = {
  info: <Info />,
  success: <CircleCheckBig />,
  warning: <CircleAlert />,
  error: <CircleX />,
};

const color: { [key in "info" | "success" | "warning" | "error"]: string } = {
  info: "blue",
  success: "green",
  warning: "yellow",
  error: "red",
};

const Toast = ({
  id,
  type,
  message,
  duration = 3000,
}: ToastProps): JSX.Element => {
  const { removeToast } = useToast();

  return (
    <>
      <ProgressBar duration={duration} />
      <div
        id="toast-default"
        className={`flex items-center min-w-[350px] max-w-xs p-4 mb-2 text-white bg-${color[type]}-500 rounded-b shadow`}
        role="alert"
      >
        <div
          className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${color[type]}-100 rounded-lg`}
        >
          {iconTypes[type]}
        </div>
        <div className="ms-3 text-sm font-normal">{message}</div>
        <button
          onClick={() => removeToast(id)}
          className={`ms-auto -mx-1.5 -my-1.5 text-white hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8`}
          data-dismiss-target="#toast-default"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Toast;

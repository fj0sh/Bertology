import { toast } from "react-toastify";

const succesToast = (message: string) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    progressClassName: "bg-orangeRed",
    className: "border border-orangeRed",
    theme: "dark",
  });
};

const errorToast = (message: string) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "border border-orangeRed",
    theme: "dark",
  });
};

export { succesToast, errorToast };

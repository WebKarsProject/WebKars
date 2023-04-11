import { toast } from "react-toastify";

export const Success = (text: string) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1000,
  });
};

export const Erro = (text: string) => {
  toast.error(text, {
    position: "top-right",
    autoClose: 1000,
  });
};

export const Info = (text: string) => {
  toast.info(text, {
    position: "top-right",
    autoClose: 1000,
  });
};

export const Warn = (text: string) => {
  toast.warn(text, {
    position: "top-right",
    autoClose: 1000,
  });
};

export const Default = (text: string) => {
  toast(text, {
    position: "top-right",
    autoClose: 1000,
  });
};

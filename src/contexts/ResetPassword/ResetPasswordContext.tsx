import { createContext, useContext } from "react";
import {
  IAxiosData,
  IEmail,
  IPassword,
  IProviderProps,
  IResetPasswordContext,
} from "../../interface";
import { Instance } from "../../services/axios";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ResetPasswordContext = createContext<IResetPasswordContext>(
  {} as IResetPasswordContext
);

const ResetPasswordProvider = ({ children }: IProviderProps) => {
  const { token } = useParams();
  const sendEmailResetPassword = async (body: IEmail) => {
    try {
      const { data } = await Instance.post<any>("/users/resetPassword", body);
      toast.success(`${data.message}❗❗`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        toast.error(`${data.message}❗❗`);
      }
    }
  };

  const sendPasswordReset = async (body: IPassword, token: string) => {
    try {
      const { data } = await Instance.patch<any>(
        `/users/resetPassword/${token}`,
        body
      );
      toast.success(`${data.message}❗❗`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        toast.error(`${data.message}❗❗`);
      }
    }
  };

  return (
    <ResetPasswordContext.Provider
      value={{
        sendEmailResetPassword,
        sendPasswordReset,
      }}
    >
      {children}
    </ResetPasswordContext.Provider>
  );
};
export default ResetPasswordProvider;

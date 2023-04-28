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

export const ResetPasswordContext = createContext<IResetPasswordContext>(
  {} as IResetPasswordContext
);

const ResetPasswordProvider = ({ children }: IProviderProps) => {
  const sendEmailResetPassword = async (body: IEmail) => {
    try {
      const { data } = await Instance.post<any>("/users/resetPassword", body);
      console.log(data.message);
      // cria um toast pra aparecer a mensagem
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        console.log(`${data.message}❗❗`);
      }
    }
  };

  const sendPasswordReset = async (body: IPassword) => {
    console.log(body);
    try {
      const { data } = await Instance.patch<any>(
        "/users/resetPassword/:token",
        body
      );
      console.log(data.message);
      // cria um toast pra aparecer a mensagem
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        console.log(`${data.message}❗❗`);
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

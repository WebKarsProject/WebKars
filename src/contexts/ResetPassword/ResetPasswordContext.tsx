import { createContext, useContext } from "react";
import {
  IAxiosData,
  IEmail,
  IProviderProps,
  IResetPasswordContext,
} from "../../interface";
import { Instance } from "../../services/axios";
import axios from "axios";
import { VehicleContext } from "../Vehicle/VehicleContexts";

export const ResetPasswordContext = createContext<IResetPasswordContext>(
  {} as IResetPasswordContext
);

const ResetPasswordProvider = ({ children }: IProviderProps) => {
  const { onClose } = useContext(VehicleContext);

  const sendEmail = async (data: any) => {
    onClose();
    await sendEmailResetPassword(data);
  };

  const sendEmailResetPassword = async (body: IEmail) => {
    console.log(body);
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

  return (
    <ResetPasswordContext.Provider
      value={{
        sendEmailResetPassword,
        sendEmail,
      }}
    >
      {children}
    </ResetPasswordContext.Provider>
  );
};
export default ResetPasswordProvider;

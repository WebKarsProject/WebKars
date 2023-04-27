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

  const sendEmailResetPassword = async (body: IEmail) => {
    console.log(body);
    onClose;
    try {
      const data = await Instance.post<any>("/users/resetPassword", body);
      console.log(data);
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
      }}
    >
      {children}
    </ResetPasswordContext.Provider>
  );
};
export default ResetPasswordProvider;

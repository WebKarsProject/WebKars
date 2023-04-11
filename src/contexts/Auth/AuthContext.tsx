import { createContext, useState } from "react";
import {
  IAuthContext,
  IAxiosData,
  IProviderProps,
  IReqLogin,
  IToken,
} from "../../interface";
import { useNavigate } from "react-router-dom";
import { instance } from "../../services/axios";
import { Erro, Success } from "../../services/toast";
import axios from "axios";

export const AuthContext = createContext({} as IAuthContext);

const UserProvider = ({ children }: IProviderProps) => {
  const token = localStorage.getItem(`@WebKars:token`);
  const id = localStorage.getItem(`@WebKars:id`);
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const login = async (body: IReqLogin) => {
    setLoading(true);
    try {
      const { data } = await instance.post<IToken>("/login", body);
      localStorage.setItem(`@WebKars:token`, data.token);
      localStorage.setItem(`@WebKars:id`, data.user_id);
      Success(`✅Usuário logado com sucesso!`);
      navigate(`/dashboard`, { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        Erro(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        id,
        loading,
        setLoading,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

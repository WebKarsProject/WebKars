import { createContext, useContext, useEffect, useState } from "react";
import {
  IAuthContext,
  IAxiosData,
  IProviderProps,
  IReqLogin,
  IToken,
  IUser,
  IUserReq,
} from "../../interface";
import { useNavigate, useParams } from "react-router-dom";
import { Instance } from "../../services/axios";
import axios from "axios";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IProviderProps) => {
  const token = localStorage.getItem(`@WebKars:token`);
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [userId, setUserId] = useState<string | undefined>();

  useEffect(() => {
    Instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    if (token) {
      getMyProfile();
    }
  }, []);

  const getMyProfile = async () => {
    Instance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      `@WebKars:token`
    )}`;
    setLoading(true);
    try {
      const { data } = await Instance.get<IUser>("/users");
      setUser(data);
      setUserId(data!.id);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        console.log(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (body: IReqLogin) => {
    setLoading(true);
    try {
      const { data } = await Instance.post<IToken>("/session", body);
      localStorage.setItem(`@WebKars:token`, data.token);
      console.log(data);
      await getMyProfile();
      console.log(`✅Usuário logado com sucesso!`);
      navigate(`/`, { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        console.log(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (body: IUserReq) => {
    setLoading(true);
    try {
      await Instance.post("/users", body);
      navigate("/session");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        console.log(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (body: IUserUpdateRequest) => {
    Instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      const { data } = await Instance.patch(`/users/${userId}`, body);
      await getMyProfile();
      setUser(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        console.log(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async () => {
    Instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      const { data } = await Instance.delete(`/users/${userId}`);
      await getMyProfile();
      setUser(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        console.log(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        registerUser,
        token,
        setLoading,
        loading,
        getMyProfile,
        updateUser,
        user,
        setUser,
        navigate,
        deleteUser,

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

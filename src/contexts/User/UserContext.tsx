import { createContext, useContext, useEffect, useState } from "react";
import {
  IAxiosData,
  IProviderProps,
  IUser,
  IUserContext,
} from "../../interface";
import { AuthContext } from "../Auth/AuthContext";
import axios from "axios";
import { Erro } from "../../services/toast";
import { Instance } from "../../services/axios";

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IProviderProps) => {
  const { setLoading, token } = useContext(AuthContext);
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    Instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    if (token) {
      getMyProfile();
    }
  }, []);

  const getMyProfile = async () => {
    Instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      const { data } = await Instance.get<IUser>("/users");
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

  const updateUser = async (body: IUser) => {
    Instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      const { data } = await Instance.patch("/users");
      setUser(data);
      await getMyProfile();
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
    <UserContext.Provider value={{ getMyProfile, updateUser, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

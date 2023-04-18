import { createContext, useContext, useState } from "react";
import { IAxiosData, IProviderProps, IUserContext } from "../../interface";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { Erro } from "../../services/toast";
import { Instance } from "../../services/axios";

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IProviderProps) => {
  const { setLoading } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const myProfile = async () => {
    setLoading(true);
    try {
      const { data } = await Instance.get("/users");

      setUser(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        Erro(`${data.message}❗❗`);
      }
    }
  };

  return <UserContext.Provider value={""}>{children}</UserContext.Provider>;
};

export default UserProvider;

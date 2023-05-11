import { createContext, useEffect, useState } from "react";
import {
  IAddressUpdate,
  IAuthContext,
  IAxiosData,
  IProviderProps,
  IReqLogin,
  IToken,
  IUserReq,
  IUserRes,
  IUserUpdateRequest,
} from "../../interface";
import { useNavigate } from "react-router-dom";
import { Instance } from "../../services/axios";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDisclosure } from "@chakra-ui/react";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IProviderProps) => {
  const token = localStorage.getItem(`@WebKars:token`);
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUserRes>({} as IUserRes);
  const [userId, setUserId] = useState<string | undefined>();
  const [date, setDate] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      const { data } = await Instance.get<IUserRes>("/users");
      setUser(data);
      setDate(new Date(data.birthday).toISOString().slice(0, 10));
      setUserId(data!.id);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        toast.error(`${data.message}❗❗`);
        localStorage.removeItem("@WebKars:token");
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
      await getMyProfile();
      toast.success(`✅ Usuário logado com sucesso!`);
      navigate(`/`, { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        toast.error(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (body: IUserReq) => {
    setLoading(true);
    try {
      await Instance.post("/users", body);
      toast.success(`✅ Usuário cadastrado com sucesso!`);
      navigate("/session");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        toast.error(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (body: IUserUpdateRequest) => {
    Instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      const { data } = await Instance.patch(`/users/`, body);
      await getMyProfile();
      setUser(data);
      toast.success(`Usuário atualizado com sucesso❗❗`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        toast.error(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async () => {
    Instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      await Instance.delete(`/users`);
      toast.success(`Usuário deletado com sucesso❗❗`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        toast.error(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  const updateAddress = async (body: IAddressUpdate) => {
    Instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      await Instance.patch(`/users/address/`, body);
      await getMyProfile();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        toast.error(`${data.message}❗❗`);
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
        updateAddress,
        user,
        setUser,
        navigate,
        deleteUser,
        userId,
        date,
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

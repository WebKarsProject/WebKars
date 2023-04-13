import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IAuthContext {
  token: string | null;
  id: string | null;
  login: (body: IReqLogin) => Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface IReqLogin {
  email: string;
  password: string;
}

export interface IToken {
  token: string;
  user_id: string;
}

export interface IAxiosData {
  message: string;
}

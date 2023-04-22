import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IAuthContext {
  token: string | null;
  registerUser: (body: IUserReq) => Promise<void>;
  login: (body: IReqLogin) => Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  updateUser: (body: any) => Promise<void>;
  getMyProfile: () => Promise<void>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

export interface IUserReq {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  birthday: Date;
  description?: string;
  buyer?: boolean;
  address: IAddress;
}

export interface IUser extends IAddress {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  birthday: Date;
  description?: string;
  buyer?: boolean;
  confirmPassword?: string;
}

export interface IAddress {
  zipcode: string;
  city: string;
  street: string;
  state: string;
  number: string;
  complement?: string;
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

export interface IModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface IModalCreateAd {
  onOpen: () => void;
}

export interface IVehicle {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: number;
  color: string;
  fipe: number;
  price: string;
  description: string;
  published?: boolean;
}

export interface IVehicleBody extends IVehicle {
  images: string[];
}

export interface IUrlImg {
  img_url: string;
}

export interface IVehiclePost extends IVehicle {
  id?: string | undefined;
  images: IUrlImg[];
}

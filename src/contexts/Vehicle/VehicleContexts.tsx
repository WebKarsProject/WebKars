import { createContext, useState, useContext, useEffect } from "react";
import { IAxiosData, IProviderProps, IVehiclePost } from "../../interface";
import { Instance } from "../../services/axios";
import axios from "axios";
import { AuthContext } from "../Auth/AuthContext";

export interface IVehicleContext {
  ad: IVehiclePost[];
  createVehicle: (body: IVehiclePost) => Promise<void>;
}

export const VehicleContext = createContext<IVehicleContext>(
  {} as IVehicleContext
);

export const VehicleProvider = ({ children }: IProviderProps) => {
  const { setLoading } = useContext(AuthContext);
  const [ad, setAd] = useState([] as IVehiclePost[]);

  useEffect(() => {
    getVehicle();
  }, []);

  const createVehicle = async (body: IVehiclePost) => {
    setLoading(true);
    try {
      await Instance.post("/vehicle", body);
      await getVehicle();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        console.log(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  const getVehicle = async () => {
    try {
      const { data } = await Instance.get<Array<IVehiclePost>>("/vehicle");
      setAd(data);
      return data;
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
    <VehicleContext.Provider value={{ createVehicle, ad }}>
      {children}
    </VehicleContext.Provider>
  );
};

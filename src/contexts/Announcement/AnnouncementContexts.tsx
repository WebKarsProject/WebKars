import { createContext, useState, useContext, useEffect } from "react";
import {
  IAnnouncement,
  IAnnouncementArray,
  IAxiosData,
  IProviderProps,
} from "../../interface";
import { Instance } from "../../services/axios";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export interface IAnnouncementContext {
  ad: IAnnouncementArray[];
  createAnnouncement: (body: IAnnouncement) => Promise<void>;
}

export const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

export const AnnouncementProvider = ({ children }: IProviderProps) => {
  const { setLoading } = useContext(AuthContext);
  const [ad, setAd] = useState([] as IAnnouncementArray[]);

  useEffect(() => {
    getAnnouncement();
  }, []);

  const createAnnouncement = async (body: IAnnouncement) => {
    setLoading(true);
    try {
      console.log(body);
      await Instance.post("/vehicle", body);
      await getAnnouncement();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as IAxiosData;
        console.log(`${data.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  const getAnnouncement = async () => {
    try {
      const { data } = await Instance.get<Array<IAnnouncementArray>>(
        "/vehicle"
      );
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
    <AnnouncementContext.Provider value={{ createAnnouncement, ad }}>
      {children}
    </AnnouncementContext.Provider>
  );
};

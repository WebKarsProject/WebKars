import { createContext, useState, useContext } from "react";
import {
  IAnnouncement,
  IAxiosData,
  ICreateAnnouncementModal,
  IProviderProps,
} from "../../interface";
import { Instance } from "../../services/axios";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export interface IAnnouncementContext {
  createAnnouncement: (body: IAnnouncement) => Promise<void>;
}

export const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

export const AnnouncementProvider = ({ children }: IProviderProps) => {
  const { setLoading } = useContext(AuthContext);
  const [ad, setAd] = useState([]);

  const createAnnouncement = async (body: IAnnouncement) => {
    console.log(body);
    setLoading(true);
    try {
      const data = await Instance.post("/vehicle", body);
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
    <AnnouncementContext.Provider value={{ createAnnouncement }}>
      {children}
    </AnnouncementContext.Provider>
  );
};

import { createContext, useState, useContext, useEffect } from "react";
import {
  IAxiosData,
  IProviderProps,
  IUrlImg,
  IVehicleBody,
  IVehicleContext,
  IVehiclePost,
} from "../../interface";
import { Instance } from "../../services/axios";
import axios from "axios";
import { AuthContext } from "../Auth/AuthContext";
import foto from "../../assets/naoDisponivel.jpg";
import { useDisclosure } from "@chakra-ui/react";

export const VehicleContext = createContext<IVehicleContext>(
  {} as IVehicleContext
);

const VehicleProvider = ({ children }: IProviderProps) => {
  const { setLoading } = useContext(AuthContext);
  const [adVehicle, setAdVehicle] = useState([] as IVehiclePost[]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputModal, setInputModal] = useState<number[]>([1]);

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
      setAdVehicle(data);
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

  const addVehicle = (body: IVehicleBody) => {
    const newImages: IUrlImg[] = [];

    body.images.map((imgs) => {
      {
        imgs.length !== 0 && newImages.push({ img_url: imgs });
      }
    });

    {
      newImages.length === 0 &&
        newImages.push({
          img_url: foto,
        });
    }

    Reflect.deleteProperty(body, "images");

    const data: IVehiclePost = {
      ...body,
      images: newImages,
      published: true,
    };

    createVehicle(data);
    onClose();
  };

  return (
    <VehicleContext.Provider
      value={{
        createVehicle,
        adVehicle,
        addVehicle,
        isOpen,
        onOpen,
        onClose,
        inputModal,
        setInputModal,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export default VehicleProvider;

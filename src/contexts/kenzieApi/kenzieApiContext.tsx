import { createContext, useEffect, useState } from "react";
import { ICar, IProviderProps } from "../../interface";
import { kenzieKars } from "../../services/axios";

export interface IkenzieApiContext {
  brand: string[];
  carsBrand: any[];
  filterCar: ICar | undefined;
  carMark: (mark: string) => void;
  carModel: (carName: string) => void;
}

export const kenzieApiContext = createContext<IkenzieApiContext>(
  {} as IkenzieApiContext
);

const KenzieApiProvider = ({ children }: IProviderProps) => {
  const [brand, setBrand] = useState<string[]>([]);
  const [allCars, setAllCars] = useState<Array<ICar>>([]);
  const [carsBrand, setCarsBrand] = useState<any[]>([]);
  const [filterCar, setFilterCar] = useState<ICar>();

  useEffect(() => {
    const getBrands = async () => {
      try {
        const { data } = await kenzieKars.get("/cars");
        const brandsArr = Object.keys(data);
        setBrand(brandsArr);

        const setData: ICar[] = [];
        brandsArr.map(async (cars) => {
          const response = await kenzieKars.get(`/cars?brand=${cars}`);
          response.data.map((carsBrand: ICar) => {
            setData.push(carsBrand);
          });

          setAllCars(setData);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getBrands();
  }, [filterCar]);

  const carMark = (mark: string) => {
    setFilterCar(undefined);
    const data = allCars.filter((cars) => cars.brand === mark);
    setCarsBrand(data);
  };

  const carModel = (carName: string) => {
    if (carName.length !== 0) {
      const data: ICar = carsBrand.find((cars) => cars.name == carName);

      const fuel: any = {
        1: "Flex",
        2: "Híbrido",
        3: "Eletrico",
      };

      if (fuel[data.fuel]) {
        data.fuel = fuel[data.fuel];
      }
      setFilterCar(data);
    } else {
      setFilterCar(undefined);
    }
  };

  return (
    <kenzieApiContext.Provider
      value={{
        brand,
        carsBrand,
        filterCar,
        carMark,
        carModel,
      }}
    >
      {children}
    </kenzieApiContext.Provider>
  );
};

export default KenzieApiProvider;

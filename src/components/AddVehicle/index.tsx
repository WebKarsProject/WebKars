import {
  Modal,
  Flex,
  FormControl,
  Text,
  Button,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Select,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import Inputs from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IModal,
  IVehicleBody,
  IVehiclePost,
  IUrlImg,
  ICar,
} from "../../interface";
import { IVehicleSchema } from "../../schemas/Vehicle";
import { useContext, useEffect, useState } from "react";
import { VehicleContext } from "../../contexts/Vehicle/VehicleContexts";
import foto from "../../assets/naoDisponivel.jpg";
import Textareas from "../Textarea";
import { kenzieKars } from "../../services/axios";

const VehicleModal = ({ isOpen, onOpen, onClose }: IModal) => {
  const { createVehicle } = useContext(VehicleContext);

  const [inputModal, setInputModal] = useState<number[]>([1]);

  const [brand, setBrand] = useState<string[]>([]);
  const [allCars, setAllCars] = useState<Array<ICar>>([]);
  const [carsBrand, setCarsBrand] = useState<any[]>([]);
  const [filterCar, setFilterCar] = useState<ICar>();

  const [isLoad, setIsLoad] = useState(false);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehicleBody>({
    resolver: yupResolver(IVehicleSchema),
  });

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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <ModalHeader>Criar anuncio</ModalHeader>
        <ModalCloseButton />

        <ModalBody
          as={"form"}
          p={{ base: "0px 14px 0px 20px", md: "0px 24px 0px 30px" }}
          display={"flex"}
          flexDir={"column"}
          gap={"24px"}
          onSubmit={handleSubmit(addVehicle)}
        >
          <Text variant={"body-2-500"} color={"grey_scale.grey0"} pb={"24px"}>
            Infomações do veículo
          </Text>

          <FormControl>
            <FormLabel>Marca</FormLabel>
            <Select
              opacity={carsBrand.length === 0 ? 0.5 : 1}
              placeholder="Selecione a Marca"
              {...register("brand")}
              onChange={(e) => carMark(e.target.value)}
            >
              {brand.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Modelo</FormLabel>
            <Select
              opacity={filterCar === undefined ? 0.5 : 1}
              placeholder={"Selecione o Modelo"}
              {...register("model")}
              onChange={(e) => carModel(e.target.value)}
            >
              {carsBrand.length !== 0 &&
                carsBrand.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
            </Select>
          </FormControl>

          <Flex gap={3}>
            <FormControl>
              <FormLabel>Ano</FormLabel>
              <Select
                opacity={filterCar === undefined ? 0.5 : 1}
                defaultValue={"DEFAULT"}
                variant="outline"
                {...register("year")}
              >
                <option disabled hidden value={"DEFAULT"}>
                  Selecione o Ano
                </option>
                {filterCar !== undefined && (
                  <option key={filterCar?.id} value={filterCar?.year}>
                    {filterCar?.year}
                  </option>
                )}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Combustível</FormLabel>
              <Select
                defaultValue={"DEFAULT"}
                opacity={filterCar === undefined ? 0.5 : 1}
                {...register("fuel")}
              >
                <option disabled hidden value={"DEFAULT"}>
                  Selecionar Combustível
                </option>
                {filterCar !== undefined && (
                  <option key={filterCar?.id} value={filterCar?.fuel}>
                    {filterCar?.fuel}
                  </option>
                )}
              </Select>
            </FormControl>
          </Flex>

          <Flex gap={3}>
            <Inputs
              id={"mileage"}
              label={"Quilometragem"}
              type={"text"}
              placeholder={"30.000 km"}
              register={register}
              errors={errors}
            />
            <Inputs
              id={"color"}
              label={"Cor"}
              type={"text"}
              placeholder={"Branco"}
              register={register}
              errors={errors}
            />
          </Flex>

          <Flex gap={3}>
            <FormControl>
              <FormLabel>Preço tabela FIPE</FormLabel>
              <Select
                defaultValue={"DEFAULT"}
                opacity={filterCar === undefined ? 0.5 : 1}
                {...register("fipe")}
              >
                <option disabled hidden value={"DEFAULT"}>
                  Selecione o Preço
                </option>
                {filterCar !== undefined && (
                  <option value={filterCar?.value}>
                    R$ {filterCar?.value},00
                  </option>
                )}
              </Select>
            </FormControl>

            <Inputs
              id={"price"}
              label={"Preço"}
              type={"text"}
              placeholder={"R$ 50.000,00"}
              register={register}
              errors={errors}
            />
          </Flex>

          <Textareas
            id={"description"}
            label="Descrição"
            placeholder="Digitar descrição"
            register={register}
            errors={errors}
          />

          {inputModal.map((item, index) => {
            return (
              <Inputs
                key={index}
                id={`images[${String(index)}]`}
                label={
                  index !== 0
                    ? index + " " + "Imagem da capa"
                    : "Imagem da capa"
                }
                type={"text"}
                placeholder={"https://image.com"}
                register={register}
                errors={errors}
              />
            );
          })}

          <Button
            variant={"brand_opacity"}
            alignSelf={"start"}
            fontSize={{ base: ".75rem", md: "0.875rem" }}
            maxW={"315px"}
            onClick={() => setInputModal([...inputModal, inputModal.length++])}
          >
            Adicionar campo para imagem da galeria
          </Button>
          <Stack
            spacing={4}
            direction="row"
            alignSelf={"end"}
            p={"42px 0px 18px 0px"}
          >
            <Button
              variant={"brand_opacity"}
              color={"grey_scale.grey2"}
              colorScheme="blue"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button type={"submit"} variant={"outline2"}>
              Criar anúncio
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VehicleModal;

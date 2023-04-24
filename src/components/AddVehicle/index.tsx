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
  Input,
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

import { dataBase } from "../../dataBase.mock.json";

const VehicleModal = ({ isOpen, onOpen, onClose }: IModal) => {
  const { createVehicle } = useContext(VehicleContext);

  const [inputModal, setInputModal] = useState<number[]>([1]);

  const [brand, setBrand] = useState<string[]>([]);
  const [name, setName] = useState<string[]>([]);
  const [car, setCar] = useState<ICar>();

  const [optionsSelected, setOptionsSelected] = useState({
    brand: "",
    name: "",
    year: "",
  });

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const getBrands = async () => {
      try {
        const { data } = await kenzieKars.get("/cars");
        const brandsArr = Object.keys(data);
        setBrand(brandsArr);
      } catch (error) {
        console.log(error);
      }
    };
    getBrands();
  }, []);

  useEffect(() => {
    getModels();
  }, [optionsSelected]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehicleBody>({
    resolver: yupResolver(IVehicleSchema),
  });

  const addVehicle = (body: IVehicleBody) => {
    console.log(body);
    const newImages: IUrlImg[] = [];
    const { images } = body;
    images?.map((imgs) => {
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

    const {
      brand,
      model,
      year,
      fuel,
      mileage,
      color,
      fipe,
      price,
      description,
    } = body;

    const data: IVehiclePost = {
      brand,
      model,
      year,
      fuel,
      mileage,
      color,
      fipe,
      description,
      price,
      images: newImages,
      published: true,
    };

    // createVehicle(data);
  };

  const getModels = async () => {
    try {
      const { data } = await kenzieKars.get(
        `/cars?brand=${optionsSelected.brand}`
      );

      const nameArr: string[] = [];
      data?.forEach((e: any) => nameArr.push(e.name));
      setName(nameArr);
      const carFiltred = data.filter(
        (e: any) => e.name === optionsSelected.name
      );
      if (carFiltred[0].fuel == 1) {
        carFiltred[0].fuel = "Flex";
      } else if (carFiltred[0].fuel == 2) {
        carFiltred[0].fuel = "Híbrido";
      } else {
        carFiltred[0].fuel = "Eletrico";
      }
      setCar(carFiltred[0]);
    } catch (error) {
      console.log(error);
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
              placeholder={"Mercedes Benz"}
              {...register("brand")}
              onChange={(e) => {
                setOptionsSelected({
                  ...optionsSelected,
                  brand: e.target.value,
                });
              }}
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
              placeholder={"A 200 CGI ADVANCE SEDAN"}
              {...register("model")}
              onChange={(e) => {
                setOptionsSelected({
                  ...optionsSelected,
                  name: e.target.value,
                });
              }}
            >
              {name.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </FormControl>

          <Flex gap={3}>
            <FormControl>
              <FormLabel>Ano</FormLabel>
              <Input
                id="year"
                placeholder={"2023"}
                type="text"
                value={car?.year}
                {...register("year")}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Combustível</FormLabel>
              <Input
                id="fuel"
                placeholder={"Flex"}
                type="text"
                value={car?.fuel}
                {...register("fuel")}
              />
            </FormControl>
          </Flex>

          <Flex gap={3}>
            <Inputs
              id={"mileage"}
              label={"Quilometragem"}
              type={"text"}
              placeholder={"30.000"}
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
              <Input
                id="fipe"
                placeholder={"R$ 48.000,00"}
                value={
                  car?.value && `R$ ${car?.value.toLocaleString("pt-BR")},00`
                }
                {...register("fipe")}
              />
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

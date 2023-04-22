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
import { dataBase } from "../../dataBase.mock.json";
import { useContext, useState } from "react";
import Textareas from "../Textarea";
import { VehicleContext } from "../../contexts/Vehicle/VehicleContexts";
import { IVehicleSchema } from "../../schemas/Vehicle";
import { IModal, IVehicleBody, IVehiclePost, IUrlImg } from "../../interface";
import foto from "../../assets/naoDisponivel.jpg";

const VehicleModal = ({ isOpen, onOpen, onClose }: IModal) => {
  const { createVehicle } = useContext(VehicleContext);

  const [inputModal, setInputModal] = useState([1]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehicleBody>({
    resolver: yupResolver(IVehicleSchema),
  });

  const addVehicle = (body: IVehicleBody) => {
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

    createVehicle(data);
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
            <Select placeholder={"Mercedes Benz"} {...register("brand")}>
              {dataBase.map((item) => (
                <option key={item.id} value={item.brand}>
                  {item.brand}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Modelo</FormLabel>
            <Select
              placeholder={"A 200 CGI ADVANCE SEDAN"}
              {...register("model")}
            >
              {dataBase.map((item) => (
                <option key={item.id} value={item.model}>
                  {item.model}
                </option>
              ))}
            </Select>
          </FormControl>

          <Flex gap={3}>
            <FormControl>
              <FormLabel>Ano</FormLabel>
              <Select placeholder={"2023"} {...register("year")}>
                {dataBase.map((item) => (
                  <option key={item.id} value={item.year}>
                    {item.year}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Combustível</FormLabel>
              <Select placeholder={"Gasolina / Etanol"} {...register("fuel")}>
                {dataBase.map((item) => (
                  <option key={item.id} value={item.fuel}>
                    {item.fuel}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Flex>

          <Flex gap={3}>
            <FormControl>
              <FormLabel>Quilometragem</FormLabel>
              <Select placeholder={"30.000"} {...register("mileage")}>
                {dataBase.map((item) => (
                  <option key={item.id} value={item.mileage}>
                    {item.mileage}
                  </option>
                ))}
              </Select>
            </FormControl>

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
                id="fipe"
                placeholder={"R$ 48.000,00"}
                {...register("fipe")}
              >
                {dataBase.map((item) => (
                  <option key={item.id} value={item.fipe}>
                    {item.fipe}
                  </option>
                ))}
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

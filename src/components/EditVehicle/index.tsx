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
import { IVehicleBody } from "../../interface";
import { IVehicleSchema } from "../../schemas/Vehicle";
import { useContext, useEffect } from "react";
import { VehicleContext } from "../../contexts/Vehicle/VehicleContexts";
import Textareas from "../Textarea";
import { kenzieApiContext } from "../../contexts/kenzieApi/kenzieApiContext";

interface IEditVehicle {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

const EditVehicle = ({ id, isOpen, onClose }: IEditVehicle) => {
  const { allCars, setInputModal, inputModal } = useContext(VehicleContext);
  const { brand, filterCar, carsBrand, carMark, carModel } =
    useContext(kenzieApiContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehicleBody>({
    resolver: yupResolver(IVehicleSchema),
  });

  const car = allCars.find((item) => item.id === id);

  console.log(car?.images);

  useEffect(() => {
    if (!!car) {
      carMark(car?.brand);
    }
  }, []);

  const editVehicle = (data: any) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <ModalHeader>Editar anuncio</ModalHeader>
        <ModalCloseButton />

        <ModalBody
          as={"form"}
          p={{ base: "0px 14px 0px 20px", md: "0px 24px 0px 30px" }}
          display={"flex"}
          flexDir={"column"}
          gap={"24px"}
          onSubmit={handleSubmit(editVehicle)}
        >
          <Text variant={"body-2-500"} color={"grey_scale.grey0"} pb={"24px"}>
            Infomações do veículo
          </Text>

          <FormControl>
            <FormLabel>Marca</FormLabel>
            <Select
              opacity={
                carsBrand.length === 0 && car?.brand === undefined ? 0.5 : 1
              }
              placeholder="Selecione a Marca"
              {...register("brand")}
              defaultValue={car?.brand}
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
              opacity={
                carsBrand.length === 0 && car?.brand === undefined ? 0.5 : 1
              }
              placeholder={"Selecione o Modelo"}
              {...register("model")}
              defaultValue={car?.model}
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
                defaultValue={car?.year}
                variant="outline"
                {...register("year")}
              >
                <option disabled hidden>
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
                defaultValue={car?.fuel}
                opacity={filterCar === undefined ? 0.5 : 1}
                {...register("fuel")}
              >
                <option disabled hidden>
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
              defaultValue={car?.mileage}
            />
            <Inputs
              id={"color"}
              label={"Cor"}
              type={"text"}
              placeholder={"Branco"}
              register={register}
              errors={errors}
              defaultValue={car?.color}
            />
          </Flex>

          <Flex gap={3}>
            <FormControl>
              <FormLabel>Preço tabela FIPE</FormLabel>
              <Select
                defaultValue={car?.fipe}
                opacity={filterCar === undefined ? 0.5 : 1}
                {...register("fipe")}
              >
                <option disabled hidden>
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
              defaultValue={car?.price}
            />
          </Flex>

          <Textareas
            id={"description"}
            label="Descrição"
            placeholder="Digitar descrição"
            register={register}
            errors={errors}
            defaultValue={car?.description}
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
                defaultValue={car?.images[index].img_url}
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
              Salvar
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditVehicle;

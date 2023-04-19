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
  ModalFooter,
  FormErrorMessage,
  Select,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import { IModal, ICreateAnnouncementModal } from "../../interface";
import Inputs from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateAnnouncementModalSchema } from "../../schemas/CreateAnnouncementModal/CreateAnnouncementModalSchema";

import { dataBase } from "../../dataBase.mock.json";
import { useState } from "react";

const CreateAnnouncementModal = ({ isOpen, onOpen, onClose }: IModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAnnouncementModal>({
    resolver: yupResolver(CreateAnnouncementModalSchema),
  });

  const Test = (data: any) => {
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
        <ModalHeader>Criar anuncio</ModalHeader>
        <ModalCloseButton />

        <ModalBody
          as={"form"}
          p={{ base: "0px 14px 0px 20px", md: "0px 24px 0px 30px" }}
          display={"flex"}
          flexDir={"column"}
          gap={"24px"}
          onSubmit={handleSubmit(Test)}
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

          <Inputs
            id={"img"}
            label={"Imagem da capa"}
            type="text"
            placeholder={"https://image.com"}
            register={register}
            errors={errors}
          />

          {/* <Inputs
            id={"img"}
            label={"1° Imagem da galeria"}
            type={"text"}
            placeholder={"https://image.com"}
            register={register}
            errors={errors}
          />

          <Inputs
            id={"img"}
            label={"2° Imagem da galeria"}
            type={"text"}
            placeholder={"https://image.com"}
            register={register}
            errors={errors}
          /> */}

          <Button
            variant={"brand_opacity"}
            alignSelf={"start"}
            fontSize={{ base: ".75rem", md: "0.875rem" }}
            maxW={"315px"}
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

export default CreateAnnouncementModal;

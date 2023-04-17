import {
  Modal,
  Box,
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
  Select,
  FormLabel,
} from "@chakra-ui/react";
import { IModal, ICreateAnnouncementModal } from "../../interface";
import Inputs from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateAnnouncementModalSchema } from "../../schemas/CreateAnnouncementModal/CreateAnnouncementModalSchema";

const CreateAnnouncementModal = ({ isOpen, onOpen, onClose }: IModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAnnouncementModal>({
    resolver: yupResolver(CreateAnnouncementModalSchema),
  });

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
          p={"0px 24px 0px 30px"}
          display={"flex"}
          flexDir={"column"}
          gap={"24px"}
        >
          <Text variant={"body-2-500"} color={"grey_scale.grey0"} pb={"24px"}>
            Infomações do veículo
          </Text>

          <FormControl>
            <FormLabel>Marca</FormLabel>
            <Select
              placeholder={"Mercedes Benz"}
              {...register("brand")}
            ></Select>
          </FormControl>

          <FormControl>
            <FormLabel>Modelo</FormLabel>
            <Select
              placeholder={"A 200 CGI ADVANCE SEDAN"}
              {...register("model")}
            ></Select>
          </FormControl>

          <Flex gap={3}>
            <FormControl>
              <FormLabel>Ano</FormLabel>
              <Select placeholder="2023" {...register("year")}></Select>
            </FormControl>

            <FormControl>
              <FormLabel>Combustível</FormLabel>
              <Select
                placeholder="Gasolina / Etanol"
                {...register("fuel")}
              ></Select>
            </FormControl>
          </Flex>

          <Flex gap={3}>
            <FormControl>
              <FormLabel>Quilometragem</FormLabel>
              <Select placeholder="30.000" {...register("mileage")}></Select>
            </FormControl>

            <FormControl>
              <FormLabel>Cor</FormLabel>
              <Select placeholder="Branco" {...register("color")}></Select>
            </FormControl>
          </Flex>

          <Flex gap={3}>
            <FormControl>
              <FormLabel>Preço tabela FIPE</FormLabel>
              <Select placeholder="R$ 48.000,00" {...register("fipe")}></Select>
            </FormControl>

            <FormControl>
              <FormLabel>Preço</FormLabel>
              <Select
                placeholder="R$ 50.000,00"
                {...register("price")}
              ></Select>
            </FormControl>
          </Flex>

          <Inputs
            label={"Imagem da capa"}
            type={"Imagem da capa"}
            placeholder={"https://image.com"}
            register={register}
            errors={errors}
          />

          <Inputs
            label={"1° Imagem da galeria"}
            type={"1° Imagem da galeria"}
            placeholder={"https://image.com"}
            register={register}
            errors={errors}
          />

          <Inputs
            label={"2° Imagem da galeria"}
            type={"2° Imagem da galeria"}
            placeholder={"https://image.com"}
            register={register}
            errors={errors}
          />

          <Button
            variant={"brand_opacity"}
            p={"12px 20px"}
            maxW={"315px"}
            noOfLines={1}
          >
            Adicionar campo para imagem da galeria
          </Button>
        </ModalBody>

        <ModalFooter p={"42px 24px 18px 0px"}>
          <Button
            variant={"brand_opacity"}
            color={"grey_scale.grey2"}
            colorScheme="blue"
            mr={"10px"}
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button variant={"outline2"}>Criar anúncio</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateAnnouncementModal;

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { IEmail } from "../../interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailSchema } from "../../schemas/Users";
import { useContext } from "react";
import { VehicleContext } from "../../contexts/Vehicle/VehicleContexts";
import Inputs from "../Input";

const PasswordRecovery = () => {
  const { isOpen, onClose } = useContext(VehicleContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmail>({
    resolver: yupResolver(emailSchema),
  });

  const test = (data: any) => {
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
        <ModalHeader>Recupere sua senha</ModalHeader>
        <ModalBody
          as={"form"}
          display={"flex"}
          flexDir={"column"}
          onSubmit={handleSubmit(test)}
          gap={"1rem"}
        >
          <Inputs
            label={""}
            id={"email"}
            placeholder={"informe o seu email aqui"}
            type={"email"}
            register={register}
            errors={errors}
          />
          <Stack spacing={4} direction="row" alignSelf={"end"}>
            <Button
              variant={"brand_opacity"}
              color={"grey_scale.grey2"}
              colorScheme="blue"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button type={"submit"} variant={"outline2"}>
              Recuperar
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default PasswordRecovery;

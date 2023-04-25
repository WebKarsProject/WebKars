import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { IEmail, IModal } from "../../interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailSchema } from "../../schemas/Users";
import { useContext } from "react";
import { VehicleContext } from "../../contexts/Vehicle/VehicleContexts";

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
        <ModalCloseButton />
        <ModalBody
          as={"form"}
          display={"flex"}
          flexDir={"column"}
          onSubmit={handleSubmit(test)}
        >
          <Input placeholder="informe o seu email aqui"></Input>
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

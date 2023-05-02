import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IModal } from "../../interface";

const ModalSuccessRegister = ({ isOpen, onOpen, onClose }: IModal) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent display={"flex"} gap={"2rem"} h={"287px"} w={"528px"}>
          <ModalHeader>
            <Text variant={"Heading-7-500"}>Sucesso!</Text>
            <ModalCloseButton onClick={onClose} />
          </ModalHeader>
          <ModalBody display={"flex"} flexDir={"column"} gap={"1rem"}>
            <Text variant={"Heading-7-500"}>
              Sua conta foi criada com sucesso!
            </Text>
            <Text variant={"body-1-400"}>
              Agora você poderá ver seus negócios crescendo em grande escala
            </Text>
            <Button variant={"brand1"} w={"132px"} fontSize={"14px"}>
              Ir para o login
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalSuccessRegister;

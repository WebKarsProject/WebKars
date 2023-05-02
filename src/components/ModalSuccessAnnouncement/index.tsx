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

const ModalSuccessAnnouncement = ({ isOpen, onOpen, onClose }: IModal) => {
  return (
    <>
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent display={"flex"} gap={"2rem"} h={"229px"} w={"528px"}>
          <ModalHeader>
            <Text variant={"Heading-7-500"}>Sucesso!</Text>
            <ModalCloseButton onClick={onClose} />
          </ModalHeader>
          <ModalBody display={"flex"} flexDir={"column"} gap={"1rem"}>
            <Text variant={"Heading-7-500"}>
              Seu anúncio foi criado com sucesso
            </Text>
            <Text variant={"body-1-400"}>
              Agora você poderá ver seus negócios crescendo em grande escala
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalSuccessAnnouncement;

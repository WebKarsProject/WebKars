import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IModal } from "../../interface";

const ModalRemoveAnnouncement = ({ isOpen, onOpen, onClose }: IModal) => {
  return (
    <>
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent display={"flex"} gap={"2rem"} h={"300px"} w={"528px"}>
          <ModalHeader>
            <Text variant={"Heading-7-500"}>Excluir anúncio</Text>
            <ModalCloseButton onClick={onClose} />
          </ModalHeader>
          <ModalBody display={"flex"} flexDir={"column"} gap={"1rem"}>
            <Text variant={"Heading-7-500"}>
              Tem certeza que deseja remover este anúncio?
            </Text>
            <Text variant={"body-1-400"}>
              Essa ação não poderá ser desfeita. Isso excluirá permanentemente
              sua conta e removerá seus dados de nossos servidores
            </Text>
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              marginTop={"1rem"}
            >
              <Button variant={"negative"} bg={"grey_scale.grey6"}>
                Cancelar
              </Button>
              <Button variant={"alert"}>Sim, excluir anúncio</Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalRemoveAnnouncement;

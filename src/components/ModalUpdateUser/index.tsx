import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { IModal } from '../../interface';

const ModalUserUpdate = ({ isOpen, onOpen, onClose }: IModal) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input placeholder="Primeiro nome" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Digite Seu email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>CPF</FormLabel>
              <Input placeholder="900.880.090-00" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Celular</FormLabel>
              <Input placeholder="(084) 90909-9092" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Data de nascimento</FormLabel>
              <Input placeholder="09/12/99" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descrição</FormLabel>
              <Input placeholder="Descrição" />
            </FormControl>
          </ModalBody>

          <ModalFooter gap="20px">
            <Button onClick={onClose}>Cancel</Button>
            <Button
              colorScheme="blue"
              mr={3}
            >
              Salvar alterações
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalUserUpdate;

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
  Text,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { AiOutlineEdit } from 'react-icons/ai';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { commentContext } from '../../contexts/Comment/commentContext';

const validationSchema = Yup.object({
  description: Yup.string().required('A descrição é obrigatória'),
});

const ModalEditComment = ({ commentId }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errors, setErrors] = useState({ description: '' });
  const [description, setDescription] = useState('');

  const { updateComment, deleteComment } = useContext(commentContext);

  const handleSubmitUpdate = async (e: any) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ description });
      setErrors({ description: '' });

      await updateComment(commentId, { description });
      onClose();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setErrors({ description: error.message });
      }
    }
  };

  const handleSubmitDelete = async () => {
    deleteComment(commentId);
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Editar descrição"
        icon={<AiOutlineEdit />}
        onClick={onOpen}
        bg={'none'}
      />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar descrição</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="description">
              <FormLabel>Descrição</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Digite a descrição aqui..."
              />
              {errors.description && (
                <Text color="red.500">{errors.description}</Text>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter gap="10px">
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSubmitUpdate}
              type="submit"
            >
              Editar
            </Button>
            <Button
              variant="ghost"
              onClick={handleSubmitDelete}
              type="submit"
              bg="feedback.alert2"
              color="feedback.alert1"
            >
              Excluir
            </Button>
            <Button
              variant="ghost"
              onClick={onClose}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEditComment;

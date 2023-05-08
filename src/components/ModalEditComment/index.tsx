import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { AuthContext } from '../../contexts/Auth/AuthContext'

interface IProps {
  idUser: string | undefined
}

const ModalEditComment = ({ idUser }: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useContext(AuthContext)
  return (
    <>
      {idUser === user.id && <IconButton aria-label="Editar descrição" icon={<AiOutlineEdit />} onClick={onOpen} bg={'none'} />}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar descrição</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="description">
              <FormLabel>Descrição</FormLabel>
              <Textarea placeholder="Digite a descrição aqui..." />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Salvar
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Excluir
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalEditComment

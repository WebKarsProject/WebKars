import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IRegisterComment } from '../../interface'
import { commentSchema } from '../../schemas/comment/commentSchema'
import Description from '../Description'
import { commentContext } from '../../contexts/Comment/commentContext'

interface IProps {
  idUser: string | undefined
  idComment: string
}

interface IEditComment {
  description: string
}

const ModalEditComment = ({ idUser, idComment }: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useContext(AuthContext)
  const { editComment, deleteComment, setCurrentId } = useContext(commentContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IRegisterComment>({
    resolver: yupResolver(commentSchema)
  })

  return (
    <>
      {idUser === user.id && <IconButton aria-label="Editar descrição" icon={<AiOutlineEdit />} onClick={onOpen} bg={'none'} />}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar descrição</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl as="form" onSubmit={handleSubmit(editComment)} id="description">
              <FormLabel>Descrição</FormLabel>
              <Textarea {...register('description')} placeholder="Digite a descrição aqui..." />
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  type="submit"
                  mr={3}
                  onClick={() => {
                    setCurrentId(idComment), onClose
                  }}
                >
                  Salvar
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    deleteComment(idComment), onClose
                  }}
                >
                  Excluir
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalEditComment

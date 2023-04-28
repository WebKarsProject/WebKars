import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Stack,
  FormControl,
  Text,
} from "@chakra-ui/react";
import { IModal } from "../../interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userUpdateSchema } from "../../schemas/Users";
import Inputs from "../Input";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const ModalAddressUpdate = ({ isOpen, onOpen, onClose }: IModal) => {
  const { updateAddress } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(userUpdateSchema),
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text variant={"Heading-7-500"}>Editar endereço</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody pb={6}>
            <Text variant={"body-2-500"} marginBottom={"24px"}>
              Informações de endereço
            </Text>
            <FormControl
              onSubmit={handleSubmit(updateAddress)}
              as="form"
              display="flex"
              flexDirection={"column"}
              gap={"1rem"}
            >
              <Inputs
                label={"CEP"}
                placeholder="89888.888"
                id={"zipcode"}
                type={"number"}
                register={register}
                errors={errors}
              ></Inputs>

              <Stack direction={"row"} justifyContent={"space-between"}>
                <Inputs
                  label={"Estado"}
                  placeholder="Paraná"
                  id={"state"}
                  type={"text"}
                  register={register}
                  errors={errors}
                />

                <Inputs
                  label={"Cidade"}
                  placeholder="Curitiba"
                  id={"city"}
                  type={"text"}
                  register={register}
                  errors={errors}
                />
              </Stack>

              <Inputs
                label={"Rua"}
                placeholder="Rua do paraná"
                id={"street"}
                type={"text"}
                register={register}
                errors={errors}
              ></Inputs>

              <Stack direction={"row"} justifyContent={"space-between"}>
                <Inputs
                  label={"Número"}
                  placeholder="1029"
                  id={"number"}
                  type={"number"}
                  register={register}
                  errors={errors}
                />

                <Inputs
                  label={"Complemento"}
                  placeholder="Apto 12"
                  id={"complement"}
                  type={"text"}
                  register={register}
                  errors={errors}
                />
              </Stack>

              <ModalFooter gap="20px">
                <Button onClick={onClose}>Cancelar</Button>
                <Button variant={"brand1"} type={"submit"} onClick={onClose}>
                  Salvar alterações
                </Button>
              </ModalFooter>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAddressUpdate;

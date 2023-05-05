import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
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
  const { updateAddress, user } = useContext(AuthContext);
  // console.log(user);
  // const { city, number, state, street, zipcode, complement } = user.address;

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
                placeholder="Informe seu CEP"
                id={"zipcode"}
                type={"number"}
                register={register}
                errors={errors}
                // defaultValue={zipcode}
              ></Inputs>

              <Stack direction={"row"} justifyContent={"space-between"}>
                <Inputs
                  label={"Estado"}
                  placeholder="Informe seu estado"
                  id={"state"}
                  type={"text"}
                  register={register}
                  errors={errors}
                  // defaultValue={state}
                />

                <Inputs
                  label={"Cidade"}
                  placeholder="Informe sua cidade"
                  id={"city"}
                  type={"text"}
                  register={register}
                  errors={errors}
                  // defaultValue={city}
                />
              </Stack>

              <Inputs
                label={"Rua"}
                placeholder="Informe sua rua"
                id={"street"}
                type={"text"}
                register={register}
                errors={errors}
                // defaultValue={street}
              ></Inputs>

              <Stack direction={"row"} justifyContent={"space-between"}>
                <Inputs
                  label={"Número"}
                  placeholder="Informe o numero"
                  id={"number"}
                  type={"number"}
                  register={register}
                  errors={errors}
                  // defaultValue={number}
                />

                <Inputs
                  label={"Complemento"}
                  placeholder="Informe comp"
                  id={"complement"}
                  type={"text"}
                  register={register}
                  errors={errors}
                  // defaultValue={complement}
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

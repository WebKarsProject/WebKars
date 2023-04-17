import {
  Modal,
  Box,
  Flex,
  FormControl,
  Text,
  ButtonGroup,
  Button,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@chakra-ui/react";
import { IModal, IReqLogin } from "../../interface";
import Inputs from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/Login/loginSchema";

const CreateAnnouncementModal = ({ isOpen, onOpen, onClose }: IModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReqLogin>({ resolver: yupResolver(loginSchema) });

  const login = (data: IReqLogin) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={"80px 0px 64px 0px"}>
        <ModalHeader>Criar anuncio</ModalHeader>
        <ModalCloseButton />

        <ModalBody p={"0px 24px 0px 30px"}>
          <Text variant={"body-2-500"} color={"grey_scale.grey0"} pb={"24px"}>
            Infomações do veículo
          </Text>

          <Inputs
            label={"email"}
            type={"email"}
            placeholder={"Digite aqui seu email"}
            register={register}
            errors={errors}
          />

          <Inputs
            label={"password"}
            type={"password"}
            placeholder={"Digite aqui sua senha"}
            register={register}
            errors={errors}
          />
        </ModalBody>

        <ModalFooter p={"42px 24px 18px 0px"}>
          <Button
            variant={"brand_opacity"}
            color={"grey_scale.grey2"}
            colorScheme="blue"
            mr={"10px"}
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button variant={"brand_disable"} onClick={handleSubmit(login)}>
            Criar anúncio
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateAnnouncementModal;

{
  /* <Box
position={"fixed"}
top={"0"}
w={"100vw"}
h={"100vh"}
bg={"#00000050"}
zIndex={"999"}
pt={"80px"}
>
<Flex
  flexDir={"column"}
  w={"100%"}
  maxW={"520px"}
  h={"calc(100% - 80px)"}
  m={"0 auto"}
  bg={"grey_scale.whiteFixed"}
>
  <Text variant={"Heading-7-500"} p={"16px 24px"}>
    Criar anuncio
  </Text>
  <Flex flexDir={"column"} p={"0px 24px 0px 30px"}>
    <FormControl>
      <Text variant={"body-2-500"} color={"grey_scale.grey0"} pb={"24px"}>
        Infomações do veículo
      </Text>
      <Inputs
        label={"Marca"}
        type={"text"}
        placeholder={"Mercedes Benz"}
      />

      <Inputs
        label={"Marca"}
        type={"text"}
        placeholder={"Mercedes Benz"}
      />

      <Inputs
        label={"Marca"}
        type={"text"}
        placeholder={"Mercedes Benz"}
      />

      <Inputs
        label={"Marca"}
        type={"text"}
        placeholder={"Mercedes Benz"}
      />
    </FormControl>
    <Button
      variant={"brand_opacity"}
      p={"12px 20px"}
      m={"24px 0px 42px 0px"}
    >
      Adicionar campo para imagem da galeria
    </Button>
    <ButtonGroup
      display={"flex"}
      justifyContent={"end"}
      w={"100%"}
      gap={"10px"}
    >
      <Button
        variant={"brand_opacity"}
        color={"grey_scale.grey2"}
        onClick={() => setModal(false)}
      >
        Cancelar
      </Button>
      <Button variant={"brand_disable"}>Criar anúncio</Button>
    </ButtonGroup>
  </Flex>
</Flex>
</Box> */
}

import {
  Button,
  Card,
  CardBody,
  FormControl,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Inputs from "../../components/Input";
import Textareas from "../../components/Textarea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../schemas/Users";
import { IUser } from "../../interface";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(userSchema),
  });

  const test = (data: IUser) => {
    console.log(data);
  };

  return (
    <Card height={"100%"}>
      <Header />
      <CardBody
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={"grey_scale.grey8"}
        height={"100vh"}
      >
        <FormControl
          display="flex"
          flexDirection={"column"}
          gap={"2rem"}
          width={"98%"}
          maxWidth={"411px"}
          padding={"44px 48px 44px 48px"}
          backgroundColor={"white"}
          height={"max-content"}
          onSubmit={handleSubmit(test)}
        >
          <Heading fontSize={"1.5rem"}>Cadastro</Heading>
          <Text variant={"body-2-500"}>Informações pessoais</Text>
          <Inputs
            label={"Nome"}
            placeholder={"Ex: Junielson Diniz"}
            type={"text"}
            register={register}
            errors={errors}
          />
          <Inputs
            label={"Email"}
            placeholder={"Ex: junielson@kenzie.com.br"}
            type={"email"}
            register={register}
            errors={errors}
          />
          <Inputs
            label={"CPF"}
            placeholder={"000.000.000-00"}
            type={"number"}
            register={register}
            errors={errors}
          />
          <Inputs
            label={"Celular"}
            placeholder={"(DDD) 90000-0000"}
            type={"number"}
            register={register}
            errors={errors}
          />
          <Inputs
            label={"Data de nascimento"}
            placeholder={"00/00/00"}
            type={"date"}
            register={register}
            errors={errors}
          />
          <Textareas label="Descrição" placeholder="Digitar descrição" />
          <Text variant={"body-2-500"}>Informações de endereço</Text>
          <Stack direction={"row"}>
            <Inputs
              label={"Estado"}
              placeholder={"Digitar estado"}
              type={"text"}
              register={register}
              errors={errors}
            />
            <Inputs
              label={"Cidade"}
              placeholder={"Digitar cidade"}
              type={"text"}
              register={register}
              errors={errors}
            />
          </Stack>
          <Inputs
            label={"Rua"}
            type={"text"}
            placeholder={"Ex: Rua Zenite"}
            register={register}
            errors={errors}
          />
          <Stack direction={"row"}>
            <Inputs
              label={"Número"}
              type={"number"}
              placeholder={"Digitar número"}
              register={register}
              errors={errors}
            />
            <Inputs
              label={"Complemento"}
              type={"text"}
              placeholder={"Ex: apto 307"}
              register={register}
              errors={errors}
            />
          </Stack>
          <Text variant={"body-2-500"}>Tipo de conta</Text>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Button
              variant={"outline2"}
              padding={"12px 28px 12px 28px"}
              h={"48px"}
              w={"152px"}
              _focus={{ bg: "brand.brand1", color: "grey_scale.whiteFixed" }}
            >
              Comprador
            </Button>
            <Button
              variant={"outline2"}
              padding={"12px 28px 12px 28px"}
              h={"48px"}
              w={"152px"}
              _focus={{ bg: "brand.brand1", color: "grey_scale.whiteFixed" }}
            >
              Anunciante
            </Button>
          </Stack>
          <Inputs
            label={"Senha"}
            placeholder={"Digitar senha"}
            type={"password"}
            register={register}
            errors={errors}
          />
          <Inputs
            label="Confirmar senha"
            placeholder="Digite novamente sua senha"
            type="password"
            register={register}
            errors={errors}
          />
          <Button variant={"brand1"} type={"submit"}>
            Finalizar Cadastro
          </Button>
        </FormControl>
      </CardBody>
      <Footer />
    </Card>
  );
};

export default RegisterPage;

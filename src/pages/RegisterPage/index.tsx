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
import { IUser, IUserReq } from "../../interface";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const [btnBuyer, setBtnBuyer] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(userSchema),
  });

  const registerData = (data: IUser) => {
    const { zipcode, city, street, state, number, complement } = data;

    const address = { zipcode, city, street, state, number, complement };

    Reflect.deleteProperty(data, "zipcode");
    Reflect.deleteProperty(data, "city");
    Reflect.deleteProperty(data, "street");
    Reflect.deleteProperty(data, "state");
    Reflect.deleteProperty(data, "number");
    Reflect.deleteProperty(data, "complement");

    const user: IUserReq = {
      ...data,
      address: address,
    };

    user.buyer = btnBuyer;
    console.log(user);

    // registerUser(user);
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
          as="form"
          display="flex"
          flexDirection={"column"}
          gap={"2rem"}
          width={"98%"}
          maxWidth={"411px"}
          padding={"44px 48px 44px 48px"}
          backgroundColor={"white"}
          height={"max-content"}
          onSubmit={handleSubmit(registerData)}
        >
          <Heading fontSize={"1.5rem"}>Cadastro</Heading>
          <Text variant={"body-2-500"}>Informações pessoais</Text>
          <Inputs
            id={"name"}
            label={"Nome"}
            placeholder={"Ex: Junielson Diniz"}
            type={"text"}
            register={register}
            errors={errors}
          />
          <Inputs
            id={"email"}
            label={"Email"}
            placeholder={"Ex: junielson@kenzie.com.br"}
            type={"email"}
            register={register}
            errors={errors}
          />
          <Inputs
            id={"cpf"}
            label={"CPF"}
            placeholder={"000.000.000-00"}
            type={"number"}
            register={register}
            errors={errors}
          />
          <Inputs
            id={"phone"}
            label={"Celular"}
            placeholder={"(DDD) 90000-0000"}
            type={"number"}
            register={register}
            errors={errors}
          />
          <Inputs
            id={"birthday"}
            label={"Data de nascimento"}
            placeholder={"00/00/00"}
            type={"date"}
            register={register}
            errors={errors}
          />
          <Textareas
            id={"description"}
            label="Descrição"
            placeholder="Digitar descrição"
          />
          <Text variant={"body-2-500"}>Informações de endereço</Text>
          <Inputs
            id={"zipcode"}
            label={"CEP"}
            placeholder={"00000.000"}
            type={"number"}
            register={register}
            errors={errors}
          />
          <Stack direction={"row"}>
            <Inputs
              id={"state"}
              label={"Estado"}
              placeholder={"Digitar estado"}
              type={"text"}
              register={register}
              errors={errors}
            />
            <Inputs
              id={"city"}
              label={"Cidade"}
              placeholder={"Digitar cidade"}
              type={"text"}
              register={register}
              errors={errors}
            />
          </Stack>
          <Inputs
            id={"street"}
            label={"Rua"}
            type={"text"}
            placeholder={"Ex: Rua Zenite"}
            register={register}
            errors={errors}
          />
          <Stack direction={"row"}>
            <Inputs
              id={"number"}
              label={"Número"}
              type={"number"}
              placeholder={"Digitar número"}
              register={register}
              errors={errors}
            />
            <Inputs
              id={"complement"}
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
              variant={btnBuyer ? "brand1" : "outline2"}
              padding={"12px 28px 12px 28px"}
              h={"48px"}
              w={"152px"}
              _focus={{ bg: "brand.brand1", color: "grey_scale.whiteFixed" }}
              onClick={() => setBtnBuyer(true)}
            >
              Comprador
            </Button>
            <Button
              variant={btnBuyer ? "outline2" : "brand1"}
              padding={"12px 28px 12px 28px"}
              h={"48px"}
              w={"152px"}
              _focus={{ bg: "brand.brand1", color: "grey_scale.whiteFixed" }}
              onClick={() => setBtnBuyer(false)}
            >
              Anunciante
            </Button>
          </Stack>
          <Inputs
            id={"password"}
            label={"Senha"}
            placeholder={"Digitar senha"}
            type={"password"}
            register={register}
            errors={errors}
          />
          <Inputs
            id={"confirmPassword"}
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

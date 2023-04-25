import {
  Button,
  Card,
  CardBody,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { IReqLogin } from "../../interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/Login/loginSchema";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Inputs from "../../components/Input";

const Session = () => {
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReqLogin>({ resolver: yupResolver(loginSchema) });

  return (
    <Card height={"100vh"}>
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
          gap={"0.3rem"}
          width={"98%"}
          maxWidth={"500px"}
          borderRadius={"15px"}
          padding={"2rem"}
          backgroundColor={"white"}
          height={"max-content"}
          onSubmit={handleSubmit(login)}
        >
          <Heading fontSize={"1.5rem"}>Login</Heading>
          <Inputs
            id={"email"}
            label={"email"}
            placeholder={"Digite aqui seu email"}
            type={"email"}
            register={register}
            errors={errors}
          ></Inputs>
          <Inputs
            id={"password"}
            label={"senha"}
            placeholder={"Digite aqui sua senha"}
            type={"password"}
            register={register}
            errors={errors}
          ></Inputs>
          <Text
            textAlign={"end"}
            fontSize={"1rem"}
            _hover={{ textDecoration: "none" }}
            cursor={"pointer"}
          >
            Esqueci minha senha
          </Text>
          <Button variant={"brand1"} type="submit">
            Entrar
          </Button>
          <Text textAlign={"center"} fontSize={"1rem"}>
            Ainda não possui conta?
          </Text>
          <Link href="/register" variant={"outline1"}>
            Cadastrar
          </Link>
        </FormControl>
      </CardBody>
      <Footer />
    </Card>
  );
};

export default Session;

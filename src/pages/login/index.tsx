import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
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

const Login = () => {
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
          <FormLabel fontSize={"1rem"}>Usuario</FormLabel>
          <Input
            type="email"
            placeholder="Digite aqui seu email"
            id="email"
            {...register("email")}
          />
          <Text color={"feedback.alert1"}>{errors.email?.message}</Text>
          <FormLabel fontSize={"1rem"}>Senha</FormLabel>
          <Input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <Text color={"feedback.alert1"}>{errors.password?.message}</Text>
          <Link
            textAlign={"end"}
            fontSize={"1rem"}
            _hover={{ textDecoration: "none" }}
          >
            esqueci minha senha
          </Link>
          <Button backgroundColor={"blue"} color={"white"} type="submit">
            Entrar
          </Button>
          <Text textAlign={"center"} fontSize={"1rem"}>
            Ainda não possui conta?
          </Text>
          <Link
            href="/register"
            textAlign={"center"}
            backgroundColor={"white"}
            border={"1px"}
            _hover={{ textDecoration: "none" }}
            borderRadius={"3px"}
            padding={"0.4rem"}
          >
            Cadastrar
          </Link>
        </FormControl>
      </CardBody>
      <Footer />
    </Card>
  );
};

export default Login;

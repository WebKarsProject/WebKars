import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Login = () => {
  return (
    <Card height={"100vh"}>
      <Header />
      <CardBody
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={"gray.50"}
      >
        <FormControl
          display="flex"
          flexDirection={"column"}
          gap={"0.3rem"}
          width={"300px"}
          borderRadius={"15px"}
          padding={"1rem"}
          backgroundColor={"white"}
        >
          <Heading>Login</Heading>
          <FormLabel>Usuario</FormLabel>
          <Input type="email" placeholder="Digitar usuário" />
          <FormLabel>Senha</FormLabel>
          <Input type="password" placeholder="Digitar senha" />
          <Text textAlign={"end"}>esqueci minha senaha</Text>
          <Button backgroundColor={"blue"} color={"white"}>
            Entrar
          </Button>
          <Text textAlign={"center"}>Ainda não possui conta?</Text>
          <Button backgroundColor={"white"} border={"1px"}>
            Cadastrar
          </Button>
        </FormControl>
      </CardBody>
      <Footer />
    </Card>
  );
};

export default Login;

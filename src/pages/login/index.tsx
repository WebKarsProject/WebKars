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
        backgroundColor={"grey_scale.grey8"}
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
        >
          <Heading fontSize={"1.5rem"}>Login</Heading>
          <FormLabel fontSize={"1rem"}>Usuario</FormLabel>
          <Input type="email" placeholder="Digitar usuário" />
          <FormLabel fontSize={"1rem"}>Senha</FormLabel>
          <Input type="password" placeholder="Digitar senha" />
          <Text textAlign={"end"} fontSize={"1rem"}>
            esqueci minha senaha
          </Text>
          <Button backgroundColor={"blue"} color={"white"}>
            Entrar
          </Button>
          <Text textAlign={"center"} fontSize={"1rem"}>
            Ainda não possui conta?
          </Text>
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

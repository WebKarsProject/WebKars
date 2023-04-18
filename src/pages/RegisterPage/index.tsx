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

const RegisterPage = () => {
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
        >
          <Heading fontSize={"1.5rem"}>Cadastro</Heading>
          <Text variant={"body-2-500"}>Informações pessoais</Text>
          <Inputs label="Nome" placeholder="Ex: Junielson Diniz" type="text" />
          <Inputs
            label="Email"
            placeholder="Ex: junielson@kenzie.com.br"
            type="email"
          />
          <Inputs label="CPF" placeholder="000.000.000-00" type="number" />
          <Inputs
            label="Celular"
            placeholder="(DDD) 90000-0000"
            type="number"
          />
          <Inputs
            label="Data de nascimento"
            placeholder="00/00/00"
            type="date"
          />
          <Textareas label="Descrição" placeholder="Digitar descrição" />
          <Text variant={"body-2-500"}>Informações de endereço</Text>
          <Stack direction={"row"}>
            <Inputs label="Estado" placeholder="Digitar estado" type="text" />
            <Inputs label="Cidade" placeholder="Digitar cidade" type="text" />
          </Stack>
          <Inputs label="Rua" placeholder="Ex: Rua Zenite" />
          <Stack direction={"row"}>
            <Inputs label="Número" placeholder="Digitar número" />
            <Inputs label="Complemento" placeholder="Ex: apto 307" />
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
          <Inputs label="Senha" placeholder="Digitar senha" type="password" />
          <Inputs
            label="Confirmar senha"
            placeholder="Digite novamente sua senha"
            type="password"
          />
          <Button variant={"brand1"}>Finalizar Cadastro</Button>
        </FormControl>
      </CardBody>
      <Footer />
    </Card>
  );
};

export default RegisterPage;

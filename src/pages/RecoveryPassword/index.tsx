import { Box, Button, FormControl, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Inputs from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IPassword } from "../../interface";
import { passwordSchema } from "../../schemas/Users";

const RecoveryPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPassword>({
    resolver: yupResolver(passwordSchema),
  });

  const test = (data: any) => console.log(data);

  return (
    <Box height={"100vh"}>
      <Header />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"80%"}
      >
        <FormControl
          as={"form"}
          onSubmit={handleSubmit(test)}
          height={"100%"}
          width={"30%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"1rem"}
        >
          <Text
            variant={"Heading-2-600"}
            color={"brand.brand1"}
            textAlign={"center"}
          >
            Redefinição de senha
          </Text>
          <Inputs
            id={"password"}
            label={""}
            type={"password"}
            placeholder={"informe sua nova senha aqui"}
            register={register}
            errors={errors}
          />
          <Inputs
            id={"confirmPassword"}
            label={""}
            type={"password"}
            placeholder={"confirme sua nova senha aqui"}
            register={register}
            errors={errors}
          />
          <Button type={"submit"} variant={"outline2"}>
            Redefinir
            {/* quando aperta aqui precisa direcionar para o login */}
          </Button>
        </FormControl>
      </Box>
      <Footer />
    </Box>
  );
};
export default RecoveryPassword;

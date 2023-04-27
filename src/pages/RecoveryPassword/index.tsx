import { Box, FormControl, FormLabel } from "@chakra-ui/react";
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
  return (
    <Box height={"100vh"}>
      <Header />
      <FormControl>
        <FormLabel>Reset de senha</FormLabel>
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
          type={"confirmPassword"}
          placeholder={"confirme sua nova senha aqui"}
          register={register}
          errors={errors}
        />
      </FormControl>
      <Footer />
    </Box>
  );
};
export default RecoveryPassword;

import {
  FormLabel,
  Input,
  FormControl,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";

const Inputs = ({ id, label, type, placeholder, register, errors }: any) => {
  return (
    <FormControl isInvalid={errors && errors[id]}>
      <FormLabel fontSize={"14px"} fontWeight={"500"} lineHeight={"17px"}>
        {label}
      </FormLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        _placeholder={{ color: "#868E96" }}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        height={"48px"}
        padding={"0px 16px"}
        gap={"10px"}
        border={"1.5px solid #F1F3F5"}
        borderRadius={"4px"}
        focusBorderColor={"#5126EA"}
        _hover={{ background: "#F1F3F5" }}
        {...register(id)}
      />
      <FormErrorMessage color={"feedback.alert1"}>
        {errors && errors[id] && errors[id].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default Inputs;

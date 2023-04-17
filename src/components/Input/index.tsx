import {
  FormLabel,
  Input,
  FormControl,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";

const Inputs = ({ label, type, placeholder, register, errors }: any) => {
  return (
    <FormControl isInvalid={errors && errors[type]}>
      <FormLabel fontSize={"14px"} fontWeight={"500"} lineHeight={"17px"}>
        {label}
      </FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        height={"48px"}
        padding={"0px 16px"}
        gap={"10px"}
        border={"1.5px solid #F1F3F5"}
        borderRadius={"4px"}
        color={"#868E96"}
        focusBorderColor={"#5126EA"}
        _hover={{ background: "#F1F3F5" }}
        {...register(`${type}`)}
      />
      <FormErrorMessage color={"feedback.alert1"}>
        {errors && errors[type] && errors[type].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default Inputs;

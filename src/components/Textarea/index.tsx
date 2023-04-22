import {
  FormLabel,
  Textarea,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

const Textareas = ({ id, label, placeholder, register, errors }: any) => {
  return (
    <FormControl isInvalid={errors && errors[id]}>
      <FormLabel fontSize={"14px"} fontWeight={"500"} lineHeight={"17px"}>
        {label}
      </FormLabel>
      <Textarea
        id={id}
        placeholder={placeholder}
        _placeholder={{ colo: "grey_scale.grey3" }}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-start"}
        height={"80px"}
        padding={"8px 16px"}
        gap={"10px"}
        border={"1.5px solid #F1F3F5"}
        borderRadius={"4px"}
        color={"grey_scale.grey0"}
        focusBorderColor={"#5126EA"}
        _hover={{ background: "#F1F3F5" }}
        {...register(id)}
        resize={"none"}
      />
      <FormErrorMessage color={"feedback.alert1"}>
        {errors && errors[id] && errors[id].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default Textareas;

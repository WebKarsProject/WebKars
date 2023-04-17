import { FormLabel, Input, Stack } from "@chakra-ui/react";

const Inputs = (props: any) => {
  return (
    <Stack spacing={"0px"}>
      <FormLabel fontSize={"14px"} fontWeight={"500"} lineHeight={"17px"}>
        {props.label}
      </FormLabel>
      <Input
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
        placeholder={props.placeholder}
        type={props.type}
      />
    </Stack>
  );
};

export default Inputs;

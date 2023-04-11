import { FormLabel, Select, Stack } from "@chakra-ui/react";

const Selects = () => {
  return (
    <Stack spacing={"0px"}>
      <FormLabel fontSize={"14px"} fontWeight={"500"} lineHeight={"17px"}>
        Label
      </FormLabel>
      <Select
        placeholder="Placeholder"
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        height={"48px"}
        width={"100%"}
        gap={"10px"}
        border={"1.5px solid #F1F3F5"}
        borderRadius={"4px"}
        color={"#868E96"}
        focusBorderColor={"#5126EA"}
        _hover={{ background: "#F1F3F5" }}
      />
    </Stack>
  );
};

export default Selects;

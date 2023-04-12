import { FormLabel, Textarea, Stack } from "@chakra-ui/react";

const Textareas = () => {
  return (
    <Stack spacing={"0px"}>
      <FormLabel fontSize={"14px"} fontWeight={"500"} lineHeight={"17px"}>
        Label
      </FormLabel>
      <Textarea
        placeholder="Placeholder"
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-start"}
        height={"48px"}
        padding={"8px 16px"}
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

export default Textareas;

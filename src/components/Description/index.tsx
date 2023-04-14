import { Box, Text } from "@chakra-ui/react";

const Description = () => {
  return (
    <Box
      w={["100%", "80%", "100%", "60%"]}
      p={"36px 44px"}
      mt={["20px", "20px", "20px", "-110px"]}
      mb={"16px"}
      bg={"grey_scale.grey10"}
      borderRadius={"4px"}
    >
      <Text variant={"Heading-6-600"} mb={"32px"}>
        Descrição
      </Text>
      <Text variant={"body-1-400"} textAlign={"justify"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </Box>
  );
};

export default Description;

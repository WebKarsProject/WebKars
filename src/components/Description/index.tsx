import { Box, Text } from "@chakra-ui/react";

const Description = () => {
  return (
    <Box m="0 auto" p="36px 44px" maxW="751px" bg="grey_scale.grey_scale10">
      <Text
        fontWeight="600"
        fontSize="20px"
        lineHeight="25px"
        color="grey_scale.grey1"
        mb="32px"
      >
        Descrição
      </Text>
      <Text fontWeight="400" fontSize="16px" lineHeight="28px">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </Box>
  );
};

export default Description;

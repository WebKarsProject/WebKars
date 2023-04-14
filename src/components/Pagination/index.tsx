import { Flex, Text } from "@chakra-ui/react";

const Pagination = () => {
  return (
    <Flex
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
      alignItems={"center"}
    >
      <Flex gap={"5px"} fontWeight={"bold"}>
        <Text color={"#868E96.200"}> 1 </Text>
        <Text color={"#868E96"}> de 2</Text>
      </Flex>
      <Text color={"#5126EA"} fontWeight={"bold"}>
        Seguinte
      </Text>
    </Flex>
  );
};
export default Pagination;

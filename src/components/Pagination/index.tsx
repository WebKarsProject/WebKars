import { Flex, Text } from "@chakra-ui/react";

const Pagination = () => {
  return (
    <Flex
      display={"flex"}
      flexDirection={"row"}
      gap={"30px"}
      alignItems={"center"}
      justifyContent={"center"}
      w={"100%"}
      h={"66px"}
      m={"30px 0"}
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

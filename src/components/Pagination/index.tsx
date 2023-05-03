import { Flex, Text } from "@chakra-ui/react";
import { VehicleContext } from "../../contexts/Vehicle/VehicleContexts";
import { useContext } from "react";

const Pagination = () => {
  const { page, setPage, infoPage } = useContext(VehicleContext);
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
      {page !== 1 ? (
        <Text
          onClick={() => setPage(page - 1)}
          color={"#5126EA"}
          fontWeight={"bold"}
          cursor={"pointer"}
        >
          {`<`} Anterior
        </Text>
      ) : (
        <Text>⠀⠀⠀⠀⠀⠀⠀</Text>
      )}
      <Flex gap={"5px"} fontWeight={"bold"}>
        <Text color={"#868E96.200"}> {page} </Text>
        <Text color={"#868E96"}> de {infoPage.totalPages}</Text>
      </Flex>
      {infoPage.totalPages !== page ? (
        <Text
          onClick={() => setPage(page + 1)}
          color={"#5126EA"}
          fontWeight={"bold"}
          cursor={"pointer"}
        >
          Seguinte {`>`}
        </Text>
      ) : (
        <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      )}
    </Flex>
  );
};
export default Pagination;

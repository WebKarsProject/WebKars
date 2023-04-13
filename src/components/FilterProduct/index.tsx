import { Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";

const FilterProduct = () => {
  return (
    <>
      <Flex
        width={"40%"}
        maxWidth={"400px"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        fontFamily={"Lexend"}
      >
        <Flex display={"flex"} flexDirection={"column"}>
          <Stack>
            <Heading fontWeight={"bold"} fontSize={"28px"}>
              Marca
            </Heading>
          </Stack>
          <Stack padding={"10px"} color={"#868E96"} fontSize={"16px"}>
            <Text>General Motors</Text>
            <Text>Fiat</Text>
            <Text>Ford</Text>
            <Text>Honda</Text>
            <Text>Porsche</Text>
            <Text>Volswagen</Text>
          </Stack>
        </Flex>

        <Flex display={"flex"} flexDirection={"column"}>
          <Stack>
            <Heading fontWeight={"bold"} fontSize={"28px"}>
              {" "}
              Modelo
            </Heading>
          </Stack>
          <Stack padding={"10px"} color={"#868E96"} fontSize={"16px"}>
            <Text>General Motors</Text>
            <Text>Fiat</Text>
            <Text>Ford</Text>
            <Text>Honda</Text>
            <Text>Porsche</Text>
            <Text>Volswagen</Text>
          </Stack>
        </Flex>

        <Flex display={"flex"} flexDirection={"column"}>
          <Stack>
            <Heading fontWeight={"bold"} fontSize={"28px"}>
              {" "}
              Cor
            </Heading>
          </Stack>
          <Stack padding={"10px"} color={"#868E96"} fontSize={"16px"}>
            <Text>General Motors</Text>
            <Text>Fiat</Text>
            <Text>Ford</Text>
            <Text>Honda</Text>
            <Text>Porsche</Text>
            <Text>Volswagen</Text>
          </Stack>
        </Flex>

        <Flex display={"flex"} flexDirection={"column"}>
          <Stack>
            <Heading fontWeight={"bold"} fontSize={"28px"}>
              {" "}
              Ano
            </Heading>
          </Stack>
          <Stack padding={"10px"} color={"#868E96"} fontSize={"16px"}>
            <Text>General Motors</Text>
            <Text>Fiat</Text>
            <Text>Ford</Text>
            <Text>Honda</Text>
            <Text>Porsche</Text>
            <Text>Volswagen</Text>
          </Stack>
        </Flex>

        <Flex display={"flex"} flexDirection={"column"}>
          <Stack>
            <Heading fontWeight={"bold"} fontSize={"28px"}>
              {" "}
              Combustível
            </Heading>
          </Stack>
          <Stack padding={"10px"} color={"#868E96"} fontSize={"16px"}>
            <Text>General Motors</Text>
            <Text>Fiat</Text>
            <Text>Ford</Text>
            <Text>Honda</Text>
            <Text>Porsche</Text>
            <Text>Volswagen</Text>
          </Stack>
        </Flex>

        <Flex display={"flex"} flexDirection={"column"}>
          <Stack>
            <Heading fontWeight={"bold"} fontSize={"28px"}>
              {" "}
              Km
            </Heading>
          </Stack>
          <Flex
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"20px"}
            padding={"20px"}
          >
            <Input bg={"#CED4DA"} placeholder={"Mínimo"} />
            <Input bg={"#CED4DA"} placeholder={"Máximo"} />
          </Flex>
        </Flex>

        <Flex display={"flex"} flexDirection={"column"}>
          <Stack>
            <Heading fontWeight={"bold"} fontSize={"28px"}>
              {" "}
              Preço
            </Heading>
          </Stack>
          <Flex
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"20px"}
            padding={"20px"}
          >
            <Input bg={"#CED4DA"} placeholder={"Mínimo"} />
            <Input bg={"#CED4DA"} placeholder={"Máximo"} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default FilterProduct;

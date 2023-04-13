import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRef } from "react";

const FilterProduct = () => {
  const [isLarger] = useMediaQuery("(min-width: 650px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      {isLarger ? (
        <Flex
          width={"40%"}
          maxWidth={"400px"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          fontFamily={"Lexend"}
          marginLeft={"1.2rem"}
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
              paddingBottom={"17px"}
              paddingTop={"17px"}
            >
              <Input w={"125px"} bg={"#CED4DA"} placeholder={"Mínimo"} />
              <Input w={"125px"} bg={"#CED4DA"} placeholder={"Máximo"} />
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
              paddingBottom={"17px"}
              paddingTop={"17px"}
            >
              <Input w={"125px"} bg={"#CED4DA"} placeholder={"Mínimo"} />
              <Input w={"125px"} bg={"#CED4DA"} placeholder={"Máximo"} />
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Box display={"flex"} flexDirection={"column"}>
          <Flex flexDirection={"column"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              marginBottom={"20px"}
              gap={"10px"}
            >
              <Button
                bg={"#5126EA"}
                border={"1.5px solid #5126EA"}
                borderRadius={"4px"}
                color={"white"}
                onClick={onOpen}
                width={"60%"}
              >
                Filtros
              </Button>
            </Box>
          </Flex>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Filtros</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={8}>
                <FormControl>
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"20px"}
                    padding={"5px"}
                  >
                    Marca
                  </FormLabel>
                  <Stack
                    color={"#868E96"}
                    fontSize={"16px"}
                    marginLeft={"20px"}
                  >
                    <Text>General Motors</Text>
                    <Text>Fiat</Text>
                    <Text>Ford</Text>
                    <Text>Honda</Text>
                    <Text>Porsche</Text>
                    <Text>Volswagen</Text>
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"20px"}
                    padding={"5px"}
                  >
                    Modelo
                  </FormLabel>
                  <Stack
                    color={"#868E96"}
                    fontSize={"16px"}
                    marginLeft={"20px"}
                  >
                    <Text>Civic</Text>
                    <Text>Corolla</Text>
                    <Text>Cruze</Text>
                    <Text>Fit</Text>
                    <Text>Gol</Text>
                    <Text>Ka</Text>
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"20px"}
                    padding={"5px"}
                  >
                    Cor
                  </FormLabel>
                  <Stack
                    color={"#868E96"}
                    fontSize={"16px"}
                    marginLeft={"20px"}
                  >
                    <Text>Azul</Text>
                    <Text>Branco</Text>
                    <Text>Cinza</Text>
                    <Text>Prata</Text>
                    <Text>Preta</Text>
                    <Text>Verde</Text>
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"20px"}
                    padding={"5px"}
                  >
                    Ano
                  </FormLabel>
                  <Stack
                    color={"#868E96"}
                    fontSize={"16px"}
                    marginLeft={"20px"}
                  >
                    <Text>2022</Text>
                    <Text>2021</Text>
                    <Text>2018</Text>
                    <Text>2015</Text>
                    <Text>2013</Text>
                    <Text>2010</Text>
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"20px"}
                    padding={"5px"}
                  >
                    Combustível
                  </FormLabel>
                  <Stack
                    color={"#868E96"}
                    fontSize={"16px"}
                    marginLeft={"20px"}
                  >
                    <Text>Diesel</Text>
                    <Text>Etanol</Text>
                    <Text>Gasolina</Text>
                    <Text>Flex</Text>
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"20px"}
                    padding={"5px"}
                  >
                    Km
                  </FormLabel>
                  <Flex
                    color={"#868E96"}
                    fontSize={"16px"}
                    marginLeft={"20px"}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    gap={"1rem"}
                    paddingBottom={"17px"}
                    paddingTop={"17px"}
                  >
                    <Input bg={"#CED4DA"} placeholder={"Mínimo"} />
                    <Input bg={"#CED4DA"} placeholder={"Máximo"} />
                  </Flex>
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"20px"}
                    padding={"5px"}
                  >
                    Preço
                  </FormLabel>
                  <Flex
                    color={"#868E96"}
                    fontSize={"16px"}
                    marginLeft={"20px"}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    gap={"1rem"}
                    paddingBottom={"17px"}
                    paddingTop={"17px"}
                  >
                    <Input bg={"#CED4DA"} placeholder={"Mínimo"} />
                    <Input bg={"#CED4DA"} placeholder={"Máximo"} />
                  </Flex>
                </FormControl>
              </ModalBody>

              <ModalFooter display={"flex"} justifyContent={"center"}>
                <Button
                  bg={"#5126EA"}
                  border={"1.5px solid #5126EA"}
                  borderRadius={"4px"}
                  onClick={onClose}
                  color={"white"}
                >
                  Ver anúncios
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      )}
    </>
  );
};
export default FilterProduct;

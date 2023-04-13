import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import photo_home from "../../assets/Photo_homepage.png";
import React from "react";
import ProductCard from "../../components/ProductCard";

const Homepage = () => {
  const theme = useTheme();
  const [isLarger] = useMediaQuery("(min-width: 650px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Header />
      {isLarger ? (
        <Box>
          <Box width={"100%"} maxWidth={"none"} height={"450px"}>
            <Flex
              position="relative"
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
            >
              <Flex
                position="relative"
                height="400px"
                width="100%"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={photo_home}
                  alt="Motor Shop"
                  objectFit="cover"
                  width="950px"
                  height="400px"
                ></Image>
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  background={`linear-gradient(180deg, ${transparentize(
                    "white",
                    0.7
                  )(theme)} 0%, ${transparentize("black", 0.8)(theme)} 40%)`}
                  zIndex="1"
                >
                  <Box
                    position="absolute"
                    top={"50%"}
                    left={"50%"}
                    transform={"translate(-50%, -50%)"}
                    color={"white"}
                    textAlign={"center"}
                    zIndex={"2"}
                  >
                    <Heading fontSize={"48px"}>Motor Shop</Heading>
                    <Text fontSize={"25px"}>
                      A melhor plataforma de anúncios de carros do país
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box maxWidth={"none"} display={"flex"} gap={"30px"} padding={"30px"}>
            <Flex width={"100%"}>
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
              <Flex
                height={"100%"}
                width={"70%"}
                maxWidth={"1300px"}
                bg={""}
                flexDirection={"column"}
              >
                {" "}
                <Box
                  height={"80%"}
                  display={"flex"}
                  gap={"1rem"}
                  flexWrap={"wrap"}
                >
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </Box>
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
                    {" "}
                    Seguinte{" "}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      ) : (
        <Box>
          <Flex flexDirection={"column"}>
            <Box width={"100%"} maxWidth={"none"} height={"450px"}>
              <Flex
                position="relative"
                alignItems="center"
                justifyContent="center"
                height="100%"
                width="100%"
              >
                <Flex
                  position="relative"
                  height="400px"
                  width="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={photo_home}
                    alt="Motor Shop"
                    objectFit="cover"
                    width="650px"
                    height="400px"
                  ></Image>
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    background={`linear-gradient(180deg, ${transparentize(
                      "white",
                      0.7
                    )(theme)} 0%, ${transparentize("black", 0.8)(theme)} 30%)`}
                    zIndex="1"
                  >
                    <Box
                      position="absolute"
                      top={"30%"}
                      left={"50%"}
                      transform={"translate(-50%, -50%)"}
                      color={"white"}
                      textAlign={"center"}
                      zIndex={"2"}
                    >
                      <Heading fontSize={"36px"}>Motor Shop</Heading>
                      <Text fontSize={"20px"}>
                        A melhor plataforma de anúncios de carros do país
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </Flex>
            </Box>
            <Box height={"400px"} width={"100%"}>
              {" "}
            </Box>
          </Flex>
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
                    {" "}
                    Seguinte{" "}
                  </Text>
                </Flex>
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
                      gap={"10px"}
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
                      gap={"10px"}
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
        </Box>
      )}
      <Footer />
    </>
  );
};

export default Homepage;

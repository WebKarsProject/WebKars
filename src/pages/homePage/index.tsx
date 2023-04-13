import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Image, useMediaQuery, useTheme } from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import photo_home from "../../assets/Photo_homepage.png";
import ProductCard from "../../components/ProductCard";
import FilterProduct from "../../components/FilterProduct";
import Pagination from "../../components/Pagination";

const Homepage = () => {
  const theme = useTheme();
  const [isLarger] = useMediaQuery("(min-width: 650px)");

  return (
    <>
      <Header />
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
      <Flex w={"100%"} h={"100%"} justifyContent={"center"}>
        {/* Aqui é o filtro do decktop */}
        {isLarger && <FilterProduct />}
        <Flex
          height={"100%"}
          w={"70%"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={"1rem"}
        >
          <Box
            height={"fit-content"}
            display={"flex"}
            gap={"1rem"}
            flexWrap={"wrap"}
            h={"100%"}
          >
            {/* aonde fica os produtos */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Box>
          {!isLarger && <FilterProduct />}
          {/* Paginação */}
          <Pagination />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Homepage;

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useMediaQuery, useTheme, Box, Flex } from "@chakra-ui/react";

import ProductCard from "../../components/ProductCard";
import FilterProduct from "../../components/FilterProduct";
import Pagination from "../../components/Pagination";
import Banner from "../../components/Banner";

const Homepage = () => {
  const theme = useTheme();
  const [isLarger] = useMediaQuery("(min-width: 650px)");

  return (
    <>
      <Header />
      <Box as="main" w="100%" h="100%">
        <Banner />
        <Flex as="section" p="52px 19px 19px 15px" gap="20px">
          {isLarger && <FilterProduct />}
          <Flex flexDir="column" w="100%">
            <Flex
              flexWrap={isLarger ? "wrap" : "nowrap"}
              overflowY={isLarger ? "unset" : "hidden"}
              overflowX={isLarger ? "unset" : "scroll"}
              justifyContent="space-between"
              h="100%"
              gap={isLarger ? "0" : "20px"}
            >
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Flex>
            {!isLarger && <FilterProduct />}

            <Pagination />
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Homepage;

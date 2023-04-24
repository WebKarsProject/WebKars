import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useMediaQuery, useTheme, Box, Flex } from "@chakra-ui/react";

import ProductCard from "../../components/ProductCard";
import FilterProduct from "../../components/FilterProduct";
import Pagination from "../../components/Pagination";
import Banner from "../../components/Banner";
import { useContext } from "react";
import { VehicleContext } from "../../contexts/Vehicle/VehicleContexts";

const Homepage = () => {
  const { adVehicle } = useContext(VehicleContext);
  const [isLarger] = useMediaQuery("(min-width: 650px)");

  return (
    <>
      <Header />
      <Box as={"main"} w={"100%"} h={"100%"}>
        <Banner />
        <Flex as={"section"} p={"52px 15px 19px 15px"} gap={"20px"}>
          {isLarger && <FilterProduct />}
          <Flex flexDir={"column"} w={"100%"}>
            <Flex
              flexWrap={isLarger ? "wrap" : "nowrap"}
              overflowY={isLarger ? "unset" : "hidden"}
              overflowX={isLarger ? "unset" : "scroll"}
              gap={"20px"}
            >
              {adVehicle.length > 0
                ? adVehicle.map((cars) => (
                    <ProductCard key={cars.id} cars={cars} />
                  ))
                : "Não tem nada"}
            </Flex>
            {!isLarger && <FilterProduct />}
          </Flex>
        </Flex>
        <Pagination />
      </Box>
      <Footer />
    </>
  );
};

export default Homepage;

import { Flex, useMediaQuery } from "@chakra-ui/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CreateAd from "../../components/CreateAd";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <Flex
        as={"main"}
        flexDir={"column"}
        alignItems={"center"}
        width={"100vw"}
        minH={"calc(100vh - 80px - 80px - 60px - 30px)"}
        bg={"grey_scale.grey6"}
      >
        <Flex
          as={"section"}
          justifyContent={"center"}
          w={"100%"}
          h={"277px"}
          bg={"brand.brand1"}
        >
          <Flex
            justifyContent={"center"}
            h={"100%"}
            w={"100%"}
            maxW={"1600px"}
            m={{ base: "0px 25px 0px 10px", sm: "0px 30px" }}
          >
            <CreateAd />
          </Flex>
        </Flex>
        <Flex
          as={"section"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          h={"100%"}
          maxWidth={"1600px"}
          gap={"30px"}
          m={{ base: "0px 25px 0px 10px", sm: "0px 30px" }}
          p={"280px 0px 20px 0px"}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Flex>
      </Flex>
      <Pagination />
      <Footer />
    </>
  );
};

export default ProfilePage;

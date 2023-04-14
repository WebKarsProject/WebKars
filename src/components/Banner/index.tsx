import { Flex, Text, Image } from "@chakra-ui/react";
import photo_home from "../../assets/Photo_homepage.png";

const Banner = () => {
  return (
    <Flex
      as={"section"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      width={"100%"}
      height={"450px"}
    >
      <Image
        src={photo_home}
        h={"100%"}
        alt={"Motor Shop"}
        objectFit={"cover"}
      />
      <Flex
        w={"100%"}
        h={"450px"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        bgGradient={"linear(to bottom, #00000029 0%, #000000 100%)"}
        position={"absolute"}
        p={"0 30px"}
      >
        <Text
          variant={"Heading-2-600"}
          color={"grey_scale.grey10"}
          textAlign={"center"}
        >
          Motor Shop
        </Text>
        <Text
          variant={"Heading-2-600"}
          color={"grey_scale.grey10"}
          textAlign={"center"}
        >
          A melhor plataforma de anúncios de carros do país
        </Text>
      </Flex>
    </Flex>
  );
};

export default Banner;

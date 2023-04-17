import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { IModalCreateAd } from "../../interface";

const CreateAd = ({ onOpen }: IModalCreateAd) => {
  return (
    <Flex
      w={"100%"}
      h={"406px"}
      maxW={"1240px"}
      top={"75px"}
      m={{ base: "0px 0px", sm: "0px 30px", md: "0px 60px", lg: "0px 100px" }}
      position={"relative"}
      bg={"grey_scale.grey10"}
      zIndex={"10px"}
      borderRadius={"8px"}
      p={{ base: "40px 29px", md: "44px 70px 42px 41px" }}
    >
      <Flex w={"100%"} h={"100%"} flexDir={"column"}>
        <Avatar size={"lg"} name={"S L"} />
        <Flex w={"100%"} alignItems={"center"} p={"24px 0px"} gap={"9px"}>
          <Text variant={"Heading-6-600"}>Samuel Leão</Text>
          <Text
            variant={"body-2-500"}
            color={"brand.brand1"}
            p={"4px 8px"}
            bg={"brand.brand4"}
            textAlign={"center"}
            borderRadius={"4px"}
          >
            Anunciante
          </Text>
        </Flex>
        <Text variant={"body-1-400"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>

        <Button
          w={"160px"}
          p={"12px 28px"}
          variant={"outline_brand"}
          mt={{ base: "16px", sm: "36px" }}
          onClick={onOpen}
        >
          Criar anuncio
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateAd;

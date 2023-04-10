import { Button, Card, CardFooter, Image, Text } from "@chakra-ui/react";
import motorsShop from "../../assets/Motors shop (1).png";
import { SlArrowUp } from "react-icons/sl";

const Footer = () => {
  return (
    <Card width={"100vw"} backgroundColor={"black"}>
      <CardFooter
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image src={motorsShop} alt="logo" width={"100px"} height={"30px"} />
        <Text fontSize="sm" noOfLines={1} color="grey">
          © 2023 - Todos os direitos reservados.
        </Text>
        <Button backgroundColor={"grey"}>
          <SlArrowUp />
        </Button>
      </CardFooter>
    </Card>
  );
};
export default Footer;

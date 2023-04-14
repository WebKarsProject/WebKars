import {
  Button,
  Card,
  CardFooter,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import motorsShop from "../../assets/Motors shop (1).png";
import { SlArrowUp } from "react-icons/sl";

const Footer = () => {
  const [isLarger] = useMediaQuery("(max-width: 500px)");
  return (
    <Card
      as={"footer"}
      width={"100%"}
      backgroundColor={"black"}
      borderRadius={"0"}
    >
      <CardFooter
        display={"flex"}
        flexDirection={isLarger ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"0.5rem"}
      >
        <Image src={motorsShop} alt={"logo"} />
        <Text
          fontSize={"sm"}
          noOfLines={1}
          variant={"body-2-400"}
          color={"grey"}
        >
          © 2023 - Todos os direitos reservados.
        </Text>
        <Button as={"a"} href={`#/`} backgroundColor={"gray.400"}>
          <SlArrowUp />
        </Button>
      </CardFooter>
    </Card>
  );
};
export default Footer;

import {
  Avatar,
  Box,
  Button,
  Text,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import BtnComments from "./BtnComments";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext } from "react";

const AddComments = () => {
  const { token } = useContext(AuthContext);
  const [isLarger] = useMediaQuery("(min-width: 500px)");

  return (
    <Box
      w={["100%", "80%", "100%", "60%"]}
      m={"0"}
      p={"36px 44px"}
      bg={"grey_scale.grey10"}
      borderRadius={"4px"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"8px"} mb={"15px"}>
        <Avatar size={"sm"} name={"J L"} bg={"random_profile.random4"} />
        <Text variant={"body-2-500"}>Júlia Lima</Text>
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        mb={isLarger ? "15px" : "24px"}
        position={isLarger ? "relative" : "unset"}
      >
        <Textarea
          maxW={"100%"}
          maxH={"128px"}
          p={isLarger ? "33px 130px 33px 28px" : "33px 28px"}
          mb={isLarger ? "0" : "24px"}
          fontSize={"16px"}
          fontWeight={"400"}
          textAlign={"justify"}
          borderRadius={"4px"}
          color={"grey_scale.grey2"}
          border={"1.5px solid #E9ECEF"}
          variant={"unstyled"}
          _hover={{ border: "1.5px solid #5126EA" }}
          placeholder={
            "Carro muito confortável, foi uma ótima experiência de compra..."
          }
          _placeholder={{ color: "grey_scale.grey3", textAlign: "left" }}
          resize={"none"}
        />
        <Button
          disabled
          variant={token === null ? "disable" : "brand1"}
          zIndex={"999"}
          position={isLarger ? "absolute" : "unset"}
          bottom={isLarger ? "13px" : "0px"}
          right={isLarger ? "25px" : "0px"}
          cursor={token === null ? "no-drop" : "pointer"}
        >
          Comentar
        </Button>
      </Box>
      <Box display={"flex"} gap={"8px"} flexWrap={"wrap"}>
        <BtnComments text={"Gostei muito!"} isLarger={isLarger} />
        <BtnComments text={"Incrível"} isLarger={isLarger} />
        <BtnComments
          text={"Recomendarei para meus amigos!"}
          isLarger={isLarger}
        />
      </Box>
    </Box>
  );
};

export default AddComments;

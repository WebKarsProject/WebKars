import {
  Avatar,
  AvatarBadge,
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import ford from "../../assets/ford.png";

const ProductCard = () => {
  return (
    <Card
      minW={"300px"}
      maxW={"300px"}
      maxH={"410px"}
      padding={"1.5px"}
      role={"group"}
    >
      <CardBody
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        paddingBottom={0}
      >
        <Box
          bg={"grey_scale.grey7"}
          position={"relative"}
          borderRadius={"5px"}
          border={"2px solid #00000000"}
          _groupHover={{ border: "2px solid #4529E6" }}
        >
          <Tag
            position={"absolute"}
            color={"grey_scale.whiteFixed"}
            bg={"brand.brand1"}
            top={"0"}
            left={"0"}
            display={"none"}
          >
            Ativo
          </Tag>
          <Tag
            position={"absolute"}
            bg={"grey_scale.grey4"}
            color={"grey_scale.whiteFixed"}
            top={"0"}
            left={"0"}
            display={"flex"}
          >
            Inativo
          </Tag>
          <Tag
            bg={"random_profile.random7"}
            color={"grey_scale.whiteFixed"}
            position={"absolute"}
            top={"0"}
            right={"0"}
            display={"flex"}
          >
            $
          </Tag>
          <Image
            alignItems={"center"}
            w={"260px"}
            src={ford}
            alt={"Green double couch with wooden legs"}
            borderRadius={"lg"}
          />
        </Box>
        <Stack mt={"4"} spacing={"3"}>
          <Text variant={"Heading-7-600"}>Ford Ka</Text>
          <Text variant={"body-2-400"} noOfLines={3}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Stack mt={"5"} direction={"row"} alignItems={"center"}>
            <Avatar
              size={"sm"}
              name="anuciante"
              src="https://bit.ly/tioluwani-kolawole"
            >
              <AvatarBadge bg={"tomato"} />
            </Avatar>
            <Text variant={"body-2-500"}>Anunciante</Text>
          </Stack>
        </Stack>
      </CardBody>
      <CardFooter display={"flex"} justifyContent={"space-between"}>
        <HStack spacing="12px">
          <Tag bg={"brand.brand4"} color={"brand.brand1"} padding={"0.3rem"}>
            O Km
          </Tag>
          <Tag bg={"brand.brand4"} color={"brand.brand1"} padding={"0.3rem"}>
            2023
          </Tag>
        </HStack>
        <Text variant={"Heading-7-500"}>R$100000000</Text>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

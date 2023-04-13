import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import ford from "../../assets/ford.png";

const ProductCard = () => {
  return (
    <Card maxW="300px" maxH={"410px"}>
      <CardBody
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        paddingBottom={0}
      >
        <Box bg={"grey_scale.grey7"}>
          <Tag
            position={"absolute"}
            color={"grey_scale.whiteFixed"}
            bg={"brand.brand1"}
            top={"30px"}
            left={"30px"}
            display={"none"}
          >
            Ativo
          </Tag>
          <Tag
            position={"absolute"}
            bg={"grey_scale.grey4"}
            color={"grey_scale.whiteFixed"}
            top={"30px"}
            left={"30px"}
            display={"flex"}
          >
            Inativo
          </Tag>
          <Tag
            bg={"random_profile.random7"}
            color={"grey_scale.whiteFixed"}
            position={"absolute"}
            top={"20px"}
            right={"20px"}
            display={"flex"}
          >
            $
          </Tag>
          <Image
            alignItems={"center"}
            w={"260px"}
            src={ford}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Box>
        <Stack mt="4" spacing="3">
          <Heading size="1rem">Ford Ka</Heading>
          <Text size="0.5rem" noOfLines={3}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Stack mt="5" direction="row" alignItems={"center"}>
            <Avatar name="anuciante" src="https://bit.ly/tioluwani-kolawole">
              <AvatarBadge bg={"tomato"} />
            </Avatar>
            <Heading size="1rem">Anunciante</Heading>
          </Stack>
        </Stack>
      </CardBody>
      <CardFooter display={"flex"} justifyContent={"space-between"}>
        <HStack spacing="24px">
          <Text>O Km</Text>
          <Text>2023</Text>
        </HStack>
        <Text>R$100000000</Text>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

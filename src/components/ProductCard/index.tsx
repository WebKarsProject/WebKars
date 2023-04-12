import {
  Avatar,
  AvatarBadge,
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

const ProductCard = () => {
  return (
    <Card maxW="300px">
      <CardBody
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        paddingBottom={0}
      >
        <Tag position={"absolute"} top={"30px"} left={"30px"} display={"none"}>
          Ativo
        </Tag>
        <Tag position={"absolute"} top={"30px"} left={"30px"} display={"none"}>
          Inativo
        </Tag>
        <Tag
          bg={"random_profile.random7"}
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
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="4" spacing="3">
          <Heading size="1rem">Living room Sofa</Heading>
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

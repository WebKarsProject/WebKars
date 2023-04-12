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
    <Card maxW="sm">
      <CardBody>
        <Tag position={"absolute"} top={"30px"} left={"30px"} display={"none"}>
          Ativo
        </Tag>
        <Tag position={"absolute"} top={"30px"} left={"30px"} display={"none"}>
          Inativo
        </Tag>
        <Tag position={"absolute"} top={"20px"} right={"20px"} display={"none"}>
          $
        </Tag>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Stack direction="row">
            <Avatar name="anuciante" src="https://bit.ly/tioluwani-kolawole">
              <AvatarBadge bg={"tomato"} />
            </Avatar>
            <Heading>Anunciante</Heading>
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

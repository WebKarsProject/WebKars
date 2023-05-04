import { Alert, AlertIcon, Text } from "@chakra-ui/react";

const NoAdFound = () => {
  return (
    <>
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        h="300px"
        backgroundColor={"transparent"}
        gap={"1rem"}
      >
        <AlertIcon boxSize="40px" mr={0} />
        <Text variant={"Heading-1-700"}>Nenhum anúncio encontrado</Text>
        <Text variant={"Heading-6-500"}>
          Parece que não há nenhum anúncio no momento :/
        </Text>
      </Alert>
    </>
  );
};
export default NoAdFound;

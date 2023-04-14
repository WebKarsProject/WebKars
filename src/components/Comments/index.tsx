import { Text, UnorderedList } from "@chakra-ui/react";
import CardLi from "./Cards";

const Comments = () => {
  return (
    <UnorderedList
      display={"flex"}
      borderRadius={"4px"}
      flexDirection={"column"}
      m={0}
      w={["100%", "80%", "100%", "60%"]}
      mb={"33px"}
      p={"36px 44px"}
      bg={"grey_scale.grey10"}
    >
      <Text variant={"Heading-6-600"} mb={"24px"}>
        Comentários
      </Text>
      <CardLi />
      <CardLi />
    </UnorderedList>
  );
};

export default Comments;

import { Avatar, Box, Icon, ListItem, Text } from "@chakra-ui/react";

const CardLi = () => {
  return (
    <ListItem
      listStyleType={"none"}
      display={"flex"}
      flexDirection={"column"}
      gap={"8px"}
      mb={"44px"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"8px"}>
        <Avatar size={"sm"} name={"J L"} />
        <Text variant={"body-2-500"}>Júlia Lima</Text>
        <Icon viewBox={"0 0 500 120"} color={"grey_scale.grey3"}>
          <path
            fill={"currentColor"}
            d={"M 100, 100 m 30, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"}
          />
        </Icon>
        <Text variant={"body-2-400"} fontSize={"12px"}>
          há 3 dias
        </Text>
      </Box>
      <Text variant={"body-2-400"} textAlign={"justify"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </ListItem>
  );
};

export default CardLi;

import { Avatar, Stack, Text } from "@chakra-ui/react";

interface IName {
  name: string;
}

const AvatarCard = ({ name }: IName) => {
  return (
    <Stack mt={"5"} direction={"row"} alignItems={"center"}>
      <Avatar size={"sm"} name={name} />
      <Text variant={"body-2-500"}>{name}</Text>
    </Stack>
  );
};
export default AvatarCard;

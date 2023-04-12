import { Avatar, Box, Icon, ListItem, Text } from '@chakra-ui/react';

const CardLi = () => {
  return (
    <ListItem
      listStyleType="none"
      display="flex"
      flexDirection="column"
      gap="8px"
      mb="44px"
    >
      <Box display="flex" alignItems="center" gap="8px">
        <Avatar name="J L" />
        <Text
          fontWeight="500"
          fontSize="14px"
          lineHeight="24px"
          color="grey_scale.grey1"
        >
          Júlia Lima
        </Text>
        <Icon viewBox="0 0 300 200" color="grey_scale.grey3">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Text
          fontWeight="400"
          fontSize="12px"
          lineHeight="24px"
          color="grey_scale.grey3"
        >
          há 3 dias
        </Text>
      </Box>
      <Text fontWeight="400" fontSize="14px" lineHeight="24px">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </ListItem>
  );
};

export default CardLi;

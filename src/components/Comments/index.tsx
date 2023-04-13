import { Text, UnorderedList } from '@chakra-ui/react';
import CardLi from './Cards';
import AddComments from '../AddComments';

const Comments = () => {
  return (
    <UnorderedList
      display="flex"
      flexDirection="column"
      maxW="751px"
      m="0 auto"
      mb="33px"
      p="36px 44px"
    >
      <Text color="grey_scale.grey1" mb="24px">
        Comentários
      </Text>
      <CardLi />
      <CardLi />
    </UnorderedList>
  );
};

export default Comments;

import { Text, UnorderedList } from '@chakra-ui/react'
import CardLi from './Cards'
import AddComments from '../AddComments'

const Comments = () => {
  return (
    <UnorderedList display="flex" borderRadius={'4px'} flexDirection="column" m={0} w={'60%'} mb="33px" p="36px 44px" bg="grey_scale.grey10">
      <Text color="grey_scale.grey1" mb="24px">
        Comentários
      </Text>
      <CardLi />
      <CardLi />
    </UnorderedList>
  )
}

export default Comments

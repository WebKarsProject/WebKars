import {
  Avatar,
  Box,
  Button,
  Text,
  Textarea,
  useMediaQuery,
} from '@chakra-ui/react';
import BtnComments from './BtnComments';

const AddComments = () => {
  const [isLarger] = useMediaQuery('(min-width: 500px)');

  return (
    <Box maxW="751px" m="0 auto" p="36px 44px">
      <Box display="flex" alignItems="center" gap="8px" mb="15px">
        <Avatar name="J L" bg="random_profile.random4" />
        <Text fontWeight="500" fontSize="14px" lineHeight="24px">
          Júlia Lima
        </Text>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        mb={isLarger ? '15px' : '24px'}
        position={isLarger ? 'relative' : 'unset'}
      >
        <Textarea
          maxW="672px"
          maxH="128px"
          p="33px 28px"
          color="grey_scale.grey2"
          fontWeight="400"
          fontSize="16px"
          border="1.5px solid #E9ECEF"
          borderRadius="4px"
          variant="unstyled"
          mb={isLarger ? '0' : '24px'}
          _hover={{ border: '1.5px solid #5126EA' }}
          placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
        />
        <Button
          zIndex="999"
          position={isLarger ? 'absolute' : 'unset'}
          bottom={isLarger ? '13px' : '0px'}
          right={isLarger ? '22px' : '0px'}
          w="108px"
          bg="brand.brand1"
          color="grey_scale.whiteFixed"
          fontWeight="600"
          fontSize="14px"
          border="1.5px solid #4529E6"
          borderRadius="4px"
        >
          Comentar
        </Button>
      </Box>
      <Box display="flex" gap="8px" flexWrap="wrap">
        <BtnComments text={'Gostei muito!'} isLarger={isLarger} />
        <BtnComments text={'Incrível'} isLarger={isLarger} />
        <BtnComments
          text={'Recomendarei para meus amigos!'}
          isLarger={isLarger}
        />
      </Box>
    </Box>
  );
};

export default AddComments;

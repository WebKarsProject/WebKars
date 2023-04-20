import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ cars }: any) => {
  const navigate = useNavigate();

  return (
    <Card
      minW={'300px'}
      maxW={'300px'}
      maxH={'410px'}
      padding={'1.5px'}
      role={'group'}
      cursor={'pointer'}
      onClick={() => navigate(`/product/${cars.id}`, { replace: true })}
    >
      <CardBody
        alignItems={'center'}
        display={'flex'}
        flexDirection={'column'}
        paddingBottom={0}
      >
        <Box
          bg={'grey_scale.grey7'}
          position={'relative'}
          borderRadius={'5px'}
          border={'2px solid #00000000'}
          _groupHover={{ border: '2px solid #4529E6' }}
        >
          <Tag
            position={'absolute'}
            color={'grey_scale.whiteFixed'}
            bg={cars?.published ? 'brand.brand1' : 'grey_scale.grey4'}
            top={'0'}
            left={'0'}
            display={'none'}
          >
            {cars?.published ? 'Ativo' : 'Inativo'}
          </Tag>
          <Tag
            bg={'random_profile.random7'}
            color={'grey_scale.whiteFixed'}
            position={'absolute'}
            top={'0'}
            right={'0'}
            display={'flex'}
          >
            $
          </Tag>
          <Image
            alignItems={'center'}
            w={'260px'}
            h={'152px'}
            objectFit={'contain'}
            src={cars?.images[0]['img_url']}
            alt={'Green double couch with wooden legs'}
            borderRadius={'lg'}
          />
        </Box>
        <Stack
          mt={'4'}
          spacing={'3'}
        >
          <Text variant={'Heading-7-600'}>{cars?.model}</Text>
          <Text
            variant={'body-2-400'}
            noOfLines={3}
          >
            {cars?.description}
          </Text>
          <Stack
            mt={'5'}
            direction={'row'}
            alignItems={'center'}
          >
            <Avatar
              size={'sm'}
              src="https://bit.ly/tioluwani-kolawole"
              name={cars?.user.name}
            ></Avatar>
            <Text variant={'body-2-500'}>{cars?.user.name}</Text>
          </Stack>
        </Stack>
      </CardBody>
      <CardFooter
        display={'flex'}
        justifyContent={'space-between'}
      >
        <HStack spacing="12px">
          <Tag
            bg={'brand.brand4'}
            color={'brand.brand1'}
            padding={'0.3rem'}
          >
            {cars?.mileage} Km
          </Tag>
          <Tag
            bg={'brand.brand4'}
            color={'brand.brand1'}
            padding={'0.3rem'}
          >
            {cars?.year}
          </Tag>
        </HStack>
        <Text variant={'Heading-7-500'}> R$ {cars?.price},00 </Text>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

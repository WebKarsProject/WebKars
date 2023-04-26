import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import { IModalCreateAd } from '../../interface';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useParams } from 'react-router-dom';
import { Instance } from '../../services/axios';
import ProductCard from '../ProductCard';

const CreateAd = ({ onOpen }: IModalCreateAd) => {
  const { user } = useContext(AuthContext);
  const [dataUser, setDataUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  const userVerify = () => {
    return dataUser.id === user.id;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Instance.get<any>(`/users/${id}`);
        setDataUser(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (!dataUser) {
    return <p></p>;
  }

  return (
    <Flex>
      <Flex
        w={'60vw'}
        h={'406px'}
        maxW={'1240px'}
        top={'75px'}
        m={{ base: '0px 0px', sm: '0px 30px', md: '0px 60px', lg: '0px 100px' }}
        position={'relative'}
        bg={'grey_scale.grey10'}
        zIndex={'10px'}
        borderRadius={'8px'}
        p={{ base: '20px 29px', sm: '44px 29px', md: '44px 70px 42px 41px' }}
      >
        <Flex
          w={'100%'}
          h={'100%'}
          flexDir={'column'}
        >
          <Avatar
            size={'lg'}
            name={dataUser.name}
          />
          <Flex
            w={'100%'}
            alignItems={'center'}
            p={'24px 0px'}
            gap={'9px'}
          >
            <Text variant={'Heading-6-600'}>{dataUser.name}</Text>
            <Text
              variant={'body-2-500'}
              color={'brand.brand1'}
              p={'4px 8px'}
              bg={'brand.brand4'}
              textAlign={'center'}
              borderRadius={'4px'}
            >
              {dataUser.buyer ? 'Comprador' : 'Anunciante'}
            </Text>
          </Flex>
          <Text variant={'body-1-400'}></Text>
          {dataUser.description ? '' : 'Nada informado'}
          {!dataUser.buyer && userVerify() && (
            <Button
              w={'160px'}
              p={'12px 28px'}
              variant={'outline_brand'}
              mt={{ base: '16px', sm: '36px' }}
              onClick={onOpen}
            >
              Criar anuncio
            </Button>
          )}
        </Flex>
        {/* <Box
          as={'section'}
          h={'100%'}
          w={{ base: '100%', md: 'unset' }}
          maxWidth={'1392px'}
          p={{
            base: '280px 25px 20px 10px',
            sm: '280px 25px 20px 10px',
            md: '280px 0px 20px 0px',
          }}
          m={'0px 30px'}
        >
          <Flex
            flexWrap={{ base: 'unset', md: 'wrap' }}
            justify={'space-between'}
            h={'100%'}
            w={'100%'}
            gap={{ base: '38px', md: '64px' }}
            pb={{ base: '10px', md: '0px' }}
            overflowY={{ base: 'hidden', md: 'unset' }}
            overflowX={{ base: 'scroll', md: 'unset' }}
          >
            {dataUser.vehicle
              ? dataUser.vehicle.map((cars: { id: any }) => (
                  <ProductCard
                    key={cars.id}
                    cars={cars}
                  />
                ))
              : 'Usuário ainda não possuí anuncios'}
          </Flex>
        </Box> */}
      </Flex>
    </Flex>
  );
};

export default CreateAd;

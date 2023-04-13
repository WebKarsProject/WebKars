import { Avatar, Box, Button, Container, Image, Tag, Text } from '@chakra-ui/react'
import Header from '../../components/Header'
import car from '../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png'
import ImageCar from '../../components/ImageCar'

const ProductPage = () => {
  return (
    <Box height={'100vh'} bg={'grey_scale.grey8'}>
      <Header />
      <Box bg="brand.brand1" w="full" h="544px" pos="absolute" />
      <Container pos={'relative'} maxWidth={'container.xl'}>
        <Box display={'flex'} flexWrap={'wrap'} marginTop={'40px'} columnGap="40px">
          <Box w={'60%'} display={'flex'} borderRadius={'4px'} justifyContent={'center'} padding={'40px'} bg="grey_scale.grey10">
            <Image src={car} />
          </Box>
          <Box p={'40px'} display={'flex'} flexDirection={'column'} flexWrap={'wrap'} w="35%" bg="grey_scale.grey10" borderRadius={'4px'}>
            <Text fontSize={'1.2rem'} fontWeight={'600'} mb={'30px'}>
              Fotos
            </Text>
            <Box justifyContent={'center'} display={'flex'} flexWrap={'wrap'} gap={'30px'}>
              <ImageCar />
            </Box>
          </Box>
          <Box w={'60%'} h={'max-content'} display={'flex'} flexDirection={'column'} borderRadius={'4px'} justifyContent={'center'} padding={'40px'} marginTop={'40px'} bg="grey_scale.grey10">
            <Text fontWeight={600}>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </Text>
            <Box marginTop={'40px'} marginBottom={'20px'} display={'flex'} justifyContent={'space-between'}>
              <Box display={'flex'} gap={'12px'}>
                <Tag bg={'brand.brand4'} color={'brand.brand1'}>
                  2013
                </Tag>
                <Tag bg={'brand.brand4'} color={'brand.brand1'}>
                  0 KM
                </Tag>
              </Box>
              <Text fontWeight={'bold'}>R$ 00.000,00</Text>
            </Box>
            <Button w={'32'} variant={'brand1'}>
              Comprar
            </Button>
          </Box>
          <Box gap={'32px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} p={'40px'} mt={'34px'} w="35%" bg="grey_scale.grey10" borderRadius={'4px'}>
            <Avatar size={'lg'} name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
            <Text fontSize={'20px'} fontWeight={'bold'}>
              Samuel Leão
            </Text>
            <Text textAlign={'center'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Text>
            <Button variant={'grey1'}>Ver todos anuncios</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ProductPage

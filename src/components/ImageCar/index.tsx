import { Box, Image } from '@chakra-ui/react'
import car from '../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png'

const ImageCar = () => {
  return (
    <Box display={'flex'} borderRadius={'4px'} justifyContent={'center'} alignItems={'center'} bg="grey_scale.grey7" boxSize={'24'}>
      <Image src={car} />
    </Box>
  )
}

export default ImageCar

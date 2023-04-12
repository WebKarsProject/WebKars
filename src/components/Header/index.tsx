import { useLocation } from 'react-router-dom'
import motorsShop from '../../assets/Motors shop.png'
import { Box, Card, CardHeader, Flex, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from '@chakra-ui/react'
import { ImMenu } from 'react-icons/im'

const Header = () => {
  const [isLarger] = useMediaQuery('(max-width: 500px)')
  let location = useLocation()
  return (
    <Card width={'100vw'}>
      <CardHeader display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} height={'80px'}>
        <Image src={motorsShop} alt="logo" />
        {isLarger ? (
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<ImMenu />} variant="outline" />
            <MenuList>
              <MenuItem>
                <Link color={'brand.brand1'} href="/" _hover={{ textDecoration: 'none' }}>
                  Fazer Login
                </Link>
              </MenuItem>
              <MenuItem>
                <Link _hover={{ textDecoration: 'none' }} href="/register">
                  Cadastrar
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Box display={'flex'} flexDirection={'row'} gap={'1rem'} alignItems={'center'} borderLeft={'1px'} borderColor={'grey_scale.grey6'} padding={'1rem'}>
            <Link variant={'link'} color={'brand.brand1'} href="/">
              Fazer Login
            </Link>
            <Link variant={'outline1'} _hover={{ textDecoration: 'none' }} href="/register">
              Cadastrar
            </Link>
          </Box>
        )}
      </CardHeader>
    </Card>
  )
}
export default Header

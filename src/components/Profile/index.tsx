import {
  Avatar,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Link,
  useMediaQuery,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import ModalUserUpdate from '../ModalUpdateUser';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [isLarger] = useMediaQuery('(max-width: 500px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    localStorage.removeItem('@WebKars:token');
    navigate('/');
  };

  return (
    <Menu>
      {isOpen && (
        <ModalUserUpdate
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      )}
      <MenuButton
        as={IconButton}
        aria-label={'Options'}
        icon={
          <Stack
            direction={'row'}
            alignItems={'center'}
            margin={0}
            justifyContent={'space-between'}
          >
            <Avatar
              name={`${user.name}`}
              src={'https://bit.ly/tioluwani-kolawole'}
            ></Avatar>
            {!isLarger && <Text variant={'body-1-400'}>{user.name}</Text>}
          </Stack>
        }
        display={'flex'}
        alignItems={'center'}
        background={'none'}
        _hover={{ background: 'none' }}
        _focus={{ background: 'none' }}
        _active={{ background: 'none' }}
        border={'none'}
      />
      <MenuList>
        <MenuItem>
          <Link
            onClick={openModal}
            _hover={{ textDecoration: 'none', background: 'none' }}
            bg="none"
            w={'100%'}
          >
            <ModalUserUpdate
              isOpen={isModalOpen}
              onOpen={openModal}
              onClose={closeModal}
            />
            Editar Perfil
          </Link>
        </MenuItem>
        <MenuItem>
          <Link _hover={{ textDecoration: 'none', background: 'none' }}>
            Editar Endereço
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            onClick={() => navigate(`/profile/${user.id}`)}
            _hover={{ textDecoration: 'none' }}
          >
            Meus anuncios
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            onClick={handleClick}
            w={'100%'}
            _hover={{ textDecoration: 'none', background: 'none' }}
          >
            Sair
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default Profile;

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
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import ModalUserUpdate from "../ModalUpdateUser";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [isLarger] = useMediaQuery("(max-width: 500px)");
  let location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Menu>
      {isOpen && (
        <ModalUserUpdate isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      )}
      <MenuButton
        as={IconButton}
        aria-label={"Options"}
        icon={
          <Stack
            direction={"row"}
            alignItems={"center"}
            margin={0}
            justifyContent={"space-between"}
          >
            <Avatar
              name={`${user.name}`}
              src={"https://bit.ly/tioluwani-kolawole"}
            ></Avatar>
            {!isLarger && <Text variant={"body-1-400"}>{user.name}</Text>}
          </Stack>
        }
        display={"flex"}
        alignItems={"center"}
        background={"none"}
        _hover={{ background: "none" }}
        _focus={{ background: "none" }}
        _active={{ background: "none" }}
        border={"none"}
      />
      <MenuList>
        <MenuItem>
          <Button
            onClick={openModal}
            _hover={{ textDecoration: "none", background: "none" }}
            bg="none"
          >
            <ModalUserUpdate
              isOpen={isModalOpen}
              onOpen={openModal}
              onClose={closeModal}
            />
            Editar Perfil
          </Button>
        </MenuItem>
        <MenuItem>
          <Link _hover={{ textDecoration: "none", background: "none" }}>
            Editar Endereço
          </Link>
        </MenuItem>
        <MenuItem>
          <Link _hover={{ textDecoration: "none" }}>Meus anuncios</Link>
        </MenuItem>
        <MenuItem>
          <Link _hover={{ textDecoration: "none", background: "none" }}>
            Sair
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default Profile;

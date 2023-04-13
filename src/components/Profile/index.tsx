import {
  Avatar,
  AvatarBadge,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Link,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  let location = useLocation();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={
          <Stack mt="5" direction="row" alignItems={"center"}>
            <Avatar name="anuciante" src="https://bit.ly/tioluwani-kolawole">
              <AvatarBadge bg={"tomato"} />
            </Avatar>
            <Heading size="1rem">Anunciante</Heading>
          </Stack>
        }
        variant="outline"
      />
      <MenuList>
        <MenuItem>
          <Link>Editar Perfil</Link>
        </MenuItem>
        <MenuItem>
          <Link>Editar Endereço</Link>
        </MenuItem>
        <MenuItem>
          <Link>Meus anuncios</Link>
        </MenuItem>
        <MenuItem>
          <Link>Sair</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default Profile;

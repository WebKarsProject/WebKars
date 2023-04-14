import {
  Avatar,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { transparentize } from "@chakra-ui/theme-tools";

const Profile = () => {
  const [isLarger] = useMediaQuery("(max-width: 500px)");
  let location = useLocation();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={
          <Stack
            direction="row"
            alignItems={"center"}
            margin={0}
            justifyContent={"space-between"}
          >
            <Avatar
              name="anuciante"
              src="https://bit.ly/tioluwani-kolawole"
            ></Avatar>
            {!isLarger && <Heading size="1rem">Anunciante</Heading>}
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
          <Link _hover={{ textDecoration: "none", background: "none" }}>
            Editar Perfil
          </Link>
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

import { useLocation } from "react-router-dom";
import motorsShop from "../../assets/Motors shop.png";
import {
  Box,
  Card,
  CardHeader,
  Flex,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ImMenu } from "react-icons/im";

const Header = () => {
  let test = false;
  let location = useLocation();
  return (
    <Card width={"100vw"}>
      <CardHeader
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Image src={motorsShop} alt="logo" />
        {test ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<ImMenu />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>Cadastrar</MenuItem>
              <MenuItem>Fazer Login</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Box display={"flex"} flexDirection={"row"} gap={"1rem"}>
            <Link>Fazer Login</Link>
            <Link
              border={"1px"}
              borderRadius={"6px"}
              paddingLeft={"0.5rem"}
              paddingRight={"0.5rem"}
            >
              Cadastrar
            </Link>
          </Box>
        )}
      </CardHeader>
    </Card>
  );
};
export default Header;

import { Link, useLocation } from "react-router-dom";
import motorsShop from "../../assets/Motors shop.png";
import {
  Card,
  CardHeader,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ImMenu } from "react-icons/im";

const Header = () => {
  let location = useLocation();
  return (
    <Card width={"100vw"}>
      <CardHeader
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Image src={motorsShop} alt="logo" />
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
      </CardHeader>
    </Card>
  );
};
export default Header;

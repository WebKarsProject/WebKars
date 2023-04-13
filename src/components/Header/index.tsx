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
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { ImMenu } from "react-icons/im";
import { useState } from "react";
import Profile from "../Profile";

const Header = () => {
  const [isLarger] = useMediaQuery("(max-width: 500px)");
  const [close, setClose] = useState(true);
  let location = useLocation();
  return (
    <Card width={"100%"} borderRadius={"0"}>
      <CardHeader
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"80px"}
      >
        <Image src={motorsShop} alt="logo" />
        {}
        {isLarger ? (
          <Menu>
            <MenuButton
              onClick={() => (close ? setClose(false) : setClose(true))}
              as={IconButton}
              aria-label="Options"
              icon={
                close ? <ImMenu /> : <Text fontFamily={"sans-serif"}>X</Text>
              }
              variant="outline"
            />
            <MenuList>
              <MenuItem>
                <Link
                  color={"brand.brand1"}
                  href="/"
                  _hover={{ textDecoration: "none" }}
                >
                  Fazer Login
                </Link>
              </MenuItem>
              <MenuItem>
                <Link _hover={{ textDecoration: "none" }} href="/register">
                  Cadastrar
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          (
            <Box
              display={"flex"}
              flexDirection={"row"}
              gap={"1rem"}
              alignItems={"center"}
              borderLeft={"1px"}
              borderColor={"grey_scale.grey6"}
              padding={"1rem"}
            >
              <Link variant={"link"} color={"brand.brand1"} href="/">
                Fazer Login
              </Link>
              <Link
                variant={"outline1"}
                _hover={{ textDecoration: "none" }}
                href="/register"
              >
                Cadastrar
              </Link>
            </Box>
          ) &&
          location.pathname === "/product" && <Profile />
        )}
      </CardHeader>
    </Card>
  );
};
export default Header;

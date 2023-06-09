import { useNavigate } from "react-router-dom";
import motorsShop from "../../assets/Motors shop.png";
import {
  Box,
  Card,
  CardHeader,
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
import { useContext, useState } from "react";
import Profile from "../Profile";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const Header = () => {
  const { token } = useContext(AuthContext);
  const [isLarger] = useMediaQuery("(max-width: 500px)");
  const [close, setClose] = useState(true);

  const navigate = useNavigate();
  return (
    <Card as={"header"} id="/" width={"100%"} borderRadius={"0"}>
      <CardHeader
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"80px"}
      >
        <Image
          cursor={"pointer"}
          onClick={() => navigate("/")}
          src={motorsShop}
          alt={"logo"}
        />
        {token ? (
          <Profile />
        ) : isLarger ? (
          <Menu>
            <MenuButton
              onClick={() => (close ? setClose(false) : setClose(true))}
              as={IconButton}
              aria-label={"Options"}
              icon={
                close ? <ImMenu /> : <Text fontFamily={"sans-serif"}>X</Text>
              }
              variant={"outline"}
            />
            <MenuList>
              <MenuItem>
                <Link
                  color={"brand.brand1"}
                  href="/session"
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
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"1rem"}
            alignItems={"center"}
            borderLeft={"1px"}
            borderColor={"grey_scale.grey6"}
            padding={"1rem"}
          >
            {token ? (
              <Profile />
            ) : (
              <>
                <Link variant={"link"} color={"brand.brand1"} href="/session">
                  Fazer Login
                </Link>
                <Link
                  variant={"outline1"}
                  _hover={{ textDecoration: "none" }}
                  href={"/register"}
                >
                  Cadastrar
                </Link>
              </>
            )}
          </Box>
        )}
      </CardHeader>
    </Card>
  );
};
export default Header;

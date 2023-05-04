import { Avatar, Box, Icon, ListItem, Text } from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import { Instance } from "../../../services/axios";
import { commentContext } from "../../../contexts/Comment/commentContext";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

const CardLi = ({ cars }: any) => {
  const { getComment, comments } = useContext(commentContext);
  const { loading, setLoading } = useContext(AuthContext);

  const idUser = cars.id;

  const specificComment = comments[idUser];

  const memoizedGetComment = useCallback(async () => {
    await getComment(idUser);
  }, [getComment, idUser]);

  useEffect(() => {
    async function fetchData() {
      await memoizedGetComment();
    }
    fetchData();
  }, []);

  return (
    <ListItem
      listStyleType={"none"}
      display={"flex"}
      flexDirection={"column"}
      gap={"8px"}
      mb={"44px"}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Box display={"flex"} alignItems={"center"} gap={"8px"}>
            <Avatar size={"sm"} name={specificComment?.data.user?.name} />
            <Text variant={"body-2-500"}>
              {specificComment?.data.user?.name}
            </Text>
            {/* <Text
              variant={"body-2-500"}
              color={"brand.brand1"}
              p={"4px 8px"}
              bg={"brand.brand4"}
              textAlign={"center"}
              borderRadius={"4px"}
            >
              {"Comprador" ? "Comprador" : "Anunciante"}
            </Text> */}
            <Icon viewBox={"0 0 500 120"} color={"grey_scale.grey3"}>
              <path
                fill={"currentColor"}
                d={
                  "M 100, 100 m 30, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                }
              />
            </Icon>
            <Text variant={"body-2-400"} fontSize={"12px"}>
              {cars.createdAt}
            </Text>
          </Box>
          <Text variant={"body-2-400"} textAlign={"justify"}>
            {cars.description}
          </Text>
        </>
      )}
    </ListItem>
  );
};

export default CardLi;

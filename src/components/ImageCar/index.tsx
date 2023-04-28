import { Box, Image } from "@chakra-ui/react";
import { ICarImages } from "../../interface";

const ImageCar = ({ image, modalCarImg }: ICarImages) => {
  return (
    <Box
      onClick={() => modalCarImg(image)}
      display={"flex"}
      borderRadius={"4px"}
      justifyContent={"center"}
      alignItems={"center"}
      bg="grey_scale.grey7"
      boxSize={"24"}
    >
      <Image src={image.img_url} objectFit={"cover"} />
    </Box>
  );
};

export default ImageCar;

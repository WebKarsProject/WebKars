import { Button } from "@chakra-ui/react";
interface IBtnCommentsProps {
  text: string;
  isLarger: boolean;
}

const BtnComments = ({ text, isLarger }: IBtnCommentsProps) => {
  console.log(isLarger);
  return (
    <Button
      variant={"brand2"}
      h={"24px"}
      fontWeight={"500"}
      fontSize={"12px"}
      lineHeight={"24px"}
    >
      {text}
    </Button>
  );
};

export default BtnComments;

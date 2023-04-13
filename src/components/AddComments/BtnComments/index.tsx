import { Button } from '@chakra-ui/react';
interface IBtnCommentsProps {
  text: string;
  isLarger: boolean;
}

const BtnComments = ({ text, isLarger }: IBtnCommentsProps) => {
  console.log(isLarger);
  return (
    <Button
      h="24px"
      p="0px 12px"
      borderRadius="24px"
      fontWeight="500"
      fontSize="12px"
      lineHeight="24px"
      color="grey_scale.grey3"
      bg="grey_scale.grey7"
      mb={isLarger ? '0' : '16px'}
      border="1.5px solid #E9ECEF"
      _hover={{
        border: '1.5px solid #5126EA',
        color: `#FFFFFF`,
        bg: `#5126EA`,
      }}
    >
      {text}
    </Button>
  );
};

export default BtnComments;

import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IId {
  id: string;
}

const EditProduct = ({ id }: IId) => {
  const navigate = useNavigate();
  return (
    <ButtonGroup variant="outline" spacing="6">
      <Button variant={"outline1"}>Editar</Button>
      <Button
        variant={"outline1"}
        onClick={() => navigate(`/product/${id}`, { replace: true })}
      >
        Ver detalhe
      </Button>
    </ButtonGroup>
  );
};
export default EditProduct;

import { Button, ButtonGroup, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import EditVehicle from "../EditVehicle";

interface IId {
  id: string;
}

const EditProduct = ({ id }: IId) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      {isOpen && <EditVehicle id={id} isOpen={isOpen} onClose={onClose} />}
      <ButtonGroup variant="outline" spacing="6">
        <Button variant={"outline1"} onClick={onOpen}>
          Editar
        </Button>
        <Button
          variant={"outline1"}
          onClick={() => navigate(`/product/${id}`, { replace: true })}
        >
          Ver detalhes
        </Button>
      </ButtonGroup>
    </>
  );
};
export default EditProduct;

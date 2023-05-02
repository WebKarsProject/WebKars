import { ToastContainer } from "react-toastify";
import Routed from "./routes";
import { useContext } from "react";
import { AuthContext } from "./contexts/Auth/AuthContext";
import Loading from "./components/Loading";

const App = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {loading && <Loading />}
      <ToastContainer />
      <Routed />
    </>
  );
};

export default App;

import AppRoutes from "AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useCheckToken} from "./hooks/useChekToken"
const App = () => {
    useCheckToken();
  return (
    <>
      <ToastContainer autoClose={5000} />
      <AppRoutes />
    </>
  );
};

export default App;

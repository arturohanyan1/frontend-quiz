import { FC } from "react";
import ErrorBoundaryComponent from "src/hoc/ErrorBoundary";
import Routing from "./routing/Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
  return (
    <ErrorBoundaryComponent>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        closeButton={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routing />
    </ErrorBoundaryComponent>
  );
};
export default App;

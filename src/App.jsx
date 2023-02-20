import GlobalStyle from "../global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from './routes/index'
import ModalEditTech from "./components/ModalEditTech";



function App() {
  return (
    <div className="App-header">
      <AppRoutes></AppRoutes>
      <GlobalStyle></GlobalStyle>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;

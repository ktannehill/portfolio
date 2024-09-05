import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToAnchor from "./components/ScrollToAnchor";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div id="flex">
      <Header />
      <ToastContainer theme="dark" autoClose={5000} limit={3} />
      <div id="outlet">
        <Outlet />
      </div>
      <Footer />
      <ScrollToAnchor />
    </div>
  );
}

export default App;

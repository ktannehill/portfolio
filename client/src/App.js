import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToAnchor from "./components/ScrollToAnchor";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const notify = () => toast("Wow so easy !");

  return (
    <div id="flex">
      <Header />
      <ToastContainer />
      <div id="outlet">
        <Outlet />
      </div>
      <Footer />
      <ScrollToAnchor />
    </div>
  );
}

export default App;

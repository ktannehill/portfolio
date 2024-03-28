import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToAnchor from "./components/ScrollToAnchor";

function App() {
  return (
    <div id="flex">
      <Header id="loc-home" />
      <div id="outlet">
        <Outlet />
      </div>
      <Footer />
      <ScrollToAnchor />
    </div>
  );
}

export default App;

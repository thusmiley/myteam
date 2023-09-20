import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <CTA />
      <Footer />
    </>
  );
}

export default App;

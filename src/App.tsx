import MainHeader from "./components/MainHeader";
import "./App.scss";

import { Outlet } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

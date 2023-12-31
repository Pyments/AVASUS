import MainHeader from "./components/MainHeader";
import "./App.scss";

import { Outlet } from "react-router";

function App() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default App;

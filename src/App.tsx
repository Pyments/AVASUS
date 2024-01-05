import { Outlet } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.scss";

import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainHeader />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;

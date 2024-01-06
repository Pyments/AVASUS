import { Outlet } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.scss";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;

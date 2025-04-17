import { useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RootState } from "./app/store";
import LoginPage from "./features/login/components/LoginPage";
import { isAdminState, isUserState } from "./features/login/types/loginTypes";
import MainPage from "./features/main/components/MainPage";

export default function App() {
  const queryClient = new QueryClient();
  const loginState = useSelector((state: RootState) => state.loginPage);
  const isLoggedIn = isAdminState(loginState) || isUserState(loginState);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/main"
            element={
              isLoggedIn ? (
                <MainPage />
              ) : (
                <div className="p-4">Please login first</div>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

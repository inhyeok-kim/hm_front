import { Route, Routes } from "react-router-dom";
import LoginPage from "./login/LoginPage";

export default function Router(){
    return (
      <Routes>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    )
}
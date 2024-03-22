import { Route, Routes } from "react-router-dom";
import LoginPage from "./login/LoginPage";
import HomePage from "./home/HomePage";

export default function Router(){
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    )
}
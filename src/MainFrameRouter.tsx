import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignPage from "./pages/login/SignPage";
import WelcomePage from "./pages/welcome/WelcomePage";
import Root from "./pages/Root";

export default function MainFrameRouter(){
    return (
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign" element={<SignPage />} />
        <Route path="welcome" element={<WelcomePage/>}/>
      </Routes>
    )
}
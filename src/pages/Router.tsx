import { Route, Routes } from "react-router-dom";
import LoginPage from "./login/LoginPage";
import HomePage from "./home/HomePage";
import SignPage from "./login/SignPage";
import NonFamilyPage from "./family/NonFamilyPage";
import WelcomePage from "./welcome/WelcomePage";

export default function Router(){
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign" element={<SignPage />} />
        <Route path="welcome" element={<WelcomePage/>}/>
        <Route path="family">
          <Route path="nonFamily" element={<NonFamilyPage />} />
        </Route>
      </Routes>
    )
}
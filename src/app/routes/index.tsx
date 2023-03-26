import {
  Route,
  Routes as Switch,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { Dashboard } from "../pages";
import { Login } from "../pages/login/Login";
import { Refletores } from "../pages/refletores/Refletores";
import { Refratores } from "../pages/refratores/Refratores";
import { Cameras } from "../pages/cameras/Cameras";
import { About } from "../pages/about/About";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" element={<Refratores />} />
        <Route path="/autenticacao" element={<Login />} />
        <Route path="/refletores" element={<Refletores />} />
        <Route path="/refratores" element={<Refratores />} />
        <Route path="/cameras" element={<Cameras />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Switch>
    </BrowserRouter>
  );
};

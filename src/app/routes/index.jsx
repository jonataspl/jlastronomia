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
import { ItemBox } from "../pages/refratores/components/itemBox";
import { Carrinho } from "../pages/cart/Carrinho";
import { Spa } from "../pages/spa/Spa";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/itembox" component={ItemBox} />
        <Route exact path="/carrinho" component={Carrinho} />
        <Route path="/pagina-inicial" element={<Refratores />} />
        <Route path="/spa" element={<Spa />} />
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

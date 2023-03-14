import "./components/styled.css";
import { ItemBox } from "./components/itemBox";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useAppThemeContext } from "../../shared/contexts/ThemeContext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { SettingsPowerRounded } from "@mui/icons-material";

export const Refratores = () => {
  const history = useNavigate();

  const handleDrawerOpen = () => {};

  const { toggleTheme } = useAppThemeContext();

  function homeButton() {
    history("/pagina-inicial");
  }

  return (
    <>
      <main>
        {/* <Button variant="contained" onClick={toggleTheme} className="toggle">
          Mudar Tema
        </Button> */}
        <div
          className="cabecalho"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className="portal">JL Astronomia</h1>

          <IconButton className="CarrinhoIco">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
        {/* <Button variant="contained" onClick={homeButton}>
          Home
        </Button> */}
      </main>
      <aside>
        <div className="teste">
          <nav className="Breadcrumbs">
            <Link underline="hover" color="inherit" href="/">
              Como funciona
            </Link>
            &nbsp;/&nbsp;
            <Link underline="hover" color="inherit" href="/">
              Página inicial
            </Link>
            &nbsp;/&nbsp;
            <Link
              underline="hover"
              color="text.primary"
              href="/"
              aria-current="page"
            >
              Formas de pagamento
            </Link>
          </nav>
        </div>

        <p className="alertaDev">Site em desenvolvimento</p>
        <ItemBox />
      </aside>
    </>
  );
};

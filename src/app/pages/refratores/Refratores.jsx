import "./components/styled.css";
import { ItemBox } from "./components/itemBox";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useAppThemeContext } from "../../shared/contexts/ThemeContext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Refratores = () => {
  const history = useNavigate();

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
        <h1 className="portal">
          JL Astronomia
          <IconButton style={{ display: "flex", justifyContent: "center" }}>
            <AddShoppingCartIcon className="CarrinhoIco" />
          </IconButton>
        </h1>

        {/* <Button variant="contained" onClick={homeButton}>
          Home
        </Button> */}
      </main>
      <body>
        <div role="presentation" className="Breadcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="text.primary" href="/">
              Como funciona
            </Link>
            <Link underline="hover" color="text.primary" href="/">
              Recomendações e Feedbacks
            </Link>
            <Link underline="hover" color="text.primary" href="/">
              Formas de pagamento
            </Link>
          </Breadcrumbs>
        </div>
        <p className="alertaDev">Site em desenvolvimento</p>
        <ItemBox />
      </body>
    </>
  );
};

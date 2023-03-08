import "./components/styled.css";
import { ItemBox } from "./components/itemBox";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAppThemeContext } from "../../shared/contexts/ThemeContext";

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
        <h1>Nome da Loja</h1>
        <h2 className="text">Produtos Catalogados</h2>
        {/* <Button variant="contained" onClick={homeButton}>
          Home
        </Button> */}
      </main>
      <body>
        <p>Site em desenvolvimento</p>
        <ItemBox />
      </body>
    </>
  );
};

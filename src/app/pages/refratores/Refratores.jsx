import "./components/styled.css";
import { ItemBox } from "./components/itemBox";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useAppThemeContext } from "../../shared/contexts/ThemeContext";

export const Refratores = () => {
  const history = useNavigate();

  const { toggleTheme } = useAppThemeContext();

  function homeButton() {
    history("/pagina-inicial");
  }

  return (
    <div>
      <Button variant="contained" onClick={toggleTheme}>
        Mudar Tema
      </Button>
      <h1>Refratores</h1>
      <Button variant="contained" onClick={homeButton}>
        Home
      </Button>

      <section className="flex">
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
      </section>
    </div>
  );
};

import "./components/styled.css";
import { ItemBox } from "./components/itemBox";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAppThemeContext } from "../../shared/contexts/ThemeContext";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

export const Refratores = () => {
  const history = useNavigate();

  const { toggleTheme } = useAppThemeContext();

  function homeButton() {
    history("/pagina-inicial");
  }

  return (
    <>
      <header className="header"></header>
      <main>
        <Button variant="contained" onClick={toggleTheme} className="toggle">
          Mudar Tema
        </Button>
        <h1>Refratores</h1>
        <Button variant="contained" onClick={homeButton}>
          Home
        </Button>
      </main>
      <body>
        <Grid className="Grade">
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </Grid>
      </body>
    </>
  );
};

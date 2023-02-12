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
      <div className="header">
        <Button variant="contained" onClick={toggleTheme} className="toggle">
          Mudar Tema
        </Button>
        <h1>Refratores</h1>
        <Button variant="contained" onClick={homeButton}>
          Home
        </Button>
      </div>
      <Grid className="Grade">
        <ItemBox />
        <ItemBox />
        <ItemBox />
      </Grid>
    </>
  );
};

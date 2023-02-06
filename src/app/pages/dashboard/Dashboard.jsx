import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAppThemeContext } from "../../shared/contexts/ThemeContext";

export const Dashboard = () => {
  const { toggleTheme } = useAppThemeContext();

  const history = useNavigate();

  function loginButton() {
    history("/autenticacao");
  }
  function refletoresButton() {
    history("/refletores");
  }
  function refratoresButton() {
    history("/refratores");
  }
  function camerasButton() {
    history("/cameras");
  }

  return (
    <div>
      <Button variant="contained" onClick={toggleTheme}>
        Mudar Tema
      </Button>
      <h1>Página Principal</h1>
      <Button variant="contained" onClick={loginButton}>
        Login
      </Button>
      <Button variant="contained" onClick={refletoresButton}>
        Refletores
      </Button>
      <Button variant="contained" onClick={refratoresButton}>
        Refratores
      </Button>
      <Button variant="contained" onClick={camerasButton}>
        Cameras
      </Button>
    </div>
  );
};

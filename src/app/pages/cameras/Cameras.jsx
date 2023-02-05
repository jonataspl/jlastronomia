import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { DarkMode } from "../../shared/themes/darkTheme";

export const Cameras = () => {
  const history = useNavigate();

  function homeButton() {
    history("/pagina-inicial");
  }

  return (
    <div>
      <DarkMode />
      <h1>Câmeras</h1>
      <Button variant="contained" onClick={homeButton}>
        Home
      </Button>
    </div>
  );
};

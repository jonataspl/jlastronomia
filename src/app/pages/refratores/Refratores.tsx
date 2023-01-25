import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export const Refratores = () => {
  const history = useNavigate();

  function homeButton() {
    history("/pagina-inicial");
  }

  return (
    <div>
      <h1>Refratores</h1>
      <Button variant="contained" onClick={homeButton}>
        Home
      </Button>
    </div>
  );
};

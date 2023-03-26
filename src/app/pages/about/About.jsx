import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export const About = () => {
  const history = useNavigate();

  function homeButton() {
    history("/pagina-inicial");
  }

  return (
    <div>
      <h1>Como funciona</h1>
      <Button variant="contained" onClick={homeButton}>
        Home
      </Button>
    </div>
  );
};

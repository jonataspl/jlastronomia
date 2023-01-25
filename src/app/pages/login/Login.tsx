import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const Login = () => {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const history = useNavigate();

  const handleEntrar = () => {
    console.log(`E-mail: ${email}, Senha:${password}`);
  };

  function homeButton() {
    history("/pagina-inicial");
  }

  return (
    <div>
      <form>
        <label>
          <TextField
            id="filled-basic"
            label="E-Mail"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ margin: "10px 10px" }}
          />
        </label>

        <label>
          <TextField
            id="filled-basic"
            label="Password"
            variant="filled"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            sx={{ margin: "10px 10px" }}
          />
        </label>

        <Button
          variant="contained"
          type="button"
          onClick={handleEntrar}
          sx={{ margin: "20px 10px" }}
        >
          Entrar
        </Button>
      </form>
      <h1>
        <Button
          variant="contained"
          onClick={homeButton}
          sx={{ margin: "20px 10px" }}
        >
          Home
        </Button>
      </h1>
    </div>
  );
};

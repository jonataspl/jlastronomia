import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useAppThemeContext } from "../../shared/contexts/ThemeContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "#848586"),
  padding: theme.spacing(1),
  border: "1px solid white",
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "fixed",
}));

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
      <Box sx={{ width: "fixed", margin: "10%", flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid xs={8} sm={4}>
            <Item>
              <img
                src="https://www.google.com/logos/doodles/2023/celebrating-bubble-tea-6753651837109839.4-l.webp"
                alt="flex"
                width={"100%"}
                height={"100%"}
              />
              <h3>Produtos</h3>
              <p>Descrição</p>
              <p>Valor</p>
              <Button
                variant="contained"
                sx={{ width: "100%", height: "100%" }}
              >
                Adicionar
              </Button>
            </Item>

            <Item sx={{}}>
              <img
                src="https://www.google.com/logos/doodles/2023/celebrating-bubble-tea-6753651837109839.4-l.webp"
                alt="flex"
                width={"100%"}
                height={"100%"}
              />
              <h3>Produtos</h3>
              <p>Descrição</p>
              <p>Valor</p>
              <Button
                variant="contained"
                sx={{ width: "100%", height: "100%" }}
              >
                Adicionar
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

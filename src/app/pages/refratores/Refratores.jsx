import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { width } from "@mui/system";

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

  function homeButton() {
    history("/pagina-inicial");
  }

  return (
    <div>
      <h1>Refratores</h1>
      <Button variant="contained" onClick={homeButton}>
        Home
      </Button>
      <Box sx={{ width: "fixed", margin: "10%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid xs={2} sm={4}>
            <Item sx={{}}>
              <div>
                <img
                  src="https://www.google.com/logos/doodles/2023/celebrating-bubble-tea-6753651837109839.4-l.webp"
                  alt="some value"
                />
              </div>
              <h3>Produtos</h3>
              <p>Descrição</p>
              <p>Valor</p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "#848586"),
  padding: theme.spacing(1),
  border: "1px solid white",
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "fixed",
}));

export const ItemBox = () => {
  return (
    <Grid container spacing={{ md: 0 }} columns={{ md: 12 }}>
      <Grid>
        <Item>
          <img
            src="https://www.svbony.com/Assets/ProductImages/F/f9381a-/F9381A-SV550-5.jpg"
            alt="flex"
            width={"300px"}
            height={"300px"}
          />
          <h3>Produtos</h3>
          <p>Descrição</p>
          <p>Valor</p>
          <Button variant="contained" sx={{ width: "100%", height: "100%" }}>
            Adicionar
          </Button>
        </Item>
      </Grid>
    </Grid>
  );
};

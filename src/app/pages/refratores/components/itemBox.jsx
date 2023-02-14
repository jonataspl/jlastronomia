import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "../components/styled.css";
import { Grid } from "@mui/material";
import { productsJson } from "./ProductData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "#848586"),
  padding: theme.spacing(1),
  border: "1px solid white",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ItemBox = () => {
  return (
    <Grid className="GradeItem">
      {productsJson.map(({ name, img, description, price }, index) => (
        <Item key={index}>
          <img src={img} alt="flex" width={"300px"} height={"300px"} />
          <h3 className="Product">{name}</h3>
          <p className="Description">{description}</p>
          <p className="Price">R${price[0]} sem imposto pago.</p>
          <p className="Price">R${price[1]} com imposto pago.</p>
          <console className="log">{index}</console>
          <Button variant="contained" className="AddButton">
            Adicionar
          </Button>
        </Item>
      ))}
    </Grid>
  );
};

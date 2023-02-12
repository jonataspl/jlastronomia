import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "../components/styled.css";
import { Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "#848586"),
  padding: theme.spacing(1),
  border: "1px solid white",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ItemBox = () => {
  return (
    <Grid className="Grade">
      <Item>
        <img
          src="https://www.svbony.com/Assets/ProductImages/F/f9381a-/F9381A-SV550-5.jpg"
          alt="flex"
          width={"300px"}
          height={"300px"}
        />
        <h3 className="Product">Product</h3>
        <p className="Description">Description</p>
        <p className="Price">Value</p>
        <Button variant="contained" className="AddButton">
          Adicionar
        </Button>
      </Item>
    </Grid>
  );
};

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import "../components/styled.css";
import { Grid, InputLabel, MenuItem } from "@mui/material";
import { productsJson } from "./ProductData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "#848586"),
  padding: theme.spacing(1),
  border: "1px solid white",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ItemBox = () => {
  const [precoSelecionado, setPrecoSelecionado] = useState("null");

  const handlePrecoChange = (event) => {
    const value = event.target.value;
    if (value === "preço0") {
      setPrecoSelecionado(0);
    } else if (value === "preço1") {
      setPrecoSelecionado(1);
    }
  };

  return (
    <Grid className="GradeItem">
      {productsJson.map(({ name, img, description, price }, index) => (
        <Item key={index}>
          <img src={img} alt="flex" width={"300px"} height={"300px"} />
          <h3 className="Product">{name}</h3>
          <p className="Description">{description}</p>
          <InputLabel>Imposto:</InputLabel>
          <Select value={precoSelecionado} onChange={handlePrecoChange}>
            <MenuItem value={"null"}>Selecione</MenuItem>
            <MenuItem value={"preço0"}>Sem imposto pago.</MenuItem>
            <MenuItem value={"preço1"}>Com imposto pago.</MenuItem>
          </Select>
          <p className="Price" value={"preço1"}>
            R${price[0]} sem imposto pago.
          </p>
          <p className="Price" value={"preço2"}>
            R${price[1]} com imposto pago.
          </p>
          <Button variant="contained" className="AddButton">
            Adicionar
          </Button>
        </Item>
      ))}
    </Grid>
  );
};

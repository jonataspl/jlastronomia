import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import "../components/styled.css";
import { Grid, InputLabel, MenuItem } from "@mui/material";
import { productsJson } from "./ProductData";
import Modal from "./modal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "#848586"),
  padding: theme.spacing(1),
  border: "1px solid white",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ItemBox = () => {
  const [showModal, setShowModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const handleShowModal = (product) => {
    setProdutoSelecionado(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [productStates, setProductStates] = useState({});

  const handlePrecoChange = (event, index) => {
    const value = event.target.value;
    setProductStates((prevStates) => ({
      ...prevStates,
      [index]: {
        impostoSelecionado: value,
        precoSelecionado: value,
      },
    }));
  };

  return (
    <Grid className="GradeItem">
      {productsJson.map(({ name, img, description, price }, index, product) => {
        const productState = productStates[index] || {};

        return (
          <Item key={index}>
            <img
              onClick={handleShowModal}
              src={img}
              alt="flex"
              width={"300px"}
              height={"300px"}
            />
            <h3 className="Product">{name}</h3>
            <p className="Description">{description}</p>
            <InputLabel>Imposto:</InputLabel>
            <p />
            <Select
              value={productState.impostoSelecionado || "op"}
              onChange={(event) => handlePrecoChange(event, index)}
            >
              <MenuItem value={"op"}>Selecione</MenuItem>
              <MenuItem value={"preço0"}>Com imposto pago.</MenuItem>
              <MenuItem value={"preço1"}>Sem imposto pago.</MenuItem>
            </Select>
            {productState.precoSelecionado === "preço0" ? (
              <p className="Price">R$ {price[1].toFixed(2)} á vista</p>
            ) : (
              <p className="Price">R$ {price[0].toFixed(2)} á vista</p>
            )}

            <Button variant="contained" className="AddButton">
              Adicionar
            </Button>
          </Item>
        );
      })}
      {produtoSelecionado && (
        <Modal
          showModal={showModal}
          closeModal={handleCloseModal}
          selectedProduct={produtoSelecionado}
        />
      )}
    </Grid>
  );
};

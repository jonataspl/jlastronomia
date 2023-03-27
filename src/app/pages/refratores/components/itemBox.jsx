import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import "../components/styled.css";
import { Grid, MenuItem } from "@mui/material";
import { productsJson } from "./ProductData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "#fff"),
  padding: theme.spacing(1),
  border: "1px solid white",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Modal = ({ showModal, closeModal, children }) => {
  return (
    <>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export const ItemBox = () => {
  const [showModal, setShowModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const handleShowModal = (index) => {
    const selectedProduct = productsJson[index];
    setProdutoSelecionado(selectedProduct);
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
      {productsJson.map(({ name, img, description, price }, index) => {
        const productState = productStates[index] || {};

        return (
          <Item className="Item" key={index} sx={{ padding: "2rem" }}>
            <img
              onClick={() => handleShowModal(index)}
              src={img[0]}
              alt="flex"
              width={"300px"}
              height={"300px"}
              style={{ cursor: "pointer" }}
            />

            <h3 className="Product">{name}</h3>
            <p className="Description">{description}</p>
            {productState.precoSelecionado === "preço1" ? (
              <p className="Price">R$ {price[1].toFixed(2)} á vista</p>
            ) : (
              <p className="Price">R$ {price[0].toFixed(2)} á vista</p>
            )}
            <p />
            <Select
              className="select"
              value={productState.impostoSelecionado || "preço0"}
              onChange={(event) => handlePrecoChange(event, index)}
            >
              <MenuItem value={"preço0"}>Sem imposto pago.</MenuItem>
              <MenuItem value={"preço1"}>Com imposto pago.</MenuItem>
            </Select>

            {/* <Button variant="contained" className="AddButton">
              Adicionar
            </Button> */}
          </Item>
        );
      })}

      {produtoSelecionado && (
        <Modal
          showModal={showModal}
          closeModal={handleCloseModal}
          selectedProduct={produtoSelecionado}
        >
          <img
            src={produtoSelecionado.img[0]}
            alt="flex"
            width={"300px"}
            height={"300px"}
          />
          <h3>{produtoSelecionado.name}</h3>
          <p>{produtoSelecionado.descdetail}</p>
        </Modal>
      )}
    </Grid>
  );
};

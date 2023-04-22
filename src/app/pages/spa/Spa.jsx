import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Spa = () => {
  const history = useNavigate();

  return (
    <>
      <main>
        {/* <Button variant="contained" onClick={toggleTheme} className="toggle">
          Mudar Tema
        </Button> */}
        <div
          className="cabecalho"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className="portal">JL Astronomia</h1>

          <IconButton className="CarrinhoIco" href="">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
        {/* <Button variant="contained" onClick={homeButton}>
          Home
        </Button> */}
      </main>
      <aside>
        <div className="teste">
          <nav className="Breadcrumbs">
            {/* <Link underline="hover" color="inherit" href={""}>
              Como funciona
            </Link>
            &nbsp;/&nbsp; */}
            <Link
              underline="hover"
              color="inherit"
              href="https://wa.me/5511940286835?text=Ol%C3%A1%21+Vim+atrav%C3%A9s+dos+Jonatas%2FJL+Astronomia%2C+gostaria+de+saber+sobre+o+SPA."
            >
              <h3>Faça seu pedido clicando aqui!</h3>
            </Link>
            {/* &nbsp;/&nbsp;
             <Link underline="hover" color="text.primary" aria-current="page">
              Formas de pagamento
            </Link> */}
          </nav>
        </div>

        <h2 className="alertaDev">Smart PC Astronomy</h2>
        <h3 className="alertaDev">
          Computador completo e dedicado para astronomia
        </h3>
      </aside>
    </>
  );
};

import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { productsJson } from "../../pages/refratores/components/ProductData";

export const Grade = () => {
  <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
    <ImageList variant="masonry" cols={3} gap={8}>
      {productsJson.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar position="below" title={item.author} />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>;
};

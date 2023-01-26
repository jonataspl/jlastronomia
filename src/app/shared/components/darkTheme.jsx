import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const TurnOff = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

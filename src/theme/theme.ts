import { createTheme } from "@mui/material/styles";
import { grey, blue } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: blue[600] },
    background: { default: "#f5f7fa", paper: "#ffffff" },
    text: { primary: "#212121", secondary: grey[700] },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: blue[500] },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff", secondary: grey[400] },
  },
});

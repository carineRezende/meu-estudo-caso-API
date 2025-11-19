import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

// Importe o ThemeProvider e o tema customizado
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Reseta o CSS e aplica cores de fundo/texto
import customTheme from './theme'; // Certifique-se de que o caminho está correto

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Envolve o App com o ThemeProvider e passa o tema */}
    <ThemeProvider theme={customTheme}>
        {/* O CssBaseline aplica o background.default e text.primary */}
        <CssBaseline />
        <App />
    </ThemeProvider>
  </React.StrictMode>
);
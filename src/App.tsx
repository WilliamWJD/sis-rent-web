import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./contexts/AuthContext";

import { Router } from "./routes";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <ToastContainer />
                <GlobalStyle />
                <BrowserRouter>
                    <AuthProvider>
                        <Router />
                    </AuthProvider>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

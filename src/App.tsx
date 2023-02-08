import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./contexts/AuthContext";

import { SignIn } from "./pages/SignIn";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <ToastContainer />
                <GlobalStyle />
                <AuthProvider>
                    <SignIn />
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}

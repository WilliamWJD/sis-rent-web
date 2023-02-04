import { ThemeProvider } from "styled-components";

import { AuthProvider } from "./contexts/AuthContext";

import { SignIn } from "./pages/SignIn";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <AuthProvider>
                    <SignIn />
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}

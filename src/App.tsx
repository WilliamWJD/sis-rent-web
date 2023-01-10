import { ThemeProvider } from "styled-components";
import { SignIn } from "./pages/SignIn";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <SignIn />
            </ThemeProvider>
        </>
    );
}

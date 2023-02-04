import { createContext, useCallback, useContext, useState } from "react";
import { api } from "../services/api";

interface SignInCredentials {
    email: string;
    senha: string;
}

interface User {
    id: string;
    nome: string;
    email: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface AuthContext {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
}

const authContext = createContext<AuthContext>({} as AuthContext);

function AuthProvider({ children }: any) {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem("@sisRent:token");
        const user = localStorage.getItem("@sisRent:user");

        if (token && user) {
            return {
                token,
                user: JSON.parse(user),
            };
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, senha }: SignInCredentials) => {
        try {
            const response = await api.post("/usuario/login", {
                email,
                senha,
            });

            const { token, user } = response.data;

            localStorage.setItem("@sisRent:token", token);
            localStorage.setItem("@sisRent:user", JSON.stringify(user));

            setData({ token, user });
        } catch (error) {
            alert("usuário ou senha inválido");
        }
    }, []);

    return (
        <authContext.Provider
            value={{
                user: data.user,
                signIn,
            }}
        >
            {children}
        </authContext.Provider>
    );
}

function useAuth(): AuthContext {
    const context = useContext(authContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}

export { authContext, AuthProvider, useAuth };

import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import { Container, Content } from "./styles";

import SignImage from "../../images/signInImage.svg";
import { ZodObject } from "zod";
import { toast } from "react-toastify";

const signInValidationSchema = zod.object({
    email: zod.string().email("Digite um e-mail válido"),
    password: zod.string().min(6, "A senha deve ter no mínimo 6 digitos"),
});

type SignFormData = zod.infer<typeof signInValidationSchema>;

export function SignIn() {
    const { signIn, user } = useAuth();

    const { register, handleSubmit } = useForm<SignFormData>({
        resolver: zodResolver(signInValidationSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function handleSignIn(data: SignFormData) {
        try {
            signIn({
                email: data.email,
                senha: data.password,
            });
        } catch (error) {
            if (error instanceof ZodObject) {
                toast.error("teste");
            }
        }
    }

    if (user) {
        return <Navigate to="/dashboard" />;
    } else {
        return (
            <Container>
                <Content>
                    <img src={SignImage} alt="" />
                    <form action="" onSubmit={handleSubmit(handleSignIn)}>
                        <input
                            id="email"
                            type="text"
                            placeholder="E-mail"
                            {...register("email")}
                        />
                        <input
                            id="password"
                            type="password"
                            placeholder="******"
                            {...register("password")}
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </Content>
            </Container>
        );
    }
}

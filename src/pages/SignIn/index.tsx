import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "../../contexts/AuthContext";
import { Container, Content } from "./styles";

import SignImage from "../../images/signInImage.svg";

const signInValidationSchema = zod.object({
    email: zod.string().email("Digite um e-mail válido"),
    password: zod.string().min(6, "A senha deve ter no mínimo 6 digitos"),
});

type SignFormData = zod.infer<typeof signInValidationSchema>;

export function SignIn() {
    const { signIn } = useAuth();

    const { register, handleSubmit } = useForm<SignFormData>({
        resolver: zodResolver(signInValidationSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function handleSignIn(data: SignFormData) {
        console.log(data);
        signIn({
            email: data.email,
            senha: data.password,
        });
    }

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

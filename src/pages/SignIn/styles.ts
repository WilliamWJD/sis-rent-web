import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme["gray-900"]};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Content = styled.div`
    padding: 50px 90px;
    background-color: ${(props) => props.theme["gray-800"]};
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 17.5rem;
    }

    form {
        width: 100%;
        max-width: 17.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        margin-top: 3rem;

        input {
            padding: 0.563rem;
            border-radius: 5px;
            border: none;
            outline: 0;
        }

        button {
            background-color: ${(props) => props.theme["blue-dark"]};
            color: ${(props) => props.theme.white};
            padding: 0.625rem 1.25rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        button:hover {
            background-color: ${(props) => props.theme.blue};
        }
    }
`;

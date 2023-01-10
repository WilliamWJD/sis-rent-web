import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        width: 50%;
        background-color: ${(props) => props.theme["primary-700"]};
        height: 100vh;
    }
`;

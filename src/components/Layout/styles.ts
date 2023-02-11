import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Header = styled.header`
    width: 100%;
    margin: 0 auto;
    height: 7rem;
    background-color: ${(props) => props.theme["gray-800"]};
    margin-bottom: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
        width: 4rem;
    }

    nav {
        ul {
            display: flex;
            flex-direction: row;
            list-style: none;

            a {
                margin-right: 3rem;
                text-decoration: none;
                color: ${(props) => props.theme["gray-300"]};

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    > div {
        display: flex;
        align-items: center;

        img {
            width: 4rem;
            border-radius: 50%;
            margin-left: 1.5rem;
            border: 2px solid ${(props) => props.theme["blue-dark"]};
        }

        .profile {
            display: flex;
            flex-direction: column;

            span {
                font-size: 0.75rem;
                color: ${(props) => props.theme["gray-500"]};
                margin-top: 0.313rem;
            }
        }
    }
`;

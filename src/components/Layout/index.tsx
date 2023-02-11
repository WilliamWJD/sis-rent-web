import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Container, Content, Header } from "./styles";

export function Layout() {
    const { user } = useAuth();

    return (
        <Container>
            <Header>
                <Content>
                    <img
                        src="https://imobiliariarazao.com.br/imgs/imboliaria-com-mais-imoveis.png"
                        alt=""
                    />
                    <nav>
                        <ul>
                            <Link to="/dashboard">
                                <li>Inicio</li>
                            </Link>
                            <Link to="#">
                                <li>Inquilinos</li>
                            </Link>
                            <Link to="#">
                                <li>Imóveis</li>
                            </Link>
                            <Link to="/tenant">
                                <li>Locação</li>
                            </Link>
                            <Link to="#">
                                <li>Recibos</li>
                            </Link>
                        </ul>
                    </nav>
                    <div>
                        <div className="profile">
                            <strong>{user.nome}</strong>
                            <span>Meu perfil</span>
                        </div>
                        <img
                            src="https://pps.whatsapp.net/v/t61.24694-24/119278141_629730011069398_7579857181973412486_n.jpg?ccb=11-4&oh=01_AdT4Roq1yhaKo-QF0LGeknD4X4DSOFxzlvpBio_6IGhpxw&oe=63F4C79C"
                            alt=""
                        />
                    </div>
                </Content>
            </Header>
            <Outlet />
        </Container>
    );
}

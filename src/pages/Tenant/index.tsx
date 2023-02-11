import { Container, TenantsList } from "./styles";

export function Tenant() {
    return (
        <Container>
            <h1>Meus inquilinos</h1>

            <TenantsList>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>RG</th>
                            <th>CPF</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>William José Dias</td>
                            <td>25.254.25-45</td>
                            <td>256.545.858.25</td>
                            <td>william@gmail.com.br</td>
                            <td>19 98855-2211</td>
                        </tr>
                        <tr>
                            <td>William José Dias</td>
                            <td>25.254.25-45</td>
                            <td>256.545.858.25</td>
                            <td>william@gmail.com.br</td>
                            <td>19 98855-2211</td>
                        </tr>
                        <tr>
                            <td>William José Dias</td>
                            <td>25.254.25-45</td>
                            <td>256.545.858.25</td>
                            <td>william@gmail.com.br</td>
                            <td>19 98855-2211</td>
                        </tr>
                        <tr>
                            <td>William José Dias</td>
                            <td>25.254.25-45</td>
                            <td>256.545.858.25</td>
                            <td>william@gmail.com.br</td>
                            <td>19 98855-2211</td>
                        </tr>
                    </tbody>
                </table>
            </TenantsList>
        </Container>
    );
}

import Paragrafo from "../Paragrafo";
import Titulo from "../titulo";

import { Card, LinkBotao } from './styles'

const ProjetoCinco = () => (
    <Card>
        <Titulo>Projeto E-Food restaurante digital</Titulo>
        <Paragrafo tipo="secundario"> Pagina criada com uso de React e TypeScript com tecnologias React-Router-Dom, Styled-Components, React-Redux</Paragrafo>
        <LinkBotao href="https://front-end-final-project-flame.vercel.app/" target="_blank"> E-Food </LinkBotao>
    </Card>
)

export default ProjetoCinco

import ProjetoUm from "../../components/ProjetoUm";
import ProjetoDois from "../../components/ProjetoDois";
import ProjetoTres from "../../components/ProjetoTres";
import ProjetoQuatro from "../../components/ProjetoQuatro";
import ProjetoCinco from "../../components/ProjetoCinco";

import Titulo from "../../components/titulo";

import { Lista } from './styles'

const Projetos = () => (
    <section>
        <Titulo fontSize={16}>Projetos</Titulo>
        <Lista>
            <li>
                <ProjetoUm />
            </li>
            <li>
                <ProjetoDois />
            </li>
            <li>
                <ProjetoTres />
            </li>
            <li>
                <ProjetoQuatro />
            </li>
            <li>
                <ProjetoCinco />
            </li>
        </Lista>
    </section>
)

export default Projetos

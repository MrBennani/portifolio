import Titulo from "../../components/titulo";
import Paragrafo from "../../components/Paragrafo";
import { Githubsecao } from "./styles";

const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo="secundario">
            Olá, Eu sou Mr. Bennani, ou Victor Bonini um jovem aspirante a desenvolvidor, e este é meu portifolio com meus projetos que estou sempre atualizando conforme minhas habilidades melhoram. Sinta se livre para olhar meus projetos ou entrar em contato pelo meu LinkPage.
        </Paragrafo>
        <Githubsecao>
            <img src="https://github-readme-stats.vercel.app/api?username=CapyvaraPaulista&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=CapyvaraPaulista&layout=compact&langs_count=7&theme=dracula"/>
        </Githubsecao>
    </section>
)

export default Sobre

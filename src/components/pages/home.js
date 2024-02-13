import Styles from './Home.module.css'
import savings from '../../img/project.jpg'
import LinkButton from '../layout/LinkButton';

function Home(){

    return(
        <section className = {Styles.home_container}>
            <h1>
                Bem-vindo a <span>Qintess</span>
            </h1>
            <p>Sistema de Gerenciamento de Projeto</p>
            <LinkButton to ="/NewProject" text = "Criar Projeto"/>
            <img src={savings} alt="Costs"/>
        </section>
    )
}
export default Home; 
import { Link } from 'react-router-dom'

import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/qintess.jpg'
function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to = "/">
                    <img src= {logo} alt = "Qintess"></img>
                </Link>
                <ul className = {styles.list}>

                    <li className = {styles.item}>
                        <Link to="/">Home</Link>
                    </li>

                    <li className = {styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>

                    <li className = {styles.item}>
                        <Link to="https://qintess.com/" target='_blank'>Empresa</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar
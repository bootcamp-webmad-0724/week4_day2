import './Navigation.css'
import logo from './../../assets/react.svg'

const Navigation = () => {

    return (
        <header className='Navigation'>

            <img src={logo} alt="Logotipo" />

            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Alumnos</a></li>
                    <li><a href="#">Centros</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Navigation
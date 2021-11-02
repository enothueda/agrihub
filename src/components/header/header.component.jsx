import { Link } from 'react-router-dom'

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            LOGO
        </Link>
        <div className='options'>
            <Link className='option' to='/main'>
                MAIN
            </Link>
            <Link className='option' to='/registros'>
                REGISTROS
            </Link>
            <Link className='option' to='/services'>
                SERVICIOS
            </Link>
            <Link className='option' to='/contact'>
                CONTACTO
            </Link>
        </div>
    </div>
);

export default Header;
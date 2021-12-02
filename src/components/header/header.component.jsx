import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux'

import './header.styles.scss';

const Header = ({ currentUser }) => {
    console.log('header user', currentUser)
    return (
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
            {
                currentUser
                ? <div className='option' onClick={() => signOut(auth)}>SALIR</div>
                : <Link className='option' to='/signin'>
                    INGRESAR
                </Link>
            }
        </div>
    </div>
);
}
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
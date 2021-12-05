import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(Header);
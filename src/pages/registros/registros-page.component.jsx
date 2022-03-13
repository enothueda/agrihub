import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectRegisterRoute } from '../../redux/directory/directory.selectors';

import RegistrosPreview from '../../components/registros-preview/registros-preview.component';

import './registros.styles.scss';

const RegistrosPage = ({ registerMenu }) => {
    console.log(registerMenu)
    return(
    <div className='registros-page'>        
        <RegistrosPreview {...registerMenu} />        
    </div>
)
}

const mapStateToProps = createStructuredSelector({
    registerMenu: selectRegisterRoute
})

export default connect(mapStateToProps)(RegistrosPage);
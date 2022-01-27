import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import RegistrosPreview from '../../components/registros-preview/registros-preview.component';

import './registros.styles.scss';

const RegistrosPage = ({ categories }) => (
    <div className='registros-page'>
        <h1>Pagina de Registro</h1>
        {
            categories.map(data => <RegistrosPreview key={data.id} {...data} />)
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    categories: selectDirectorySections
})

export default connect(mapStateToProps)(RegistrosPage);
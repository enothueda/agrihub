import RegistrosPreview from '../../components/registros-preview/registros-preview.component';
import CATEGORIES from '../main/main-categories';

import './registros.styles.scss';

const RegistrosPage = () => (
    <div className='registros-page'>
        <h1>Pagina de Registro</h1>
        {
            CATEGORIES.map(data => <RegistrosPreview key={data.id} {...data} />)
        }
    </div>
);

export default RegistrosPage;
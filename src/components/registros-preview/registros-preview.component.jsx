
import './registros-preview.styles.scss';

const RegistrosPreview = ({ title, forms }) => (
    <div className='registros-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                forms.map(bitacora => 
                    <div key={bitacora.id}>{bitacora.name}</div>
                    )
            }
        </div>
    </div>
);

export default RegistrosPreview;
import './homepage.styles.scss';

const HomePage = () => {

    return(
        <div className='homepage'>
            <h1>Welcome to Agrihub</h1>
            <div className='directory-menu'>                
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>BITACORAS</h1>
                        <span className='subtitle'>AGREGAR REGISTROS</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>COSECHA</h1>
                        <span className='subtitle'>AGREGAR REGISTROS</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>INVENTARIO</h1>
                        <span className='subtitle'>AGREGAR REGISTROS</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>RANCHOS</h1>
                        <span className='subtitle'>CONFIGURAR RANCHOS</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>REPORTES</h1>
                        <span className='subtitle'>VER REPORTES</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
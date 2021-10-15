import './menu-item.styles.scss';

const MenuItem = ({ title, imgUrl }) => (
    <div className='menu-item'>
        <div className='background-image' style={{backgroundImage: `url(${imgUrl})`}}/>
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>INGRESAR</span>
        </div>
    </div>
);

export default MenuItem;
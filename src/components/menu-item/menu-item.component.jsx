import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imgUrl, linkUrl, history, match }) => (
    <div className='menu-item' onClick={()=> history.push(`${match.url}${linkUrl}`)} >
        <div className='background-image' style={{backgroundImage: `url(${imgUrl})`}}/>
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>INGRESAR</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
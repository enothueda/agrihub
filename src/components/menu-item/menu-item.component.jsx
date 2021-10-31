import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imgUrl, routeName, history, match }) => (
    <div className='menu-item' onClick={()=> history.push(`${match.url}/${routeName}`)} >
        <div className='background-image' style={{backgroundImage: `url(${imgUrl})`}}/>
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
        </div>
    </div>
);

export default withRouter(MenuItem);
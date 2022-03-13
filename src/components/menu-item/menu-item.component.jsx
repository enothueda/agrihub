import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setMainRoute } from '../../redux/directory/directory.actions';

import './menu-item.styles.scss';

const MenuItem = ({ title, imgUrl, routeName, history, match, setMainRoute }) => (
    <div 
        className='menu-item' 
        onClick={()=> {
            setMainRoute(routeName);
            history.push(`${match.url}/${routeName}`);
        }} 
    >
        <div className='background-image' style={{backgroundImage: `url(${imgUrl})`}}/>
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    setMainRoute: mainRoute => dispatch(setMainRoute(mainRoute))
})

export default connect(null, mapDispatchToProps)(withRouter(MenuItem));
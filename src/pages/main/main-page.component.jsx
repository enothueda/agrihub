import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Directory from '../../components/directory/directory.component';
import RegistrosPage from '../../pages/registros/registros-page.component';

import { selectDirectoryMainRoute } from '../../redux/directory/directory.selectors';

import './main-page.styles.scss';

const MainPage = ({ match, mainRoute }) => (
    <div className='main-page'>        
        <Route exact path={`${match.path}`} component={Directory} />
        <Route path={`${match.path}/${mainRoute}`} component={RegistrosPage} />        
    </div>

);

const mapStateToProps = createStructuredSelector({
    mainRoute: selectDirectoryMainRoute
})


export default connect(mapStateToProps)(MainPage);
import Directory from '../../components/directory/directory.component';

import CATEGORIES from './main-categories';

import './main-page.styles.scss';

const MainPage = () => (
    <div className='main-page'>
        <h1 className='title'>Menu Principal</h1>
        <Directory sections={CATEGORIES}/>
    </div>

);

export default MainPage;
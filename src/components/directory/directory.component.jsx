import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
    const sections = [
        {
            title: 'bitacoras',
            imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 1
        },
        {
            title: 'cosecha',
            imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 2
        },
        {
            title: 'inventario',
            imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 3
        },
        {
            title: 'ranchos',
            imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 4
        },
        {
            title: 'reportes',
            imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 5
        },
        {
            title: 'planeacion',
            imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            id: 6
        }
    ]

    return (
        <div className='directory-menu'>                
            {
                sections.map(({ title, imgUrl, id }) => 
                    <MenuItem key={id} title={title} imgUrl={imgUrl} />)
            }
        </div>
    )
};

export default Directory;

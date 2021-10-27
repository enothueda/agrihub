import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
    const sections = [
        {
            title: 'bitacoras',
            imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 1,
            linkUrl: 'bitacoras'
        },
        {
            title: 'cosecha',
            imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 2,
            linkUrl: ''
        },
        {
            title: 'inventario',
            imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 3,
            linkUrl: ''
        },
        {
            title: 'ranchos',
            imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 4,
            linkUrl: ''
        },
        {
            title: 'reportes',
            imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 5,
            linkUrl: ''
        },
        {
            title: 'planeacion',
            imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            id: 6,
            linkUrl: ''
        }
    ]

    return (
        <div className='directory-menu'>                
            {
                sections.map(({ id, ...otherSectionProps }) => 
                    <MenuItem key={id} {...otherSectionProps} />)
            }
        </div>
    )
};

export default Directory;

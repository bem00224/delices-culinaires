import React from 'react';
import Title from '../../reusable-ui/Title';
import Cards from '../../reusable-ui/Cards';

const Menu = ({title, data, basePath= ''}) => {
    return (
        <div className='section-cards'>
            <Title title={title} />
            <div className='section-cards-container'>
                {
                    data.map(({id, title, imageSource}) => (
                        <Cards
                            key={id}
                            to={`${basePath}/${title}`}
                            image={imageSource}
                            title={title}
                        />
                    ) )
                }
            </div>
        </div>
    );
}

export default Menu;

import React from 'react';
import Title from '../../reusable-ui/Title';
import Cards from '../../reusable-ui/Cards';
import "../../../style/Menu.css"

const Menu = ({title, data, basePath= '', withHeart=false }) => {
    return (
        <div className='section-cards'>
            <Title title={title} />
            <div className='section-cards-container'>
                <div className='section-cards-detail'>
                    {
                        data.map(({id, title, imageSource}) => (
                            <Cards
                                key={id}
                                to={`${basePath}/${title}`}
                                image={imageSource}
                                title={title}
                                withHeart={withHeart}
                                id={id}
                            />
                        ) )
                    }
                </div>
            </div>
        </div>
    );
}

export default Menu;

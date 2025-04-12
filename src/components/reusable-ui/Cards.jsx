import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Cards.css'

const Cards = ({to, image, title}) => {
    return (
        <>
          <Link to={to} className='card-link'>
            <div className='card-item'>
                {image && <img src={image} alt={title} className='card-img' />}
                <h3 className='card-title'>{title}</h3>
            </div>
          </Link>  
        </>
    );
}

export default Cards;
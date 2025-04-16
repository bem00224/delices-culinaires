import React, { useState } from 'react';
import '../../style/TopFood.css'
import { fakeMenu } from '../../fakeData/fakeMenu';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import Cards from '../reusable-ui/Cards';

const TopFood = () => {
    const [topfood, setTopfood] = useState(fakeMenu.TopFood)
    return (
        <div className='topfood'>
            <div className='topfood-description'>
                <h3 className='topfood-title'>Top recettes</h3>
            </div>
            <div className='topfood-card'>
                <div className='topfood-card-content'>
                    <div className='topfood-card-detail'>
                        {
                            topfood.map((top) => {
                                return (
                                    <Cards key={top.id} image={top.imageSource} title={top.title} to={`/top-food/${top.title}`} />
                                ) 
                            } )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopFood;

/*(
                                    <>
                                        <Link to={`/top-food/${top.title}`} key={top.id}>
                                            <div className='topfood-card-description'>
                                                <button className='topfood-card-btn'>
                                                    <CiHeart className='topfood-card-heart' />
                                                </button>
                                                <img className='topfood-card-image' src={top.imageSource} alt={top.title} />
                                                <h3 className='topfood-card-title'>{top.title}</h3>
                                            </div>
                                        </Link>
                                    </>
                                )*/
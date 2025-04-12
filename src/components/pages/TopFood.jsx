import React, { useState } from 'react';
import '../../style/TopFood.css'
import { fakeMenu } from '../../fakeData/fakeMenu';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";

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
                                    <>
                                        <Link to='/top-food' key={top.id}>
                                            <div className='topfood-card-description'>
                                                <button className='topfood-card-btn'>
                                                    <CiHeart className='topfood-card-heart' />
                                                </button>
                                                <img className='topfood-card-image' src={top.imageSource} alt={top.title} />
                                                <h3 className='topfood-card-title'>{top.title}</h3>
                                            </div>
                                        </Link>
                                    </>
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

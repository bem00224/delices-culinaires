import React from 'react';
import '../../style/Banner.css'
import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-content'>
                <form className='formulaire'>
                    <div className='formulaire-content'>
                        <input type='search' id='search_input' placeholder='Je cherche une recette, un ingrédient...' className='input-search'/>
                        <div className='icon-wrapper'>
                            <FaSearch className='search-icon' />
                        </div>
                    </div>
                    <div className='btn-search'>
                        <button type='submit' className='button-search'>Rechercher</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Banner;

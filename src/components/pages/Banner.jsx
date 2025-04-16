import React, { useState } from 'react';
import '../../style/Banner.css'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { fakeMenu } from '../../fakeData/fakeMenu';

const Banner = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const lowerSearch = searchValue.trim().toLowerCase();

        if (!lowerSearch) return;

        let foundRecipe = null;

        // Cherche dans chaque catégorie
        fakeMenu.Category.forEach(category => {
            const match = category.recettes?.find(recette =>
                recette.title.toLowerCase().includes(lowerSearch)
            );
            if (match) foundRecipe = { ...match, categoryTitle: category.title };
        });

        if (foundRecipe) {
            navigate(`/category/${foundRecipe.categoryTitle}/${foundRecipe.id}`);

        } else {
            alert("Recette introuvable !");
        }
    };
    return (
        <div className='banner'>
            <div className='banner-content'>
                <form className='formulaire' onSubmit={handleSubmit}>
                    <div className='formulaire-content'>
                        <input 
                            type='search' 
                            id='search_input' 
                            placeholder='Je cherche une recette, un ingrédient...' 
                            className='input-search' 
                            value={searchValue} 
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
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

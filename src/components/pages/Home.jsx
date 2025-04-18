import React, { useState }  from 'react';
import Banner from './Banner';
import '../../style/Home.css'
import Category from './Category';
import CurrentNews from './CurrentNews';
import TopFood from './TopFood';
import Recipes from './Recipes';
//import News from './News';
import SpecialRecipes from './SpecialRecipes';

import { fakeMenu } from '../../fakeData/fakeMenu';
import RecipeContext from '../../context/RecipeContext';

const Home = () => {
    //state
    const [recipes, setRecipes] = useState(fakeMenu);
    //comportements
    const recipeContextValue = {
        recipes,
        setRecipes
    }
    //Affichage
    return (
        <div className='home'>
            <RecipeContext.Provider value={recipeContextValue} >
                <Banner/>
                <Category/>
                <CurrentNews />
                <TopFood />
                {/*<News />*/}
                <Recipes/>
                <SpecialRecipes />
            </RecipeContext.Provider>
        </div>
    );
}

export default Home;

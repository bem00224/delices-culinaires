import React from 'react';
import Banner from './Banner';
import '../../style/Home.css'
import Category from './Category';
import SpecialRecipes from './SpecialRecipes';
//import RecipeContext from '../../context/RecipeContext';
//import { fakeMenu } from '../../fakeData/fakeMenu';
import CurrentNews from './sections/CurrentNews';
import TopFood from './sections/TopFood';
import Recipes from './sections/Recipes';
import News from './sections/News';

const Home = () => {
    //state
    //comportements
    //Affichage
    return (
        <div className='home'>
            <Banner/>
            <Category/>
            <CurrentNews />
            <TopFood />
            <News />
            <Recipes/>
            <SpecialRecipes />
        </div>
    );
}

export default Home;

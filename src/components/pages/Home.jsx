import React from 'react';
import Banner from './Banner';
import '../../style/Home.css'
import Category from './Category';
import CurrentNews from './CurrentNews';
//import TopFood from './TopFood';
import Recipes from './Recipes';

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            {/*<Category/>*/}
            <CurrentNews />
            {/*<TopFood />*/}
            {/*<Recipes/>*/}
        </div>
    );
}

export default Home;

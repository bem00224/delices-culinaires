import React from 'react';
//import '../../style/TopFood.css'
import { fakeMenu } from '../../fakeData/fakeMenu';
//import { Link } from 'react-router-dom';
//import { CiHeart } from "react-icons/ci";
import Menu from './sections/Menu';

const TopFood = () => {
    
    return (
        <Menu data={fakeMenu.TopFood} title="Top recettes" basePath='/top-food' />
    );
}

export default TopFood;

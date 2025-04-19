import React from 'react';
//import '../../style/Recipes.css'
import Menu from './Menu';
import { fakeMenu } from '../../../fakeData/fakeMenu';

const Recipes = () => {
    
    return (
        <Menu title="Recettes" data={fakeMenu.Recipes} basePath='/recipes'/>
    );
}

export default Recipes;

import React from 'react';
import { fakeMenu } from '../../fakeData/fakeMenu';
//import '../../style/Recipes.css'
import Menu from './sections/Menu';

const Recipes = () => {
    
    return (
        <Menu title="Recettes" data={fakeMenu.Recipes} basePath='/recipes'/>
    );
}

export default Recipes;

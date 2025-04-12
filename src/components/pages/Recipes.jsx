import React, { useState } from 'react';
import { fakeMenu } from '../../fakeData/fakeMenu';
import Cards from '../reusable-ui/Cards';
import '../../style/Recipes.css'

const Recipes = () => {
    const [recipes, setRecipes] = useState(fakeMenu.Recipes)
    return (
        <div className='recipes'>
            <div className='recipes-description'>
                <h3 className='recipes-title'>Recettes</h3>
            </div>
            <div className='recipes-card'>
                <div className='recipes-card-content'>
                    <div className='recipes-card-detail' >
                        {
                            recipes.map((recipe) => (
                                <Cards 
                                    to={"/recipes"}
                                    key={recipe.id}
                                    image={recipe.imageSource}
                                    title={recipe.title}
                                />
                            ) )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipes;

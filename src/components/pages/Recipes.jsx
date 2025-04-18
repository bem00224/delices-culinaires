import React, { useState } from 'react';
import { fakeMenu } from '../../fakeData/fakeMenu';
import Cards from '../reusable-ui/Cards';
import '../../style/Recipes.css'
import Title from '../reusable-ui/Title';

const Recipes = () => {
    const [recipes, setRecipes] = useState(fakeMenu.Recipes)
    return (
        <div className='recipes'>
            <Title title="Recettes" />
            <div className='recipes-card'>
                <div className='recipes-card-content'>
                    <div className='recipes-card-detail' >
                        {
                            recipes.map((recipe) => (
                                <Cards 
                                    to={`/recipes/${recipe.title}`}
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

import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from 'styled-components';

const IngredientsSection = ({currentItem}) => {
    //state
    const [peopleCount, setPeopleCount] = useState(6) // Valeur par défaut
    const baseCount = 6; // Nombre de personnes de référence
    //comportements
    const handleDecrement = () => {
      if(peopleCount > 1 ) {
        setPeopleCount( prev => prev - 1)
      }
    }
    const handleIncrement = () => {
      setPeopleCount(prev => prev + 1)
    }
    
    // Calculer les quantités en fonction du nombre de personnes
    const getAdjustedQuantity = (quantity) => {
      return ((quantity * peopleCount ) /baseCount.toFixed(2) )
    }
    
    
    //affichage
    return (
        <IngredientsSectionStyled>
            <h3 className='details-section-title'>Ingrédients</h3>
            <div className='details-section-nbre'>
                <button className='details-section-moin' onClick={handleDecrement}><FaMinus/></button>
                <div className='details-section-personne'>
                    <span>{peopleCount}</span>
                    <span>personnes</span>
                </div>
                <button className='details-section-plus' onClick={handleIncrement}><FaPlus/></button>
            </div>
            <div className="details-section">
                <ul>
                {currentItem.ingredients.map((ingredient, index) => (
                    <li key={index}>
                    {ingredient.name}
                    {ingredient.quantity && ` : ${getAdjustedQuantity(ingredient.quantity)} ${ingredient.unit || ''}`}
                    </li>
                ))}
                </ul>
            </div>
        </IngredientsSectionStyled>
    );
}

export default IngredientsSection;
const IngredientsSectionStyled = styled.div`
    .details-section-title {
        color: rgb(255, 66, 105);
        font-size: 1.3rem;
        margin: 30px 0px 20px;
    }
    .details-section-nbre {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        min-width: 180px;
        height: 40px;
        font-family: "Open Sans", sans-serif;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(201, 189, 187);
        border-radius: 8px;
        user-select: none;
        width: 18%;
        margin-bottom: 20px;
        .details-section-moin {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            border: none;
            border: 1px solid rgb(201, 189, 187);
            background-color: transparent;
            font-size: 1rem;
            color: rgb(133, 125, 125);
            cursor: pointer;
            width: 33px;
            transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .details-section-plus {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            border: none;
            border-left: 1px solid rgb(201, 189, 187);
            background-color: transparent;
            font-size: 1rem;
            color: rgb(133, 125, 125);
            cursor: pointer;
            width: 33px;
            transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
            border-color: initial;
        }
        .details-section-personne {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            font-size: 1em;
            span:first-child {
                margin-right: 5px;
                color: rgb(255, 66, 105);
                font-weight: 700;
            }
        }
    }
`;
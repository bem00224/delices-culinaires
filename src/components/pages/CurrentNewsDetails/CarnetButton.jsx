import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CiHeart } from "react-icons/ci";
import { toast } from 'react-toastify';

const CarnetButton = ({ recipe }) => {
    //state
    const [isSaved, setIsSaved] = useState(false)
    //comportements
    useEffect(() => {
        if (!recipe || !recipe.id) return;
    
        const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
        const exists = saved.find(item => item.id === recipe.id);
        if (exists) {
            setIsSaved(true);
        }
    }, [recipe]);
    
    const handleSave = () => {
        if (!recipe || !recipe.id) {
            toast.error("Impossible de sauvegarder cette recette.");
            return;
        }
    
        const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
        const exists = saved.find(item => item.id === recipe.id);
    
        if (exists) {
            toast.info("Cette recette est déjà sauvegardée !");
        } else {
            const updated = [...saved, recipe];
            localStorage.setItem("savedRecipes", JSON.stringify(updated));
            setIsSaved(true);
            toast.success("Recette sauvegardée !");
        }
    };
    //affichage
    
    return (
        <CarnetButtonStyled>
            <button className='carnet-details-btn' onClick={handleSave}>
                <CiHeart className='icon-heart' />
                {isSaved ? "Sauvegardée" : "Mon carnet"}
            </button>
        </CarnetButtonStyled>
    );
}

export default CarnetButton;
const CarnetButtonStyled = styled.div`
    margin-left: 60px;
    .carnet-details-btn {
        background-color: rgb(255, 66, 105);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        gap: 10px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
        transition: 0.15s ease-in-out;
        position: relative;
        left: 48%;
        transform: translateX(-50%) translateY(0px);
        padding: 0px 20px;
        font-size: 1.2rem;
        border-radius: 15px;
        border: none;
        cursor: pointer;
        text-align: center;
        padding: 14px 24px;
        height: 50px;
        color: white;
        font-weight: 700;
        font-size: 1.2rem;
        transition: 1s;
        .icon-heart {
            font-size: 1.3rem;
        }
        &:hover {
            background-color: rgb(156, 22, 49);
        }
    }
`;
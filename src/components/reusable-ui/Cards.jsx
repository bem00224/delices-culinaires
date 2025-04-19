import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/Cards.css'
import { CiHeart } from "react-icons/ci";
import { toast } from 'react-toastify';

const Cards = ({to, image, title, withHeart, id}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSaveRecipe = (e) => {
    e.preventDefault(); // ⚠️ Pour éviter que le clic redirige
    const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const alreadyExists = saved.some(recipe => recipe.id === id);
    if (!alreadyExists) {
      const newRecipe = { id, title, imageSource: image };
      localStorage.setItem("savedRecipes", JSON.stringify([...saved, newRecipe]));
      toast.success("Recette enregistrée !");
    } else {
      toast.info("Recette déjà enregistrée !");
    }
  };
  
    return (
        <>
          <Link to={to} className='card-link' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className='card-item'>
                {withHeart && isHovered && (
                  <button className='heart-container' onClick={handleSaveRecipe}> <CiHeart className='heart-icon'/> </button>
                ) }
                {image && <img src={image} alt={title} className='card-img' />}
                <h3 className='card-title'>{title}</h3>
            </div>
          </Link>  
        </>
    );
}

export default Cards;

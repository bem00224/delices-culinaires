import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../../style/CategoryDetails.css';
import { fakeMenu } from '../../../fakeData/fakeMenu';

const CategoryDetails = () => {
  const { title } = useParams();


  /*const selectedCategory = fakeMenu.Category.find(
    (category) => category.title.toLowerCase() === title.toLowerCase()
  );*/
  const category = fakeMenu.Category.find(cat => cat.title === title);
  console.log(category)

  if(!category) {
    return <div className='not-found'>Catégorie introuvable 😢</div>
  }

  //const {recipesByCategory} = selectedCategory.recettes || [];
  const recettes = category.recettes || [];
  

  return (
    <div className="category-details">
      <div className='category-description'>
        <h2 className="category-details-title">Recettes : {category.title}</h2>
        <p className="category-details-count"> {recettes.length} recette(s) trouvée(s) </p>
      </div>
      

      <div className="recette-list">
        {recettes.length===0 ? (
          <p>Pas de recette disponible pour cette categorie.</p>
        ) : (recettes.map((recette) => (
          <div key={recette.id} className="recette-card">
            <Link to={`/category/${title}/${recette.id}`}>
              <div className='recette-image-content'><img src={recette.imageSource} alt={recette.nom} className="recette-image" /></div>
            </Link>
            <h3 className="recette-title">{recette.title}</h3>
          </div>
        )))}
      </div>
    </div>
  );
};

export default CategoryDetails;

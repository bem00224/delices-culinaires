import React from 'react';
import { useParams } from 'react-router-dom';
import { fakeMenu } from '../../fakeData/fakeMenu';
import '../../style/CurrentNewsDetails.css';
import TitleBar from './CurrentNewsDetails/TitleBar';
import ImageSection from './CurrentNewsDetails/ImageSection';
import CarnetButton from './CurrentNewsDetails/CarnetButton';
import IngredientsSection from './CurrentNewsDetails/IngredientsSection';
import InstructionsSection from './CurrentNewsDetails/InstructionsSection';

const CurrentNewsDetails = () => {
  const { title } = useParams();

  // Trouver l'élément correspondant
  const currentItem = fakeMenu.CurrentNews.find((item) => item.title === decodeURIComponent(title));

  if (!currentItem) { return <p className="not-found">Recette introuvable.</p>; }

  return (
    <div className="currentnews-details">
      <TitleBar title={currentItem.title} />
      <div className='currentnews-details-bottom'>
        <ImageSection imageSource={currentItem.imageSource} title={currentItem.title} preparationTime={currentItem.preparationTime} cookingTime={currentItem.cookingTime} />
        <div className='currentnews-details-bottom-description'>
            <CarnetButton recipe={currentItem}/>
            <div className='currentnews-details-section'>
                <IngredientsSection currentItem={currentItem}/>
                <InstructionsSection currentItem={currentItem}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentNewsDetails;

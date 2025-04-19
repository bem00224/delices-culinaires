// src/components/special/SpecialRecipes.jsx
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../../style/SpecialRecipes.css';
import { fakeMenu } from '../../fakeData/fakeMenu';
import Cards from '../reusable-ui/Cards';
import Title from '../reusable-ui/Title';

const SpecialRecipes = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
  });

  const [prevBtnVisible, setPrevBtnVisible] = useState(false);
  const [nextBtnVisible, setNextBtnVisible] = useState(true);

  const specialRecipes = fakeMenu.SpecialRecipes;

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnVisible(emblaApi.canScrollPrev());
    setNextBtnVisible(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(); // Mise à jour initiale
    emblaApi.on('select', onSelect); // À chaque scroll
    emblaApi.on('reInit', onSelect); // Si embla se réinitialise

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className='recipes-special'>
      <Title title="Recettes Anti-Gaspillage" />

      <div className='embla'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {specialRecipes.map((recipe) => (
              <div className='embla__slide' key={recipe.id}>
                <Cards
                  to={`/special-recipes/${recipe.title}`}
                  image={recipe.imageSource}
                  title={recipe.title}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='carousel-buttons'>
          {prevBtnVisible && (
            <button onClick={scrollPrev} className='carousel-btn'>◀</button>
          )}
          {nextBtnVisible && (
            <button onClick={scrollNext} className='carousel-btn'>▶</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialRecipes;

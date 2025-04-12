import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../style/CategoryPage.css'
import { fakeMenu } from '../../fakeData/fakeMenu';
import Cards from '../reusable-ui/Cards';

const CategoryPage = () => {
    //state
    const [selectedCategory, setSelectedCategory] = useState(null)
    const { title } = useParams()

    useEffect(() => {
      const category = fakeMenu.Category.find((cat) => cat.title=== title )
      setSelectedCategory(category)
    }, [title])

    if(!selectedCategory) return <p>Catégorie introuvable</p>
    
    //components
    //affichage
    return (
        <div className='category-page'>
            <div className='category-page-top'>
                <h2 className='category-page-title'>{selectedCategory.title}</h2>
                <p className='category-page-nbre'>10</p>
            </div>
            <div className='category-page-items'>
                <div>
                    <Link to={'/category-page'}>
                        <div className='category-page-description'>
                            {selectedCategory.items && selectedCategory.items.length > 0 ? (
                                selectedCategory.items.map((item) => (
                                    <Cards
                                        key={item.id}
                                        to={`/category/${item.title}`} // rediriger vers la formation individuelle
                                        image={item.image}
                                        title={item.title}
                                    />
                                ))
                            ) : (
                                <p>Aucun élément dans cette catégorie.</p>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;

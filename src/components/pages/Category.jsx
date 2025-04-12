import React, { useState } from 'react';
import { fakeMenu } from '../../fakeData/fakeMenu';
import '../../style/Category.css'
import { Link } from 'react-router-dom';

const Category = () => {
    //state
    const [category, setCategory] = useState(fakeMenu.Category)
    //comportements
    //affichage
    return (
        <div className='category'>
            {
                category.map((cat) =>  
                    <div key={cat.id}>
                        <Link to={`/category/${cat.title}`}>
                            <div className='category-container'>
                                <div className='category-detail'>
                                    <img className='category-image' src={cat.imageSource} alt={cat.title} />
                                    <h2 className='category-title'>{cat.title}</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export default Category;

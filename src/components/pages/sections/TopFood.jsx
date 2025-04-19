import React from 'react';
import Menu from './Menu';
import { fakeMenu } from '../../../fakeData/fakeMenu';

const TopFood = () => {
    
    return (
        <Menu data={fakeMenu.TopFood} title="Top recettes" basePath='/top-food' withHeart={true}/>
    );
}

export default TopFood;

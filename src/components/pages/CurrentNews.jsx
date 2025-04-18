import React from 'react';
import { fakeMenu } from '../../fakeData/fakeMenu';
import Menu from './sections/Menu';

const CurrentNews = () => {

  return (
    <Menu title="En ce moment" data={fakeMenu.CurrentNews} basePath="/current-news"/>
  );
};

export default CurrentNews;

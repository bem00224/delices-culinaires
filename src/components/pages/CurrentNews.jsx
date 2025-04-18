import React, { useState } from 'react';
import '../../style/CurrentNews.css';
import { fakeMenu } from '../../fakeData/fakeMenu';
import Cards from '../reusable-ui/Cards';
import Title from '../reusable-ui/Title';

const CurrentNews = () => {
  const [currentNews] = useState(fakeMenu.CurrentNews);

  return (
    <div className="current-news">
      <Title title="En ce moment" />
      <div className="currentnews-card">
        <div className="currentnews-card-content">
          <div className="currentnews-card-detail">
            {currentNews.map((item) => (
              <Cards
                key={item.id}
                to={`/current-news/${item.title}`}
                image={item.imageSource}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentNews;

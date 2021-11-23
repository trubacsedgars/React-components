import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './Carousel.scss';

const initialData = [
  {
    title: 'Georgia',
    subtitle: 'This is Georgia',
    img: '/Images/Georgia.jpeg',
  },
  {
    title: 'Italy',
    subtitle: 'This is Italy',
    img: '/Images/Italy.jpg',
  },
  {
    title: 'Lisbon',
    subtitle: 'This is Lisbon best city in the world',
    img: '/Images/Lisbon.jpeg',
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const increaseActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const decreaseActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel__image"
        style={{ backgroundImage: `url(${initialData[activeIndex].img})` }}
      >
        <div
          className="carousel__arrow-left"
          onClick={() => activeIndex > 0 && decreaseActiveIndex(activeIndex - 1)}
        >
          <span><FontAwesomeIcon icon={faChevronLeft} /></span>
        </div>
        <div className="carousel__content">
          <h1 className="carousel__content-heading">{initialData[activeIndex].title}</h1>
          <span className="carousel__content-content">{initialData[activeIndex].subtitle}</span>
        </div>
        <div
          className="carousel__arrow-right"
          onClick={() => activeIndex < initialData.length - 1
            && increaseActiveIndex(activeIndex + 1)}
        >
          <span><FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

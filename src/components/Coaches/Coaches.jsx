import Modal from './Modal';
import React, { useState } from 'react'; // Импортируйте useState
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {coaches} from './dataCoaches'
import './Coaches.css'

function GetCoach({image, title, description, more, onMoreClick}) {
  return (
    <div>
      <img className='coaches-image' src={image} alt='Coach'></img>
      <h4 className='coaches-h3'>{title}</h4>
      <p className='p-description'>{description}</p>
      <button className='button-coaches' onClick={onMoreClick}>{more}</button>
    </div>
  )
}

export default function Coaches() {
  const [currentSlide, setCurrentSlide] = useState(0); // Текущее состояние слайда
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState({});

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Показывать 3 элемента
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next), // Обновляем состояние текущего слайда перед изменением
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const lineStyle = {
    width: `${((currentSlide + 1) / coaches.length) * 20}%`, // ширина линии в зависимости от текущего слайда
    height: '4px',
    backgroundColor: '#230B34', // Цвет заполняемой линии
    transition: 'width 0.5s ease', // Плавное изменение ширины
  };

  const handleMoreClick = (coach) => {
    setSelectedCoach(coach);
    setModalOpen(true);
  };

  return (
    <section className="coaches">
      <div className="container">
        <h2>Профессиональные тренеры</h2>
        <Slider {...settings} >
          {coaches.map((coach) => (<GetCoach key={coach.title} {...coach} onMoreClick={() => handleMoreClick(coach)} />))}
        </Slider>
        <div className="slider-line" style={lineStyle} /> {/* Линия с динамическим стилем */}
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setModalOpen(false)}
          image={selectedCoach.image} // Передаем изображение 
          title={selectedCoach.title} 
          description={selectedCoach.description} 
        />
      </div>
    </section>
  )
}
import { useState } from 'react';
import { modalDescription } from './dataModal';
import Button from './Button';
import './Modal.css'
import facebook from '/Facebook.svg'
import instagram from '/Instagram.svg'

export default function Modal({ isOpen, onClose, image, title, description }) {

  const [content, setContent] = useState('click on me')
  
  function handleClick(type) {
    setContent(type)
  }
  
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className='modal-button' onClick={onClose}>Закрыть</button>
        <div className='modal-header'>
          <div className='modal-header-left'>
            <img className='modal-image' src={image} alt='Coach'></img>
          </div>
          <div className='modal-header-right'>
            <h2 className='modal-h2'>{title}</h2>
            <p className='p-description'>{description}</p>
            <div className='modal-icons'>
              <a href='#'><img className='facebook-icon' src={facebook} alt='Coach'></img></a>
              <a href='#'><img src={instagram} alt='Coach'></img></a>
            </div>
          </div>
        </div>

        <Button isActive={content === 'education'} selectedButton={() => handleClick('education')}>Образование</Button>
        <Button isActive={content === 'experience'} selectedButton={() => handleClick('experience')}>Опыт работы</Button>
        <Button isActive={content === 'reward'} selectedButton={() => handleClick('reward')}>Награды</Button>
        <div className='rectangle'></div>
        <p className='modalDescription'>{modalDescription[content]}</p>
      </div>
    </div>
  );
}
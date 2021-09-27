import React, { useLayoutEffect, useState } from 'react';
//import { SliderData } from './SliderData';
import Modal from "react-modal";

import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Icon } from '@iconify/react';
import windowClose from '@iconify/icons-fa-solid/window-close';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const ImageSliderstyle = styled.header`
.slider {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image {
    width: 1000px;
    height: 600px;
    border-radius: 10px;
  }
  
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  
  .left-arrow {
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  
  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const ImageSlider = ({ slides,isOpen,toggle }) => {
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState(true);
  const [modalclose, setModalcloseModal] = useState(true); 
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
 
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
const hadleClick = () =>{
  setModal(false);
} 

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const handle = useFullScreenHandle();
   return (
    <FullScreen handle={handle}>

 <Modal
 isOpen={  isOpen }
 style={customStyles}
 onRequestClose={toggle}
 
 >                    
      <ImageSliderstyle>

    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >

            {index === current && (
              <div >
                     <Icon style='float:right;' onClick={toggle} icon={windowClose} color="red" />
                <Button onClick={toggle} >close</Button>
              <img src={slide} alt='travel image' className='image' />
              </div>
            )}
          </div>
        );
      })}
    </section>
    </ImageSliderstyle>
    </Modal>
    </FullScreen>

  );
};

export default ImageSlider;
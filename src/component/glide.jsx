import React, { useEffect, useRef, useState } from 'react';
import {Text, Image, IconButton, Box} from '@chakra-ui/react'
import Glide from '@glidejs/glide';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {SlideImage} from '../SlideImage';



export const GlideComponent = () => {
  const glideRef = useRef(null);
  const [glideInstance, setGlideInstance] = useState(null);

  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      autoplay: 3000,
      gap: 0,
      hoverpause: true,
      perView: 1,
      animationDuration: 800,
      animationTimingFunc: 'linear',
    });

    setGlideInstance(glide);
    glide.mount();

    return () => glide.destroy();
  }, []);

  const handlePrev = () => {
    if (glideInstance) {
      glideInstance.go('<');
    }
  };

  const handleNext = () => {
    if (glideInstance) {
      glideInstance.go('>');
    }
  };

  const handleBulletClick = (index) => {
    if (glideInstance) {
      glideInstance.go(`=${index}`);
    }
  };
  return (
    <>
       <div className="glide" ref={glideRef} id="home">
      <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {SlideImage.map((image, index) => (
              <li key={image.id} className='glide__slide'>
                <Box>
                  <div className="center">
                     <div className="left">
                     <Image 
                      objectFit='cover'
                      boxSize='500px'
                      src={image.imageSrc} 
                      alt={`Slide ${index + 1}`}
                      />
                     </div>
                     <div className="right">
                     <q><Text color="#fff">{image.description}</Text></q>
                     </div>
                  </div>
                </Box>
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {SlideImage.map((_, index) => (
            <button
              key={index}
              className="glide__bullet"
              data-glide-dir={`=${index}`}
              onClick={() => handleBulletClick(index)}
            />
          ))}
        </div>
        <IconButton
          className="glide__prev"
          aria-label="Previous Slide"
          icon={<ChevronLeftIcon />}
          onClick={handlePrev}
          position="absolute"
          top="50%"
          left="2"
          transform="translateY(-50%)"
        />
        <IconButton
          className="glide__next"
          aria-label="Next Slide"
          icon={<ChevronRightIcon />}
          onClick={handleNext}
          position="absolute"
          top="50%"
          right="2"
          transform="translateY(-50%)"
        />
      </div> 
    </>
  )
}



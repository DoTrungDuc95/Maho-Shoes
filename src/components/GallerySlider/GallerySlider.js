import { useState, useEffect } from 'react';

import './GallerySlider.scss';

import mainGallery from '../../assets/images/banner-image-center@2x.jpg';
import leftGallery from '../../assets/images/banner-image-left@2x.jpg';
import rightGallery from '../../assets/images/banner-image-rignt@2x.jpg';
import add1 from '../../assets/images/Gửi ảnh - Cuộc đời của những kẻ tội đồ.jpg';

import arrowBut from '../../assets/images/arrow-icon.svg';

const GallerySlider = () => {
  //test
  const imgs = [mainGallery, rightGallery, leftGallery, add1];
  const length = imgs.length;

  const leftImgs = [imgs[length - 1], ...imgs];
  leftImgs.splice(length, 1);

  const rightImgs = [...imgs, imgs[0]];
  rightImgs.splice(0, 1);

  const loopImgs = [imgs[length - 1], ...imgs, imgs[0]];
  const rightLoopImgs = [rightImgs[length - 1], ...rightImgs, rightImgs[0]];
  const leftLoopImgs = [leftImgs[length - 1], ...leftImgs, leftImgs[0]];

  const loopLength = length + 2;

  let couter = 1,
    rightCounter = 1,
    leftCounter = 1;

  const nextImg = () => {
    if (couter >= loopLength - 1) return;

    const mainSlide = document.querySelector('#gallery-main');
    const rightSlide = document.querySelector('#gallery-right');
    const leftSlide = document.querySelector('#gallery-left');

    mainSlide.style.transition = 'all 0.5s';
    rightSlide.style.transition = 'all 0.5s';
    leftSlide.style.transition = 'all 0.5s';

    ++couter;
    ++rightCounter;
    ++leftCounter;

    mainSlide.style.transform = `translateX(-${(100 * couter) / loopLength}%)`;
    mainSlide.addEventListener('transitionend', () => {
      if (mainSlide.children[couter].id === 'last-clone') {
        mainSlide.style.transition = 'none';
        couter = loopLength - couter;
        mainSlide.style.transform = `translateX(-${
          (100 * couter) / loopLength
        }%)`;
      }
    });

    rightSlide.style.transform = `translateX(-${(100 * couter) / loopLength}%)`;
    rightSlide.addEventListener('transitionend', () => {
      if (rightSlide.children[rightCounter].id === 'last-clone') {
        rightSlide.style.transition = 'none';
        rightCounter = loopLength - rightCounter;
        rightSlide.style.transform = `translateX(-${
          (100 * rightCounter) / loopLength
        }%)`;
      }
    });

    leftSlide.style.transform = `translateX(-${(100 * couter) / loopLength}%)`;
    leftSlide.addEventListener('transitionend', () => {
      if (leftSlide.children[leftCounter].id === 'last-clone') {
        leftSlide.style.transition = 'none';
        leftCounter = loopLength - leftCounter;
        leftSlide.style.transform = `translateX(-${
          (100 * leftCounter) / loopLength
        }%)`;
      }
    });
  };

  const preImg = () => {
    if (couter <= 0) return;

    const mainSlide = document.querySelector('#gallery-main');
    const rightSlide = document.querySelector('#gallery-right');
    const leftSlide = document.querySelector('#gallery-left');

    mainSlide.style.transition = 'all 0.5s';
    rightSlide.style.transition = 'all 0.5s';
    leftSlide.style.transition = 'all 0.5s';

    --couter;
    --rightCounter;
    --leftCounter;

    mainSlide.style.transform = `translateX(-${(100 * couter) / loopLength}%)`;
    mainSlide.addEventListener('transitionend', () => {
      if (mainSlide.children[couter].id === 'first-clone') {
        mainSlide.style.transition = 'none';
        couter = length;
        mainSlide.style.transform = `translateX(-${
          (100 * couter) / loopLength
        }%)`;
      }
    });

    rightSlide.style.transform = `translateX(-${(100 * couter) / loopLength}%)`;
    rightSlide.addEventListener('transitionend', () => {
      if (rightSlide.children[rightCounter].id === 'first-clone') {
        rightSlide.style.transition = 'none';
        rightCounter = length;
        rightSlide.style.transform = `translateX(-${
          (100 * rightCounter) / loopLength
        }%)`;
      }
    });

    leftSlide.style.transform = `translateX(-${(100 * couter) / loopLength}%)`;
    leftSlide.addEventListener('transitionend', () => {
      if (leftSlide.children[leftCounter].id === 'first-clone') {
        leftSlide.style.transition = 'none';
        leftCounter = length;
        leftSlide.style.transform = `translateX(-${
          (100 * leftCounter) / loopLength
        }%)`;
      }
    });
  };

  const decrease = (pos) => {
    if (pos.children[couter].id === 'first-clone') {
      pos.style.transition = 'none';
      couter = length;
      pos.style.transform = `translateX(-${(100 * couter) / loopLength}%)`;
    }
  };

  const style = {
    width: `${loopLength * 100}%`,
    transform: `translateX(-${100 / loopLength}%)`,
  };

  const style2 = {
    width: `${loopLength * 300}%`,
    transform: `translateX(-${100 / loopLength}%)`,
  };

  const setId = (index) => {
    if (index === 0) return 'first-clone';
    if (index === length + 1) return 'last-clone';
    return null;
  };

  return (
    <div className="big">
      <div className="gallery">
        <div className="gallery-grid">
          <div id="gallery-left" className="gallery-main" style={style2}>
            {leftLoopImgs.map((img, i) => (
              <img key={i} src={img} id={setId(i)} />
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          <div id="gallery-main" className="gallery-main" style={style}>
            {loopImgs.map((img, i) => (
              <img key={i} src={img} id={setId(i)} />
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          <div id="gallery-right" className="gallery-main" style={style2}>
            {rightLoopImgs.map((img, i) => (
              <img key={i} src={img} id={setId(i)} />
            ))}
          </div>
        </div>
      </div>

      <button className="arror-pre" onClick={preImg}>
        <img src={arrowBut} />
      </button>
      <button className="arror-next" onClick={nextImg}>
        <img src={arrowBut} />
      </button>
    </div>
  );
};

export default GallerySlider;

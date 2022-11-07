import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItems.css';
const BannerItems = ({slide}) => {
    const {image , id , next , prev} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full my-0">
            <div className='carousel-img'>
                <img src={image} alt='' style={{height: '100%' , width: '100%'}} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-10 lg:left-24 top-1/3">
                <h1 className='text-white font-semibold lg:font-bold text-3xl lg:text-5xl'>Affordable<br />
                    Price for all<br />
                    Food</h1>
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-white font-semibold text-lg hidden lg:flex w-96 mt-5'>Choose your best meal</p>
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-10 lg:left-24 top-1/2 lg:top-2/3 justify-center">
             
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 bg-black bg-opacity-60">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-error border-none">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;
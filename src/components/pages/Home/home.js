import react, { Component, useState, useEffect, useRef } from 'react'
// import JSONDATA from './MOCK_DATA.json'
import './home.css'
import './slick.css'

// import { IFFT } from '@tensorflow/tfjs';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import SearchBar from '../../search/search'
import homeBanner from '../../../images/home-banner.jpg'

import Slider from 'react-slick';

const Home = () => {




    return (
        <>
            <div className="title">
                <h1 style={{ textAlign: 'center' }}>Discover Keyboards </h1>
            </div>

            <div className="HomeBanner" style={{ backgroundColor: '#81A6A4' }}>
                {/* <img src={homeBanner}
                    alt="HomeBanner"
                    width="100%"
                    height="100%">
                </img> */}
            </div>
            <SearchBar />
            <CarouselSlider />
        </>
    )
}




const CarouselSlider = () => {
    const CarouselRef = useRef();

    const [isNext, setNext] = useState(false);

    useEffect(() => {
        if (isNext === true) {
            //CarouselRef.current.slickNext();
            setNext(false);
        }
    }, [isNext]);



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="Carousel" style={{ display: 'block' }}>
            <Slider ref={CarouselRef}
                className="Slider1"
                {...settings}>
                <Slide data="https://stockx-assets.imgix.net/CSAssets/banner/1UKDiscoverPokemonSkyscrapingSellerFees/7_6_Pokemon_Promo_WebBanner_1.png?auto=compress,format" />
                <Slide data="https://stockx-assets.imgix.net/CSAssets/banner/5UKDISCOVERFOGDelivery2/6_3_FOGWebBanner.png?auto=compress,format" />

            </Slider>
        </div>
    )
}



const Slide = ({ data }) => {

    return (
        <div className="image">
            <img className="SliderImg" src={data} alt="carouselImage" />
        </div>

    )
}









export default Home;
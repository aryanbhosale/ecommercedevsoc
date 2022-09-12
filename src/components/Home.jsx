import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Products from './Products';

const Home = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='hero'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/accessories.jpg"
                        alt="Accessories"
                        height="670px"
                    />
                    <Carousel.Caption>
                        <h3 className='display-3 mb-0'>ACCESSORIES</h3>
                        <p>WATCHES, GLASSES, JEWELLERY & MUCH MORE</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/cosmetics.jpg"
                        alt="Fashion"
                        height="670px"
                    />

                    <Carousel.Caption>
                        <h3 className='display-3 mb-0'>COSMETICS</h3>
                        <p>ALL SKINCARE PRODUCTS UNDER ONE ROOF</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/headphones.jpg"
                        alt="Electronics"
                        height="670px"
                    />

                    <Carousel.Caption>
                        <h3 className='display-3 mb-0'>ELECTRONICS</h3>
                        <p>TOP BRANDS & GREAT SPECS IN NEW COLOURS</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Products />
        </div>
    );
}

export default Home;
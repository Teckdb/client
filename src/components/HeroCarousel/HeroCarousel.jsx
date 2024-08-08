import { Carousel, Button } from 'react-bootstrap';
import * as IMAGES from '../../conts/imageData'

function HeroCarousel() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES.HERO_IMG_1}
                    alt="First slide"
                />
                <Carousel.Caption className='custom-caption text-white fw-bold' >
                    <h2>Elevate Your Coffee Experience</h2>
                    <hr></hr>
                    <p>
                        Discover the finest specialty coffees sourced from the world's best farms.
                        Handpicked, expertly roasted, and delivered fresh to your door.
                        Experience rich, complex flavors with every cup and join a community of coffee lovers who demand the best.
                        Start your journey with us today.
                    </p>
                    <Button variant="outline-light">Shop Now</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES.HERO_IMG_2}
                    alt="Second slide"
                />
                <Carousel.Caption className='custom-caption text-white fw-bold'>
                    <h2>Savor the Art of Specialty Coffee</h2>
                    <hr></hr>
                    <p>Explore the world of specialty coffee, where every bean is a masterpiece.
                        From farm to cup, our curated selection offers exceptional flavors, handpicked and expertly roasted to perfection.
                        Elevate your coffee ritual with unique blends and single-origin treasures that awaken your senses.
                        Discover the finest coffee experience, delivered fresh to your door.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES.HERO_IMG_3}
                    alt="Third slide"
                />
                <Carousel.Caption className='custom-caption text-white fw-bold' >
                    <h2>Discover Your Perfect Brew</h2>
                    <hr></hr>
                    <p>
                        Dive into the world of specialty coffee with our carefully curated selection.
                        Sourced from the finest farms around the globe, each bean is roasted to perfection to bring out unique, rich flavors.
                        Whether you prefer a bold espresso or a smooth pour-over, we have the perfect coffee to elevate your daily ritual.
                        Shop now and experience coffee like never before.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HeroCarousel;
import Carousel from 'react-bootstrap/Carousel';
import oneCarouselImg from './../../assets/carousel-img/1.jpg'
import twoCarouselImg from './../../assets/carousel-img/2.jpg'
import threeCarouselImg from './../../assets/carousel-img/3.jpg'

function Home() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={oneCarouselImg}
                    alt="First slide"
                />
                <Carousel.Caption className='text-white fw-bold bg-dark'>
                    <h5>The Journey of Coffee Beans</h5>
                    <p>
                        Coffee is cultivated in tropical regions around the world,
                        primarily in countries like Brazil, Colombia, and Ethiopia.
                        The beans are harvested, processed, and shipped globally,
                        bringing diverse flavors to your cup. Each region imparts
                        unique characteristics to the beans, influenced by climate,
                        altitude, and soil.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={twoCarouselImg}
                    alt="Second slide"
                />
                <Carousel.Caption className='text-white fw-bold bg-dark'>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={threeCarouselImg}
                    alt="Third slide"
                />
                <Carousel.Caption className='text-white fw-bold bg-dark' >
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Home;
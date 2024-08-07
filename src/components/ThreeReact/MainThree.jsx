import { Canvas } from "@react-three/fiber"
import { ScrollControls } from '@react-three/drei'
import Carousel from "./Carousel"
import Rig from "./Rig"
import './util'

const MainThreeCarouselSelector = () => {
    return (
        <Canvas style={{ background: '#D2B48C' }} camera={{ position: [0, 0, 100], fov: 18 }}>
            <fog attach="fog" args={['#a79', 8.5, 12]} />
            <ScrollControls pages={4} infinite>
                <Rig rotation={[0, 0, 0.15]}>
                    <Carousel />
                </Rig>
                {/* <Banner position={[0, -0.15, 0]} /> */}
            </ScrollControls>
        </Canvas>
    )
}

export default MainThreeCarouselSelector
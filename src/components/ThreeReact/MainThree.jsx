import { Canvas } from "@react-three/fiber"
import { Environment, ScrollControls } from '@react-three/drei'
import Carousel from "./Carousel"
import Rig from "./Rig"
import './util'

const Main = () => {

    return (
        <Canvas camera={{ position: [0, 0, 100], fov: 18 }}>
            <fog attach="fog" args={['#a79', 8.5, 12]} />
            <ScrollControls pages={4} infinite>
                <Rig rotation={[0, 0, 0.15]}>
                    <Carousel />
                </Rig>
                {/* <Banner position={[0, -0.15, 0]} /> */}
            </ScrollControls>
            <Environment preset="dawn" background blur={0.5} />
        </Canvas>
    )
}

export default Main
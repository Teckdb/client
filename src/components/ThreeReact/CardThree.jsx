import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Image } from '@react-three/drei'
import { easing } from 'maath'
import './util'
import { useNavigate } from 'react-router-dom'

function CardThree({ id, url, ...props }) {

    const ref = useRef()
    const [hovered, hover] = useState(false)

    const navigate = useNavigate()

    const pointerOver = (e) => (e.stopPropagation(), hover(true))
    const pointerOut = () => hover(false)

    const handleClick = () => {
        hovered && navigate(`coffee-result/${id}`)
    }

    useFrame((state, delta) => {
        easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
        easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
        easing.damp(ref.current.material, 'zoom', hovered ? 0.6 : 0.7, 0.2, delta)
        easing.damp(ref.current.material.color, 'r', hovered ? 1 : 0.3, 0.2, delta);
        easing.damp(ref.current.material.color, 'g', hovered ? 1 : 0.3, 0.2, delta);
        easing.damp(ref.current.material.color, 'b', hovered ? 1 : 0.3, 0.2, delta);
    })

    return (
        <Image
            ref={ref}
            url={url}
            transparent
            side={THREE.DoubleSide}
            onPointerOver={pointerOver}
            onPointerOut={pointerOut}
            onClick={handleClick}
            {...props}>

            <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
        </Image>
    )
}

export default CardThree
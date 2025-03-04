import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ children }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 15], 0.25, delta);
    });

    return (
        <group ref={groupRef}>
            {children}
        </group>
    );
};

export default HeroCamera;

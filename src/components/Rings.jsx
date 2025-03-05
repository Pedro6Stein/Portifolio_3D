import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef, useLayoutEffect, useEffect } from 'react';

const Rings = ({ position }) => {
    // Verifica se 'position' é um array válido com 3 números
    if (!position || !Array.isArray(position) || position.length !== 3) {
        console.warn("Prop 'position' inválida, espera um array [x, y, z]:", position);
        position = [-12, 10, 0]; // valor padrão
    }

    console.log("Rings position:", position);

    const refList = useRef([]);
    const getRef = useCallback((mesh) => {
        if (mesh && !refList.current.includes(mesh)) {
            refList.current.push(mesh);
        }
    }, []);

    const texture = useTexture('textures/rings.png');

    // useLayoutEffect para atualizar a posição dos meshes logo após a montagem
    useLayoutEffect(() => {
        refList.current.forEach((mesh) => {
            mesh.position.set(position[0], position[1], position[2]);
        });
    }, [JSON.stringify(position)]);

    // useEffect para animar a rotação dos meshes com GSAP
    useEffect(() => {
        if (refList.current.length === 0) return;
        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 0.5,
            yoyo: true,
        });
        tl.to(
            refList.current.map((mesh) => mesh.rotation),
            {
                y: `+=${Math.PI * 2}`,
                x: `-=${Math.PI * 2}`,
                duration: 2.5,
                stagger: {
                    each: 0.15,
                },
            }
        );
        return () => tl.kill();
    }, []);

    return (

            <group scale={0.5}>
                {Array.from({ length: 4 }, (_, index) => (
                    <mesh key={index} ref={getRef}>
                        <torusGeometry args={[(index + 1) * 0.5, 0.1, 16, 100]} />
                        <meshMatcapMaterial matcap={texture} toneMapped={false} />
                    </mesh>
                ))}
            </group>

    );
};

export default Rings;

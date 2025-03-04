import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {HackerRoom} from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constantes/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";


const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
       <section className="min-h-screen w-full flex flex-col relative">
           <div className="w-full mx-auto flex flex-col scroll-m-36 mt-20 c-space gap-3">

               <p className="sm:text-3xl text-2xl font-medium
               text-white text-center font-generalsans">
                   Hi, am Pedro Stein!
                   <span className="waving-hand">👋</span>
               </p>

               <p className="hero_tag text-gray_gradient">
                Building Products & Brands
               </p>

           </div>

           <div className="w-full h-full absolute inset-0">

                <Canvas className="h-full w-full absolute inset-0">
                    <PerspectiveCamera makeDefault position={[0,0,30]}/>
                    <Suspense fallback={<CanvasLoader/>}>
                        <HackerRoom
                            scale    = {sizes.deskScale}
                            rotation = {[0, -Math.PI, 0]}
                            position = {sizes.deskPosition}
                        />

                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                        </group>
                        <ambientLight     intensity={1} />
                        <directionalLight position={[10,10, 10]}
                                          intensity={0.5} />
                    </Suspense>
                </Canvas>
           </div>


       </section>

    )
}
export default Hero

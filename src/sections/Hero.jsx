import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {HackerRoom} from "../components/HackerRoom.jsx";

const Hero = () => {
    return (
       <section className="min-h-screen w-full flex flex-col relative">
           <div className="w-full mx-auto flex flex-col scroll-m-36 mt-20 c-space gap-3">
               <p className="sm:text-3xl text-2xl font-medium
               text-white text-center font-generalsans">
                   Hi, am Pedro Steinn!
                   <span className="waving-hand">👋</span></p>
               <p className="hero_tag text-gray_gradient">
                Building Products & Brands
               </p>
           </div>
           <div className="w-full h-full absolute inset-0">
                <Canvas className="h-full w-full absolute inset-0">
                    <PerspectiveCamera MmkeDefault position={[0,0,30]}/>
                    <HackerRoom/>
                </Canvas>
           </div>




       </section>

    )
}
export default Hero

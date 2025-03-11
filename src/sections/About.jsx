import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";

const About = () => {
    // 1. Declaramos o hook useState no nível superior do componente
    const [hasCopied, setHasCopied] = useState(false);

    // 2. Função handleCopy que usa o estado declarado acima
    const handleCopy = () => {
        setHasCopied(true);
        navigator.clipboard.writeText("zodtewill@gmail.com");
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid1.png"
                            alt="grid-1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Pedro Stein</p>
                            <p className="grid-subtext">
                                I began my development career on February 3rd and have rapidly expanded my technical
                                skill set since then. My experience includes designing robust JavaScript solutions,
                                building modular React components, and developing interactive 3D visualizations with
                                ThreeJS. This journey has sharpened my expertise in modern front-end frameworks and real-time
                                graphics, equipping me to tackle complex technical challenges.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid2.png"
                            alt="grid-2"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                My tech stack includes JavaScript, React, ThreeJS, Python, and Java, among other modern web
                                technologies, enabling the creation of dynamic and visually compelling applications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[276px] h-fit flex justify-center items-center">
                            <Globe
                                height={276}
                                width={276}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    {
                                        lat: -22.9523,
                                        lng: -46.5425,
                                        text: "Eu estou aqui!",
                                        color: "white",
                                        size: 1000,
                                    }
                                ]}
                            />
                        </div>

                        <div>
                            <p className="grid-headtext">
                                I work as a developer in Itatiba at Vcat
                            </p>
                            <p className="grid-subtext">
                                Based in the vibrant city of Itatiba, I contribute to innovative projects by developing scalable
                                web solutions using modern technologies.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid3.png"
                            alt="grid-3"
                            className="w-full sm:h-[266px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">My Passion for Technology</p>
                            <p className="grid-subtext">
                                Since I was 14, I have been exploring the vast realm of technology.
                                Fascinated by both science and mathematics from an early age, I discovered that programming
                                was the perfect way to blend these two passions. Through technology, I create innovative solutions
                                that transform our world. I thrive on solving challenges, embracing new experiences, and celebrating
                                all that is fresh and exciting.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me!</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assents/tick.svg' : 'assents/copy.svg'} alt="copy" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;

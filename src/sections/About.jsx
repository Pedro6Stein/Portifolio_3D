import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-2 gap-3 xl:grind-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
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
                            src="assets/grid2.png"
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

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                // Latitude: -22.9523, Longitude: -46.5425 (22° 57′ 8″ Sul, 46° 32′ 33″)
                                // Coordenada da minha cidade
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
                                Based in the vibrant city of Itatiba,
                                I contribute to innovative projects by developing scalable
                                web solutions using modern technologies.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default About;


const About = () => {
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-2 gap-3 xl:grind-rows-6
            md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">
                                Pedro Stein
                            </p>
                            <p className="grid-subtext">
                                I began my development career on February 3rd and have rapidly expanded my technical
                                skill set since then. My experience includes designing robust JavaScript solutions,
                                building modular React components, and developing interactive 3D visualizations with ThreeJS.
                                This journey has sharpened my expertise in modern front-end frameworks and real-time graphics,
                                equipping me to tackle complex technical challenges.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">
                                Tech Stack
                            </p>
                            <p className="grid-subtext">
                                My tech stack includes JavaScript, React,
                                ThreeJS, Python, and Java, among other modern web technologies,
                                enabling the creation of dynamic and visually compelling applications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2"
                             className="w-full sm:h-[276px] h-fit object-contain"/>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default About

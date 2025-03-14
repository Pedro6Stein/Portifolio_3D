import {myProjects} from "../constantes/index.js";

const Projects = () => {

    const currentProject = myProjects [0]; //Temporario, deixar como set futuramente.
    //const [selectedProjectIndex, setselectedProjectIndex] = React.useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    return (
        <section className="c-space my-20">
            <p className="head-text">My Work</p>
            <div className="grid lg:grid-cols-2 lg:grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative
                sm:p-10 py-5 shadow-2xl shadow-indigo-950">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="Spotlight" className="w-full h-96 object-cover rounded-xl"/>
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="Logo" />
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p>{currentProject.title} </p>
                        <p>{currentProject.desc}</p>
                        <p>{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>
                        <div>
                            <a className="flex items-center gap-2 cursor-pointer text-white-600"
                               href={currentProject.href} target="_blank"
                               rel="noreferrer">
                                <p>Check Live Site</p>
                                <img src="/assets/arrow-up.png" className="w-3 h-3" alt="ArrowUp"/>
                            </a>
                        </div>
                        <div className="flex justify-between items-center mt-7">
                            <button className="arrow-btn" onClick= {() => handleNavigation('previous')}>
                                <img src="assets/right-arrow.png" className="w-4 h-4" alt="right arrow"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Projects

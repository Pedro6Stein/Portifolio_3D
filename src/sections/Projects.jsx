import {myProjects} from "../constantes/index.js";

const Projects = () => {
    const currentProject = myProjects [0]; //Temporario, deixar como set futuramente.
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
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects

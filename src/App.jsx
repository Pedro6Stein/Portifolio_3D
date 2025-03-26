import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Projects from "./sections/Projects.jsx";


export const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
        </main>

    )
}

export default App;

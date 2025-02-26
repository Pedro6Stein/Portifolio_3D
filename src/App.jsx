
import Navbar from "./sections/Navbar.jsx";
import React from "react";
import Hero from "./sections/Hero.jsx";




export const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
          <Navbar />
            <Hero/>
        </main>

    )
}

export default App;

import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Project from "./components/Project"


function App() {
 
  return (
    <div className="bg-indigo-600"> 
    <Nav/>
    <Hero/>
    <Project/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default App

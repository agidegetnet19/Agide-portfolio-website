
import './App.css'
import AboutMe from './components/Aboutme/AboutMe'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import PortfolioNavbar from './components/PortfolioNavbar/PortfolioNavbar'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Skills from './components/Skills/Skills'


function App() {


  return (
    <>
      <PortfolioNavbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </>
  )
}

export default App

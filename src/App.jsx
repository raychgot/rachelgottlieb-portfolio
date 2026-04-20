import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './styles/main.css'

function App() {
  return (
    <div className="site">
      <Nav />
      <Hero />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App

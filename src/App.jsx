import Navbar from './components/Navbar'
import BackgroundOrbs from './components/BackgroundOrbs'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import useLenis from './hooks/useLenis'
import useScrollAnimations from './hooks/useScrollAnimations'

export default function App() {
  useLenis()
  useScrollAnimations()

  return (
    <>
      <BackgroundOrbs />
      <Navbar />
      <main className="relative pt-24">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

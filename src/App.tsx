import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Trajectory } from './components/Trajectory'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Collaborations } from './components/Collaborations'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Trajectory />
          <Skills />
          <Projects />
          <Collaborations />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

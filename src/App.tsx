import { ThemeProvider } from './context/ThemeContext'
import { FloatingNav } from './components/FloatingNav'
import { TopControls } from './components/TopControls'
import { AmbientBackground } from './components/AmbientBackground'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Trajectory } from './components/Trajectory'
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { Education } from './components/Education'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <AmbientBackground />
        <TopControls />
        <FloatingNav />
        <main>
          <Hero />
          <Stats />
          <About />
          <Trajectory />
          <Skills />
          <Services />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

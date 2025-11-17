import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Features />
      <Gallery />
      <Contact />
      <footer className="bg-slate-950 border-t border-white/10 py-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Azven Realty • The Cove
      </footer>
    </div>
  )
}

export default App

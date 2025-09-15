import Header from './components/organisms/Header';
import Hero from './components/organisms/Hero';
import Projects from './components/organisms/Projects';
import About from './components/organisms/About';
import Footer from './components/organisms/Footer';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-surface-secondary">
        <Header />
        <main className='flex flex-col gap-px'>
          <Hero />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;

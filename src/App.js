import './App.css';
import Home from './components/Home/Home';
import About from './components/about/About';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
    <Header/>
    <main className='main container'>
      <Home/>
      <About/>
      <Skills/>
    </main>
    </>
  );
}

export default App;

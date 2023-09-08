import './App.css'
import { BannerMedio } from './Components/BannerMedio/BannerMedio'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Hero } from './Components/Hero/Hero'
import { Plataforma } from './Components/Plataforma/Plataforma'
import { PrimerosPasos } from './Components/PrimerosPasos/PrimerosPasos'

function App() {

  return (
    <>
      <Header />

      <Hero />

      <PrimerosPasos />
      

      <BannerMedio />

      <Plataforma />
    
    
      <Footer />
    </>
  )
}

export default App

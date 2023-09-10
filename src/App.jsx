import './App.css'
import { BannerMedio } from './Components/BannerMedio/BannerMedio'
import  { Footer } from './Components/Footer/Footer'
import  { Header } from './Components/Header/Header'
import  { Hero } from './Components/Hero/Hero'
import  { Plataforma } from './Components/Plataforma/Plataforma'
import { PrimerosPasos } from './Components/PrimerosPasos/PrimerosPasos'
import { SobreNosotros } from './Components/SobreNosotros/SobreNosotros'
import { ProyectosServicios } from './Components/ProyectosServicios/ProyectosServicios'





function App() {

  return (
    <>
      <Header />

      <Hero />

      <PrimerosPasos />
      
      <BannerMedio />

      <SobreNosotros />
      
      <Plataforma />

      <ProyectosServicios />

      <Footer />
    </>
  )
}

export default App

import {react} from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className='Hero
                        h-full md:h-[60rem]
                        md:contenedor-flex
                      bg-primerColor
                        p-8'
    >
      <div className="mainHeroContenido
                   
                    md:contenedor-flex"
      >
            <div className='contenedor basis-[65%] text-center md:text-start p-16 flex flex-col flex-wrap justify-center items-center w-full h-full'>
                  <h2 className='Titulo text-[2rem] md:text-[4rem] font-extrabold uppercase 
                    text-white my-2 flex-shrink'>Tokenización de Activos Inmobiliarios</h2>
                  <p className='text-[1.5rem] my-2 text-white flex-shrink'>
                    La manera más eficiente, fácil y flexible de invertir en el mercado inmboiliario</p>
            </div>
            
            <div className="contenedor
                          bg-white 
                            overflow-hidden
                            object-center
                            h-full
                            card-ofi-molde-rev
                            p-8
                            "
            >

            <img src='../src/assets/Heroimg.jpg' 
                 alt=''
                 className=' w-full h-full'
            /> 
            </div>

            <div className="socialMedia 
                            contenedor-60
                            md:flex-col
                            my-12 md:order-first 
                            basis-[5%]"
            >
                <ul className="p-4">
                        <li className="contenedor-flex-c
                                        md:contenedor-flex-col
                            
                                        text-[1.7rem]
                                      text-white"
                        >

                          <a href='#'><FaInstagram /></a>
                          <a href='#'><FaWhatsapp /></a>
                          <a href='#'><FaYoutube /></a>
                          <a href='#'><FaLinkedin /></a>

                        </li>
                </ul>
                
            </div>
            
      </div>
        
        
      
          
      
         
        
    </section>
  )
}

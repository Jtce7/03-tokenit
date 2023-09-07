import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className='Hero flex flex-col-reverse justify-center items-center h-[60rem] md:flex-row md:justify-center md:items-center bg-primerColor'>
        <div className='Iconos contenedor
           w-[10%]'>
          <ul className="p-4">
            <li className="flex md:flex-col md:justify-center md:items-center gap-4 justify-center items-center text-[1.7rem]
               text-white">
              <a href='#'><FaInstagram /></a>
              <a href='#'><FaWhatsapp /></a>
              <a href='#'><FaYoutube /></a>
              <a href='#'><FaLinkedin /></a>
            </li>
          </ul>
        </div>

        <div className='contenedor text-center md:text-start p-16 flex flex-col flex-wrap justify-center items-center w-full h-full'>
              <h2 className='Titulo text-[2rem] md:text-[4rem] font-extrabold uppercase 
                text-white my-2 flex-shrink'>Tokenización de Activos Inmobiliarios</h2>
              <p className='text-[1.5rem] my-2 text-white flex-shrink'>
                La manera más eficiente, fácil y flexible de invertir en el mercado inmboiliario</p>
        </div>
        
        <div className="flex flex-wrap w-full h-full p-16 items-center">
        <img className='card-reverse p-4  object-cover object center w-full h-full'
                src='../src/assets/Heroimg.jpg' alt=''
        /> 
        </div>
        
      
          
      
         
        
    </div>
  )
}

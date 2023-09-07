import { GiArchiveRegister, GiBookmarklet, GiReceiveMoney } from "react-icons/gi"
import { LuHelpingHand } from "react-icons/lu"


export const PrimerosPasos = () => {
  return (
    <section className="PrimerosPasos contenedor flex flex-col justify-center items-center gap-4
         md:grid md:grid-cols-2 my-52 h-full w-full md:translate-b-[75rem]">

        <div className="titulo-section grid col-span-2 text-right border-primerColor border-b-8 w-[95%] h-full">
                <h2 className="text-primerColor text-[2.5rem] uppercase">Primeros Pasos</h2>
        </div>

        <div className="PrimerPaso contenedor flex flex-col card border-primerColor border-t-2 p-6
                justify-center items-center w-[full] h-full my-32">
            <div className="imagen flex justify-center items-center text-[10rem]
            text-primerColor my-16">
                <GiArchiveRegister />
            </div>
            <div className="Contenido contenedor flex flex-col justify-center 
                    items-center text-center w-[70%] h-[50%] p-4 ">
                <h2 className="text-[2rem] font-bold md:text-[2.2rem] text-primerColor p-4">
                    ¡Únete a la Revolución! Regístrate en Token-IT
                </h2>
                <p className="p-4 text-[1rem] font-bold md:text-[1.3rem] text-primerColor">
                    Comienza tu viaje en la tokenización de activos inmobiliarios 
                    registrándote en Token-IT. Este sencillo proceso te permitirá 
                    acceder a un mundo de oportunidades de inversión inmobiliaria 
                    digital de manera segura y rápida
                </p>
            </div>
        </div>

        <div className="SegundoPaso flex card border-primerColor border-r-2 md:card-reverse p-6
            justify-center items-center w-full h-full my-52 md:translate-y-[25rem]">
            
            <div className="Contenido contenedor flex flex-col justify-center 
                items-center text-center w-[70%] h-[50%] p-4">
                <h2 className="text-[2rem] font-bold md:text-[2.2rem] text-primerColor py-4">
                    Nuestro Equipo a tu Servicio: Consulta, Aclara, Avanza
                </h2>
                <p className="p-4 text-[1rem] font-bold md:text-[1.3rem] text-primerColor">
                    No estás solo en esta aventura. 
                    Nuestro equipo está listo para responder a tus preguntas
                    y guiarte en cada paso del camino. 
                    Si necesitas asesoramiento o tienes dudas, no dudes en ponerte en contacto
                    con nosotros. Tu éxito es nuestra prioridad.
                </p>
            </div>
            <div className="imagen text-[10rem] text-primerColor p-6 
                mx-2">
                <GiBookmarklet />
                
            </div>
            
        </div>

        <div className="TercerPaso flex flex-col  card border-primerColor border-b-2 p-6
            justify-center items-center w-full h-full my-52">
            
            <div className="Contenido contenedor flex flex-col justify-center 
                items-center text-center w-[70%] h-[50%] p-4">
                <h2 className="text-[2rem] font-bold md:text-[2.2rem] text-primerColor py-4">
                    Descubre Oportunidades Únicas en Nuestro Marketplace
                </h2>
                <p className="p-4 text-[1rem] font-bold md:text-[1.3rem] text-primerColor">
                    Una vez registrado y orientado por nuestro equipo, sumérgete en el Marketplace de Token.IT,
                    donde encontrarás una amplia gama de activos inmobiliarios tokenizados listos para explorar.
                </p>
            </div>

            <div className="imagen flex justify-center items-center 
                text-[10rem] text-primerColor my-8">
                <GiReceiveMoney />
                
            </div>
        </div>

        <div className="CuartoPaso flex card border-primerColor border-l-2 md:card-reverse p-6
            justify-center items-center w-full h-full my-32 md:translate-y-[25rem] md:w-full">
            <div className="imagen text-[10rem] text-primerColor p-6 mx-2">
                <LuHelpingHand />
                
            </div>
            <div className="Contenido contenedor flex flex-col justify-center text-center w-[70%] h-[50%] p-4 md:my-[25rem]">
                <h2 className="text-[1.8rem] font-bold md:text-[2.2rem] text-primerColor py-4">
                    Invierte con Confianza y Gana en el Mundo Digital
                </h2>
                <p className="p-4 text-[1rem] font-bold md:text-[1.3rem] text-primerColor">
                    Llegó el momento de convertir tus inversiones en realidad.
                    En este paso, podrás seleccionar y adquirir tokens de actios inmobiliarios,
                    participar en proyectos emocionantes y potencialmente cosechar ganancias.
                    Tu viaje hacia el éxito financiero está a un click de distancia.    
                </p>
            </div>
        </div>
        
    </section>
    
  )
}

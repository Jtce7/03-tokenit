import {react} from 'react'
import { GiArchiveRegister, GiBookmarklet, GiReceiveMoney } from "react-icons/gi";
import { LuHelpingHand } from "react-icons/lu";


export const PrimerosPasos = () => {
  return (
    <section className="PrimerosPasos
                        p-4
                        md:h-[180rem]
                        mt-16
                        mb-32"
    >

        <div className="titulo-section
                        "
        >

            <h2 className="md:text-right
                            titulo
                            tituloBorder"
            >
                Primeros Pasos
            </h2>

        </div>

        <main className="contenedor flex flex-wrap">

            <article className="mainPrimerPaso
                                shadow-sm shadow-primerColor/1
                                md:card-ofi-l
                                md:contenedor-flex-c
                                md:basis-[50%] 
                                p-2
                                mt-32
                                ">

                    <div className="ContenidoPrimerPaso 
                                max-w-full
                                text-center
                                "
                    >
                        <div className="iconos"
                        >
                            <GiArchiveRegister className=""/>

                        </div>
                        <h2 className="text-[2rem] font-bold 
                                        md:text-[2.2rem] 
                                        text-primerColor p-4
                                        "
                        >
                            ¡Únete a la Revolución! Regístrate en Token-IT

                        </h2>

                        <p className="p-4 text-[1.3rem] font-bold 
                                        md:text-[1.5rem] text-primerColor"
                        >
                            Comienza tu viaje en la tokenización de 
                            activos inmobiliarios 
                            registrándote en Token-IT. Este sencillo 
                            proceso te permitirá 
                            acceder a un mundo de oportunidades de 
                            inversión inmobiliaria 
                            digital de manera segura y rápida

                        </p>

                    </div>

            </article>

            <article className="mainSegundoPaso
                                shadow-sm shadow-primerColor/1
                                md:card-ofi-r
                                md:contenedor-flex-c
                                md:basis-[50%] 
                                p-2
                                mt-32">

                    <div className="Contenido 
                                max-w-full
                                text-center"
                    >
                        <div className="iconos"
                        >
                            <GiBookmarklet className=""/>

                        </div>
                        <h2 className="text-[2rem] font-bold 
                                        md:text-[2.2rem] 
                                        text-primerColor p-4"
                        >
                            Nuestro Equipo a tu Servicio: Consulta, Aclara, Avanza

                        </h2>

                        <p className="p-4 text-[1.3rem] font-bold 
                                        md:text-[1.5rem] text-primerColor"
                        >
                            No estás solo en esta aventura. 
                            Nuestro equipo está listo para 
                            responder a tus preguntas
                            y guiarte en cada paso del camino. 
                            Si necesitas asesoramiento o tienes dudas, 
                            no dudes en ponerte en contacto
                            con nosotros. Tu éxito es nuestra prioridad.

                        </p>

                    </div>

            </article>

            <article className="mainTercerPaso
                                shadow-sm shadow-primerColor/1
                                md:card-ofi-t
                                md:contenedor-flex-c
                                md:basis-[50%] 
                                p-2
                                mt-32">

                    <div className="ContenidoPrimerPaso 
                                max-w-full
                                text-center"
                    >
                        <div className="iconos"
                        >
                            <GiReceiveMoney className=""/>

                        </div>
                        <h2 className="text-[2rem] font-bold 
                                        md:text-[2.2rem] 
                                        text-primerColor p-4"
                        >
                            Descubre Oportunidades Únicas en Nuestro Marketplace

                        </h2>

                        <p className="p-4 text-[1.3rem] font-bold 
                                        md:text-[1.5rem] text-primerColor"
                        >
                            Una vez registrado y orientado por nuestro equipo, 
                            sumérgete en el Marketplace de Token.IT,
                            donde encontrarás una amplia gama de activos 
                            inmobiliarios tokenizados listos para explorar.

                        </p>

                    </div>

            </article>

            <article className="mainCuartoPaso
                                shadow-sm shadow-primerColor/10
                                md:card-ofi-b
                                md:contenedor-flex-c
                                md:basis-[50%] 
                                p-2
                                mt-32
                                ">

                    <div className="ContenidoPrimerPaso 
                                max-w-full
                                text-center"
                    >
                        <div className="iconos"
                        >
                            <LuHelpingHand className=""/>

                        </div>
                        <h2 className="text-[2rem] font-bold 
                                        md:text-[2.2rem] 
                                        text-primerColor p-4"
                        >
                            Invierte con Confianza y Gana en el Mundo Digital

                        </h2>

                        <p className="p-4 text-[1.3rem] font-bold 
                                        md:text-[1.5rem] text-primerColor"
                        >
                            Llegó el momento de convertir tus inversiones en 
                            realidad.
                            En este paso, podrás seleccionar y adquirir tokens de a
                            ctios inmobiliarios,
                            participar en proyectos emocionantes y potencialmente 
                            cosechar ganancias.
                            Tu viaje hacia el éxito financiero está a un click de 
                            distancia. 

                        </p>

                    </div>

            </article>

        </main>

    </section>
    
  )
}

import {react} from 'react'
export const SobreNosotros = () => {
  return (
    <section className="">

        <div className="mainSobreNosotros contenedor h-full mt-32 p-6">

            <h2 className=" text-center
                               text-primerColor 
                               text-[3rem] 
                               p-4 font-bold
                               my-8"
                >
                        ¿Quienes Somos?
            </h2>

            <article className="contenido 
                                contenedor
                                md:contenedor-flex
                                md:justify-stretch
                                h-full-screen
                                p-4
                                text-center
                                md:text-start"
            >
                <p className="
                            basis-[75%]
                            text-[1.5rem]
                            md:text-[2.2rem]
                            text-primerColor 
                              p-4 font-semibold
                              mb-[5rem]"
                >
                        Somos una empresa de tecnología y gestión de 
                        inversiones que a través de la tokenización 
                        busca entregar al mercado una 
                        solución confiable a la hora de buscar liquidez o inversionistas 
                        para proyectos de bienes raíces.

                </p>

                <div className="ImagenArticle 
                                contenedor 
                                card-ofi-molde 
                                overflow-hidden 
                                object-cover p-8
                                bg-primerColor
                                w-[100%]
                                h-[50%]
                                
                                "
                >

                    <img src="../src/assets/sobreNosotros.png" 
                        alt="" 
                        className="w-full h-full p-6"
                    /> 

                </div>
                

            </article>

            <div className="bannerSobreNosotros
                            contenedor
                            flex-wrap
                            md:contenedor-flex-c
                            mt-[16rem]
                            text-center
                      
                            
                            
                           "
            >

                <div className="banner-1
                                contenedor
                                rounded-br-xl
                                rounded-tl-[10rem]
                              bg-white
                                my-8
                                basis-[50%]
                                flex-shrink
                                p-6
                                "
                >
                    <h2 className="text-[3rem] text-primerColor p-4">
                        Equipo
                    </h2>

                    <p className="text-[1.8rem] text-primerColor p-4">
                        Tokenit cuenta con las habilidades y experiencia 
                        necesarias en las áreas clave: Negocios, Legal y Tecnología
                    </p>

                    <button type="button"
                            className=" contenedor 
                                        rounded-bl-lg
                                        rounded-tr-lg            
                                      bg-primerColor
                                      text-white p-4
                                       
                                        my-6"
                    >

                            Ver LinkeID

                    </button>
                </div>

                <div className="banner-2
                                contenedor
                                rounded-br-[8rem]
                                rounded-tl-lg
                              bg-white
                                my-8
                                flex-shrink
                                basis-[50%]
                                p-6
                                "
                >
                    <h2 className="text-[3rem] text-primerColor p-4">
                        Proyectos Exclusivos
                    </h2>

                    <p className="text-[1.8rem] text-primerColor p-4">
                        Invierte directamente en tokens de proyectos inmobiliarios 
                        a través de nuestros acuerdos
                    </p>

                    <button type="button"
                            className=" contenedor 
                                        rounded-bl-lg
                                        rounded-tr-lg            
                                      bg-primerColor
                                      text-white p-4
                                        
                                        my-6"
                    >

                            Ver Proyectos

                    </button>
                </div>

                <div className="banner-3
                                contenedor
                                rounded-bl-[3rem]
                                rounded-tr-lg
                              bg-white
                                my-8
                                flex-shrink
                                basis-[30%]
                                p-6
                                "
                >
                    <h2 className="text-[3rem] text-primerColor p-4">
                        Automatización
                    </h2>

                    <p className="text-[1.8rem] text-primerColor p-4">
                        Un modelo de negocios claro e innovador nos ha 
                        desarrollar eficiencia dando respuesta al usuario
                    </p>

                    <button type="button"
                            className=" contenedor 
                                        rounded-bl-lg
                                        rounded-tr-lg            
                                      bg-primerColor
                                      text-white p-4
                                      
                                        my-6"
                    >

                            Ver Procesos

                    </button>
                </div>

                <div className="banner-4
                                contenedor
                                rounded-bl-lg
                                rounded-tr-[10rem]
                              bg-white
                                flex-shrink
                                basis-[30%]
                                my-8
                                p-6"
                >
                    <h2 className="text-[3rem] text-primerColor p-4">
                        Transparencia
                    </h2>

                    <p className="text-[1.8rem] text-primerColor p-4">
                        Todos nuestros procesos y operaciones son abiertas y 
                        auditables, cumplimos con las regulaciones.
                    </p>

                    <button type="button"
                            className=" contenedor 
                                        rounded-bl-lg
                                        rounded-tr-lg            
                                      bg-primerColor
                                      text-white p-4
                                        
                                        mb-6"
                    >

                            Aprender

                    </button>
                </div>

            </div>

        </div>


    </section>
  )
}

export default SobreNosotros
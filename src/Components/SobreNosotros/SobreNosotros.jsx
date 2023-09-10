import {react} from 'react'
export const SobreNosotros = () => {
  return (
    <section className="">

        <div className="mainSobreNosotros 
                      
                        h-full mt-32 p-8"
        >

            <h2 className=" text-center
                            md:text-end
                            text-primerColor 
                            text-[2.2rem] 
                            font-bold
                            my-8"
                >
                        Token IT
            </h2>

            <hr className="border-primerColor"/>

            <article className="contenido
                                md:border-2 border-white-50/50
                                shadow-sm shadow-primerColor/10
                                md:card-style-rev
                                my-24
                                md:contenedor-flex
                                p-16
                                text-center
                                md:text-start"
            >
                <div className="textoArticle
                                 
                                  ">
                    <p className="
                                 
                                  text-[1.5rem]
                                  md:text-[1.8rem]
                                  text-primerColor 
                                  font-semibold
                                  "
                      >
                              Somos una empresa de tecnología y gestión de 
                              inversiones que a través de la tokenización 
                              busca entregar al mercado una 
                              solución confiable a la hora de buscar liquidez o inversionistas 
                              para proyectos de bienes raíces.

                      </p>
                </div>
                  

                <div className="ImagenArticle 
                                mt-16
                                basis-[150%]
                                card-ofi-molde 
                                overflow-hidden
                                
                                bg-primerColor
                               
                                
                                "
                >

                    <img src="../src/assets/snosotros.jpg" 
                        alt="" 
                        className="object-center"
                    /> 

                </div>
                

            </article>

            <div className="bannerSobreNosotros
                         
                            flex-wrap
                            md:contenedor-flex-c
                            mt-[8rem]
                            text-center
                            
                           "
            >

                <div className="banner-1
                                contenedor
                                md:contenedor-flex-60-c
                                md:card-style-rev
                                md:border-2 border-white-50/50
                                shadow-sm shadow-primerColor/10
                                my-8
                                basis-[50%]
                                flex-wrap
                                p-8
                                "
                >
                    <h2 className="p-6 text-[3rem] text-primerColor">
                        Equipo
                    </h2>

                    <p className="p-4 text-[1.8rem] text-primerColor">
                        Tokenit cuenta con las habilidades y experiencia 
                        necesarias en las áreas clave: Negocios, Legal y Tecnología
                    </p>

                    <button type="button"
                            className=" md:contenedor-60
                                        items-center
                                        card-btn-style-rev    
                                        bg-primerColor
                                        text-white p-4
                                        "
                    >

                            Ver LinkeID

                    </button>
                </div>

                <div className="banner-2
                                contenedor
                                md:contenedor-flex-60-c
                                md:card-style
                                md:border-2 border-white-50/50
                                shadow-sm shadow-primerColor/10 
                                my-8
                                md:basis-[30%]
                                flex-shrink
                                flex-wrap
                                p-8
                                "
                >
                    <h2 className="p-6 text-[3rem] text-primerColor">
                        Proyectos Exclusivos
                    </h2>

                    <p className="p-4 text-[1.8rem] text-primerColor">
                        Invierte directamente en tokens de proyectos inmobiliarios 
                        a través de nuestros acuerdos
                    </p>

                    <button type="button"
                            className=" md:contenedor-60
                                        items-center
                                        card-btn-style           
                                        bg-primerColor
                                        text-white p-4
                                        my-6"
                    >

                        Ver Proyectos

                    </button>
                </div>

                <div className="banner-3
                                contenedor
                                md:contenedor-flex-60-c
                                md:card-style-rev
                                md:border-2 border-white-50/50
                                shadow-sm shadow-primerColor/10
                                
                                my-8
                                md:basis-[70%]
                                flex-shrink
                                flex-wrap
                                p-8
                                
                                "
                >
                    <h2 className="p-6 text-[3rem] text-primerColor">
                         Automatización
                    </h2>

                    <p className="p-4 text-[1.8rem] text-primerColor">
                        Un modelo de negocios claro e innovador nos ha 
                        desarrollar eficiencia dando respuesta al usuario
                    </p>

                    <button type="button"
                            className=" md:contenedor-60
                                        items-center
                                        card-btn-style-rev          
                                        bg-primerColor
                                        text-white p-4
                                        my-6"
                    >

                          Ver Procesos

                    </button>
                </div>

                <div className="banner-4
                                contenedor
                                md:contenedor-flex-60-c
                                md:card-style
                                md:border-2 border-white-50/50
                                shadow-sm shadow-primerColor/10
                                my-8
                                md:basis-[60%]
                                flex-shrink
                                flex-wrap
                                p-8
                                "
                >
                    <h2 className="p-6 text-[3rem] text-primerColor">
                        Transparencia
                    </h2>

                    <p className="p-4 text-[1.8rem] text-primerColor">
                        Todos nuestros procesos y operaciones son abiertas y 
                        auditables, cumplimos con las regulaciones.
                    </p>

                    <button type="button"
                            className=" md:contenedor-60
                                        items-center
                                        card-btn-style         
                                        bg-primerColor
                                        text-white p-4
                                        my-6"
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
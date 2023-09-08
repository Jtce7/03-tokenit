import {react} from 'react'

export const BannerMedio = () => {
  return (
    <section className="BannerMedios
                        huevo
                        contenedor-flex-c
                        md:contenedor-flex-col
                        h-full
                        bg-banner
                        card-ofi-bg
                        flex-wrap
                        t-0
                        my-32
                        py-12
                        "
    >

      <div className="MainBannerMedio
                      contenedor-flex-col
                      flex-wrap
                      text-center 
                      mb-24
                      w-full
                      md:px-16
                      "
      >
        <div>
            <p className="text-[1.5rem]
                    
                          md:text-[2.5rem] 
                        text-white 
                          p-16
                          m-8
                          "
            >
                        Con Token.IT, 
                        la libertad financiera está al alcance de tus manos.
                        Explora oportunidades inmobiliarias tokenizdas y 
                        desbloquea un camino
                        hacia un futuro financiero más sólido. 
                        <br/> 
                        <br/>
                        <span className="text-[2.4rem] md:text-[3rem] md:text-center">¡Regístrate ahora
                        y comienza a construir tu libertad financiera!
                        </span>
            </p>
        </div>
            
        <div className="card-btn-reverse
                      bg-white md:w-[30%] 
                        h-full p-16
                        text-center"
        >
        <button type="button" 
                className="
                          
                          text-[1.6rem]
                          uppercase
                          text-primerColor
                          p-4
                          font-bold
                          "
            >
                        Regístrate Ahora

            </button>
        </div>
                

      </div>
       
    </section>
  )
}

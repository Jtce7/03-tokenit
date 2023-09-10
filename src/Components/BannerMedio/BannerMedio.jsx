import {react} from 'react'

export const BannerMedio = () => {
  return (
    <section className="BannerMedios
                        huevo
                        h-full
                        py-24
                   
                        "
    >

      <div className="MainBannerMedio
                      contenedor
                      md:contenedor-flex-col
                      h-full
                      
                      

                      "
      >
        <div className="contenido-banner
                        contenedor
                        md:contenedor-flex-col
                        text-center
                        my-8
                        "
        >
            <p className="text-[1rem]
                          md:text-[1.3rem]
                          text-white
                          uppercase
                          font-semibold
                          mb-6
                          
                    
                          
                          "
            >
                        Con Token-IT,
                        <br/>
                        la libertad financiera está al alcance de tus manos.
                        <br/>
                        Explora oportunidades inmobiliarias tokenizadas y 
                        desbloquea un camino
                        hacia un futuro financiero más sólido. 
            </p>

            <p className="text-[1.6rem]
                          text-white
                          uppercase
                          font-bold
                          mb-6"
            >
                          ¡Regístrate ahora
                          y comienza a construir tu libertad financiera!
            </p>
        </div>
            
        <div className="card-btn-style-rev
                        
                        p-8
                        contenedor-60
                        items-center
                        justify-center

                        
                        "
        >
        <button type="button" 
                className="
                          p-8
                          
                          uppercase
                          text-white
                          card-btn-style-rev
                          border-2 border-white
                          md:text-[3rem]
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

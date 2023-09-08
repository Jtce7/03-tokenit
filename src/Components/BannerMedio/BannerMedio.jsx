
export const BannerMedio = () => {
  return (
    <section className="BannerMedio
                        huevo
                        contenedor-flex-c
                        md:contenedor-flex-col
                        h-full
                        bg-primerColor
                        card-ofi-bg
                        flex-wrap
                        t-0
                        mb-32
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
            
        <div className="card-ofi-molde 
                      bg-white md:w-[50%] 
                        h-full p-8"
        >
        <button type="button" 
                className="
                          
                          text-[2.5rem]
                          uppercase
                          text-primerColor
                          inline-block
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

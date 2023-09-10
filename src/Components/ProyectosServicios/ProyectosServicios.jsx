import React from 'react'


export const ProyectosServicios = () => {
  return (
    <section className='sectionProyecServ text-center bg-white my-32 p-16'>

        <h2 className='text-[3.5rem] text-primerColor font-bold p-4 my-8'>Proyectos</h2>

        <div className="mainProyectosServi 
                        contenedor
                        md:contenedor-flex-c
                        flex-wrap
                      

                        "
        >
        
            <div className="proyecto-1 card-ofi-l md:basis-[40%] mb-24">
                <img src="../src/assets/servicioretail.png" alt="" 
                    className='contenedor w-[80%]'/>
                <h2 className='text-[2.5rem] p-4 text-primerColor font-semibold'>Servicio Retail</h2>
                <button className='contenedor-flex-60 p-6 uppercase card-ofi-molde bg-primerColor text-white'>Ver más</button>       
            </div>

            <div className="proyecto-2 card-ofi-r-no md:basis-[45%] mb-24">
                <img src="../src/assets/personalizado.png" alt="" 
                    className='contenedor w-[80%]'/>
                <h2 className='text-[2.5rem] p-4 text-primerColor font-semibold'>Personalizado</h2>
                <button className='contenedor-flex-60 p-6 uppercase card-ofi-molde-rev bg-primerColor text-white'>Ver más</button>       
            </div>

            <div className="proyecto-3 card-ofi-l md:basis-[40%] mb-24">
                <img src="../src/assets/crowdfunding.png" alt="" 
                    className='contenedor w-[80%]'/>
                <h2 className='text-[2.5rem] p-4 text-primerColor font-semibold'>Crowfunding</h2>
                <button className='contenedor-flex-60 p-6 uppercase card-ofi-molde bg-primerColor text-white'>Ver más</button>       
            </div>

            


        </div>
    </section>
  )
}

export default ProyectosServicios
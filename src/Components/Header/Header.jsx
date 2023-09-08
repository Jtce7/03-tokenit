import {react} from 'react'

export const Header = () => {
  return (

    <header className='Header bg-primerColor '>

        <div className='Anuncios 
            text-[1.1rem] 
            text-center
            md:contenedor-flex-c 
            bg-white
          text-primerColor 
            uppercase p-1
            '
        >
            <h3 className="titulo">
                ¿Quieres Colaborar con tus proyectos?
            </h3>

            <a className="inversores" href='#'>
                Ingresa Aqui
            </a>

        </div>

        <div className='MainNav contenedor md:contenedor-flex
                        text-center 
                      
                      text-white p-4'
        >

            <div className='Logo font-bold 
                            text-[2rem] m-2'
            >
                <h1>Token-It</h1>
            </div>
            
            <div className='Navegacion 
                            md:contenedor-flex
                            '
            >
                <ul className='Menu 
                                block 
                                md:contenedor-flex 
                                m-4
                                text-[2rem]
                                ' 
                >

                    <li><a className='Home' href='#'>Home</a></li>
                    <li><a className='Markertplace' href='#'>Markertplace</a></li>
                    <li><a className='Academy' href='#'>Academy</a></li>
                    <li><a className='Invertir' href='#'>Invertir</a></li>

                </ul>

                <button type='button' 
                        className='Login uppercase
                                   card-btn bg-white 
                                 text-primerColor 
                                   text-[2rem] 
                                   font-bold p-6
                                   w-[40%]
                                   h-[full]'
                >
                    Login

                </button>

            </div>

        </div>

    </header>

  )
}

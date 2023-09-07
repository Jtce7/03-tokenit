

export const Header = () => {
  return (

    <header className='Header'>

        <div className='Anuncios md:flex justify-center gap-4 bg-segundoColor 
            text-primerColor text-center 
            font-semibold'>
            <h3>¿Eres Inmobiliaria y quieres colaborar?</h3>
            <a className="inversores" href='#'>Ingrese Aqui</a>
        </div>

        <div className='Nav md:flex md:justify-between md:items-center 
            items-center text-center bg-primerColor text-white p-4'>

            <div className='Logo uppercase font-bold text-2xl m-2'>
                <h1>LOGO</h1>
            </div>
            
            <div className='Navegacion md:flex md:gap-[4rem] md:justify-between 
                md:items-center'>
                <ul className='Menu block m-4 md:flex md:justify-between 
                    md:items-center md:gap-[5rem]' >
                    <li><a className='Home mb' href='#'>Home</a></li>
                    <li><a className='Markertplace' href='#'>Markertplace</a></li>
                    <li><a className='Academy' href='#'>Academy</a></li>
                    <li><a className='Invertir' href='#'>Invertir</a></li>
                </ul>

                <button type='button' className='Login card bg-white text-primerColor 
                    text-[1.6rem] font-bold m-2 w-[60%] h-full p-4'>Login
                </button>

            </div>

        </div>

    </header>

  )
}

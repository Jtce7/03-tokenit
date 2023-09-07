

export const Footer = () => {
  return (
    <footer className='Footer text-center bg-primerColor/90
         text-white'
    >

        <div className='Content text-center md:flex justify-between px-6 
            gap-4 items-center bg-primerColor' 
        >
            <h2 className='text-white uppercase text-[2.5rem] 
                font-extrabold'>
                Token-It
            </h2>
            <ul className='text-white text-[1.2rem] p-2 md:flex gap-4'>
                <li><a href='#'>LinkeiD</a></li>
                <li><a href='#'>Twitter</a></li>
                <li><a href='#'>Youtube</a></li>
            </ul>
        </div>

        <div className='Copyright flex justify-center 
            items-center xt-[1.5rem] p-2'>
           <h3>© 2023 FXD Software. All rights reserved. </h3> 
        </div>


    </footer>
  )
}

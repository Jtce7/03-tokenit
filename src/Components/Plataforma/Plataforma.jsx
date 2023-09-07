import {TbDeviceDesktopDollar} from "react-icons/tb";
import {GiShop} from "react-icons/gi";
import {GiTakeMyMoney} from "react-icons/gi";
import {HiDocumentReport} from "react-icons/hi";

export const Plataforma = () => {
  return (
    <section className="Sección-Invertir md:nocontenedor md:grid-flow-row huevo my-4 py-4">
      
      <div className="nocontenedor md:contenedor flex flex-col flex-wrap gap-8 justify-center 
        items-center py-4">
        <p className="text-white text-[2rem] text-center font-light my-32">
          Olvídate de la burocracia, largos papeleos gestiones bancarias, <br/> <br/><span 
            className="text-[2.4rem] font-bold h">!invertir en propiedades 
            nunca fue tan fácil !
          </span>
        </p>

        <div className="invertir contenedor card flex-justify bg-white ring-primerColor"> 
          <article className="card-article flex flex-grow">
                <div className="text-primerColor icons">
                  <TbDeviceDesktopDollar />
                </div>
                <h2 className="text-primerColor font-extrabold px-2">Marketplace de propiedades</h2>
                <p className="text-[1.2rem] font-semibold text-primerColor px-2">
                  Gracias a tus tokens, ya desde el primer mes empiezas a recibir los frutos de tu inversión con los arriendos y 
                  la plusvalía al momento de vender la propiedad
                </p>
                <button className="card-btn md:md-btn" 
                  type="button" href="#">Marketplace
                </button>
          </article>
        </div>

        <div className="invertir contenedor card-reverse flex-justify bg-white ring-primerColor"> 
          <article className="card-article flex flex-grow">
                <div className="text-primerColor icons">
                  <GiShop  />
                </div>
                <h2 className=" text-primerColor font-extrabold px-2">Mercado de Tokens</h2>
                <p className="text-[1.2rem] font-semibold text-primerColor px-2">
                  Con un par de clicks, ya podrás comprar tus tokens y ser un inversionista Tokenit
                </p>
                <button className="card-btn-reverse md:md-btn" 
                  type="button" href="#">Mercado de Tokens
                </button>
          </article>
        </div>
        <div className="invertir contenedor card flex-justify bg-white ring-primerColor"> 
          <article className="card-article flex flex-grow">
                <div className="text-primerColor icons">
                  <GiTakeMyMoney />
                </div>
                <h2 className="text-primerColor font-extrabold px-2">¡Empieza a Rentar!</h2>
                <p className="text-[1.2rem] font-semibold text-primerColor px-2">
                  Gracias a tus tokens, ya desde el primer mes empiezas a recibir los frutos de tu inversión
                  con los arriendos y la plusvalía al momento de vender la propiedad
                </p>
                <button className="card-btn md:md-btn" 
                  type="button" href="#">Empezar a Rentar
                </button>
          </article>
        </div>

        <div className="invertir contenedor card-reverse flex-justify bg-white ring-primerColor"> 
          <article className="card-article flex flex-grow">
                <div className="text-primerColor icons">
                  <HiDocumentReport />
                </div>
                <h2 className="text-primerColor font-extrabold px-2">Reglas Claras</h2>
                <p className="text-[1.2rem] font-semibold text-primerColor px-2">
                  Puedes vender en todo momento tus tokens y obtener liquidez inmediata.
                </p>
                <button className="card-btn-reverse md:md-btn" 
                  type="button" href="#">Condiciones
                </button>
          </article>
        </div>

        <p className="text-white text-center text-[1.3rem] font-extralight my-32">
          En Tokenit queremos democratizar el mercado de los bienes raíces, 
          por eso diseñamos una plataforma sencilla de operar 
          donde siempre podrás encontrar oportunidades de inversón acorde a tu perfil
        </p>

      </div>
      
      
    </section>
  )
}

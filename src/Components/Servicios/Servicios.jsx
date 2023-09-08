import { FaShop } from "react-icons/fa";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { SiAffinitypublisher } from "react-icons/si";
import { PiBankFill } from "react-icons/pi";
import { GiPayMoney } from "react-icons/gi";

export const Servicios = () => {
  return (
    <section>
        <div className="mainProyectos">

                <article className="proyecto-1">
                    <div className="contenido">
                            <FaShop />
                            <RiLayoutMasonryFill />
                            <FaPeopleRoof />
                            <MdRealEstateAgent/>
                            <SiAffinitypublisher/>
                            <PiBankFill/>
                            <GiPayMoney/>
                        <h2>
                            Servicio Retail
                        </h2>

                        <button>
                            Vamos!
                        </button>
                    </div>
                </article>
        </div>

    </section>
  )
}

export default Servicios
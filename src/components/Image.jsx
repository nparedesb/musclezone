import Agua from '/Agua.jpg'
import Bebida from '/Bebida.jpg'
import Bronce from '/Bronce.png'
import Entrenamiento from '/Entrenamiento.jpg'
import Multivitaminico from '/Multivitaminico.jpg'
import Omegas from '/Omegas.jpg'
import Oro from '/Oro.jpg'
import Plata from '/Plata.jpg'
import Proteina from '/Proteina.jpg'
import Toallas from '/Toallas.jpg'

function Image() {


  return (
    <>
      <div>
        <img src={Agua} className="Agua" alt="Agua" />
        <img src={Bebida} className="Bebida" alt="Bebida Energetica" />
        <img src={Bronce} className="Bronce" alt="Membresía Bronce" />
        <img src={Entrenamiento} className="Entrenamiento" alt="Entrenamiento Personalizado" />
        <img src={Multivitaminico} className="Multivitaminico" alt="Multivitaminico" />
        <img src={Omegas} className="Omegas" alt="Omegas" />
        <img src={Oro} className="Oro" alt="Membresía Oro" />
        <img src={Plata} className="Plata" alt="Membresía Plata" />
        <img src={Proteina} className="Proteina" alt="Proteina" />
        <img src={Toallas} className="Toallas" alt="Toallas" />
      </div>
    </>
  )
}

export default Image
import Mailto from "../components/Mailto";

function Valores () {

    return (  
      <>
        <div>
          <h5>Nuestros Valores.</h5>
          <section itemID="mision">
            <h6>Misión:</h6>
              <p>Ayudar a las personas a alcanzar sus objetivos de bienestar físico y mental.</p>
          </section>
  
          <section itemID="vision">
            <h6>Visión:</h6>
             <p>Inspirar a las personas a tomar decisiones saludables para enriquecer sus vidas a través del movimiento.</p>
          </section>
  
          <section itemID="somos">
            <h6>¿Quiénes somos?</h6>
             <p>Muscle zone, es un lugar donde convergen personas con diferentes objetivos y necesidades, todas buscando mejorar su salud física y bienestar.</p>
          </section>
  
          <section itemID="contacto">
          <h6>Contacto:</h6>
             <p>Para contactarnos, haz clic <Mailto email="musclezone@musclezone.com" subject="Informes del Gimansio" body="Hola, tengo una pregunta...">aquí</Mailto>.</p>
          </section>
        </div>
    </>
    );
  }
  
  export default Valores;
  
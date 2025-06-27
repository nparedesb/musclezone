function Productos () {

  return (  
    <>
    <header>
        <h1 className="titulo">Muscle Zone</h1>
    </header>
      
      <div>
        <h5>Venta de Membresias</h5>
        <section itemID="oro">
          <h6>Membresia Oro:</h6>
          <p>Incluye:</p> 
          <ul>
            <li>Horario libre.</li>
            <li>Acceso ilimitado a todas las sucursales.</li>
            <li>Servicio ilimitado de clases grupales.</li>
          </ul>
          <p><b>Costo $12,500.00 MNX</b></p>
        </section>

        <section itemID="plata">
          <h6>Membresia Plata:</h6>
          <p>Incluye:</p> 
          <ul>
            <li>Horario de libre.</li>
            <li>Acceso a una sucursal.</li>
            <li>Servicio de 4 clases grupales por semana.</li>
          </ul>
          <p><b>Costo $10,500.00 MNX</b></p>
        </section>

        <section itemID="bronce">
          <h6>Membresia Bronce:</h6>
          <p>Incluye:</p> 
          <ul>
            <li>Horario de 10:00 am - 18:00 pm.</li>
            <li>Acceso a una sucursal.</li>
            <li>Sin servicio de clases grupales.</li>
          </ul>
          <p><b>Costo $8,500.00 MNX</b></p>
        </section>

        <h5>Venta de Suplementos.</h5>
        <section id="suplementos">
          <p>Pueden ayudar a mejorar la salud general, fortalecer el sistema inmunológico, 
          apoyar la salud ósea y cardiovascular, y mejorar el rendimiento físico.</p>
        </section>

        <h5>Planes de entrenamiento.</h5>
        <section id="entrenamiento">
          <p>Guía estructurada para lograr objetivos de fitness, que incluye los ejercicios, 
          la frecuencia, la intensidad y la duración de las sesiones, son acorde al usuario.</p>
        </section>
      </div>
  </>
  );
}

export default Productos;
import { useState } from "react";


export const Hooks = () => {
    const [title, setTitle] = useState('Contador de visitas')
    const [visit, setVisit] = useState(0)

    const sayHello = () => {
        console.log("Hola", title)
        setTitle("Visitante")
        setVisit(visit +1)
    }
    return (
      <>
      <h6 className="text-x1 mb-3" left>{title}</h6>
      <p>{visit}</p>
      <button className="bg-primary px-3 py-2"
      variant="primary"
      onClick={sayHello}
      >Click</button>
      </>
    );
  }
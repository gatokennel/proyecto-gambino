import React from "react";
import gambino from "../images/gambino.png";

export default function QuienesSomos() {
  return (
    <div className="h-screen w-screen">
      <div className="bg-meat h-10% flex justify-center items-center">
        <h1 className="text-white font-black uppercase p-4">
          Gambino, lo mejor y lo más fresco
        </h1>
      </div>
      <div className="lg:flex lg:justify-evenly lg:items-center bg-black lg:h-90% p-8 h-auto">
        <div className="lg:w-6/12 w-90% border-white border-2 rounded-2xl p-4 mx-auto">
          <h2 className="text-3xl lg:text-4xl text-white font-extralight leading-tight p-4 capitalize ">
            Desde 1950
          </h2>
          <h1 className="text-4xl lg:text-5xl p-4 text-white font-normal leading-tight uppercase">
            Nosotros
          </h1>
          <p className="text-l lg:text-justify text-zinc-200 p-4 font-thin">
            Gambino nace en Córdoba, fruto del trabajo de Don Alfonso Gambino y
            su familia. Se creó como un proyecto familiar que intentaba
            facilitarle a los ciudadanos el acceso a carnes de calidad, quesos y
            vinos, junto con productos especialmente elaborados por la casa. El
            pequeño negocio fue mutando, a veces al borde de desaparecer, pero
            la ilusión de la familia no lo dejó caer. Por esto es que en la
            actualidad, el linaje Gambino sigue fabricando productos enteramente
            caseros con la imagen de Alfonso como impulso.
          </p>
        </div>
        <div className="lg:w-3/12 w-90% flex justify-center items-center mx-auto mt-8 lg:mt-0">
          <img
            className="rounded-full border-white border-2 w-full"
            alt="sahil logo"
            src={gambino}
          />
        </div>
      </div>
    </div>
  );
}

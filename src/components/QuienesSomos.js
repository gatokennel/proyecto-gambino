import React from "react";
//import gambino from "../images/gambino.png";

export default function QuienesSomos() {
  return (
    <div className="lg:h-100vh w-100vw bg-black" id='quienessomos'>
      <div className="bg-meat h-10% flex bg-black justify-center items-center">
        <h1 className="text-white text-2xl font-black uppercase p-4">
          Gambino, lo mejor y lo más fresco
        </h1>
      </div>
      <div className="w-full lg:h-90% flex justify-center items-center bg-black py-8">
        <div className="w-95% lg:w-60% border-white border-2 rounded-2xl p-4">
          <h2 className="text-3xl lg:text-4xl text-white font-extralight leading-tight p-4 capitalize ">
            Desde 1950
          </h2>
          <h1 className="text-4xl lg:text-5xl p-4 text-white font-normal leading-tight uppercase">
            Nosotros
          </h1>
          <p className="text-lg  lg:text-justify text-zinc-200 p-4 font-thin">
            Gambino nace en Córdoba, fruto del trabajo de Don Alfonso Gambino y
            su familia. Se creó como un proyecto que intentaba
            facilitarle a los ciudadanos el acceso a carnes de calidad, quesos y
            vinos, junto con productos especialmente elaborados por la casa. El
            pequeño negocio fue mutando, a veces al borde de desaparecer, pero
            la ilusión de sus miembros no lo dejó caer. Por esto es que en la
            actualidad, el linaje Gambino sigue creando productos enteramente
            caseros con la imagen de Alfonso como impulso y con una sociedad a la que deleitar con los mejores sabores artesanales.
          </p>
        </div>
      </div>
    </div>
  );
}

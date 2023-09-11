import React from "react";
import Tarjeta from '../components/TarjetaNosotras';
import imagen1 from "../img/imagen1.jpg";
import imagen2 from '../img/imagen2.jpg';

const Nosotras = () => {

    const Cardsdata = [
      
  {
    id: 1,
    title: "Mariana Paredes",
    image: imagen1,
    url: "https://github.com/pmariana13",
  },
  {
    id: 2,
    title: "Gregmar Aguilar",
    image: imagen2,
    url: "https://github.com/GregmarA",
  },
  
];


  return (
    <div className="container">
      <div className="row">
        <div class= "div-justificada"> <h4>Nuestra plataforma digital se enfoca en mantener a la comunidad informada sobre las últimas novedades en el clima. A través de un monitoreo constante de la atmósfera y la aplicación de conocimientos científicos, brindamos pronósticos meteorológicos, perspectivas climáticas y alertas específicas para tu área.


        <br /> <br /> 
        En MODER WEATHER, contamos con un equipo de talentosas programadoras especializadas en el mundo web. Trabajamos arduamente para analizar y comparar las nuevas actualizaciones de nuestra página, asegurándonos de ofrecer una experiencia óptima a nuestros usuarios.

Nuestro principal objetivo es proteger a la población, contribuir a la defensa nacional y promover el desarrollo sustentable. Además, cumplimos con nuestros compromisos internacionales en el área climática.

¡Nos enorgullece ser parte de esta misión y estamos aquí para brindarte la información precisa y confiable que necesitas para tomar decisiones informadas sobre el clima.</h4></div>
        {Cardsdata.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Tarjeta imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Nosotras
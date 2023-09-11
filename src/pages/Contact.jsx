import emailjs from 'emailjs-com';
import React, { useState } from "react";

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [comentario, setComentario] = useState('');

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    if (name === 'nombre') {
      setNombre(value.replace(/[^a-zA-Z\s]/g, ''));
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'telefono') {
      setTelefono(value.replace(/[^0-9]/g, ''));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //  lógica  para enviar el correo electrónico
    const templateParams = {
      from_name: nombre,
      from_email: email,
      from_telefono: telefono,
      message: comentario,
    };

    emailjs
      .send(
        'service_ds9xwtd',
        'template_cewmib4',
        templateParams,
        '4-Fav4iv9QqYl4Tda'
      )

      .then((response) => {
        console.log('Correo electrónico enviado con éxito:', response);
        // Limpiar los campos después de enviar el correo
        setNombre('');
        setEmail('');
        setTelefono('');
        setComentario('');
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
      });


      // Guardar la información del cliente en DB json server
      fetch('http://localhost:5000/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          email: email,
          telefono: telefono,
          comentario: comentario,
        }),
      })
        .then((response) => {
          console.log('Cliente guardado en json-server:', response);
        })

  }
  return (
   <form
      className="contact-form"

      onSubmit={handleSubmit}
    >
      <h2>Contacta con nosotros</h2>
    <br />
      <div>
        <h4>Nombre y Apellido</h4>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChangeInput}
          pattern="[A-Za-z\s]+"
          required />
      </div>

      <div>
        <h4>Email</h4>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeInput}
          required />
      </div>

      <div>
        <h4>Teléfono</h4>
      <input
        type="tel"
        name="telefono"
        value={telefono}
        onChange={handleChangeInput}
        pattern="[0-9]+"
        required />
    </div>
    <div>
        <h4>Escribe un mensaje</h4>
        <textarea
          name="comentario"
          value={comentario}
          onChange={(event) => setComentario(event.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">ENVIAR</button>
      </form>
  );
};



export default Contacto;
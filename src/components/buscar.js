import React from "react";

const Barrabuscar = ({handleSumit}) => {

  return (
    <div >
      <form action="" onSubmit={handleSumit}>
        <input className="buscar" type="text" placeholder="Escribe una ciudad" />
        <button>Buscar</button>
      </form>
    </div>
  )
}

export default Barrabuscar;
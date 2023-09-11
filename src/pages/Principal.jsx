import mapaMundi from '../img/mapamundi.jpg';


const Principal = () => {
    return (
        <section id="luna">
            <div>
                <br />
                <h1 id="principal-title">El Clima en el mundo</h1>
                <p id="principal-text"> "Tiempo, es el estado de la atmósfera durante un lapso relativamente
                    breve en un lugar determinado"</p>
                <br />
                <p id="principal-text">“Clima, en cambio, según una de las definiciones más aceptadas, es
                    el conjunto de estados atmosféricos característicos de un determinado lugar
                    referido a un largo período de tiempo"</p>
                <br />
                <img className='mapamundi' src={mapaMundi} alt="mapa" />
                <br />

                <button id="punto"><a href="./inicio">Consulta el Clima</a>

                </button>
                <br />
                <br />
            </div>

            <div id="principal">
                <br />
                <br />
                <h2 id="principal-title"> El cambio climático</h2>
                <p id="principal-text"> A lo largo de la historia de la Tierra, el clima ha cambiado continuamente. Sin embargo, cuando el cambio ocurre de forma natural, es un proceso es lento, que ocurre a lo largo de miles de años. En cambio, el cambio climático causado por la actividad humana desde el inicio de la era industrial ha sido mucho más rápido. Se calcula que la actividad humana está causando un incremento medio en la temperatura de 0,2 ºC por década.

                    Los fenómenos meteorológicos extremos y poco previsibles, el aumento del nivel del mar, el incremento de los periodos de sequía y el riesgo de enfermedades son algunas de las consecuencias del cambio climático.</p>
            </div>
            <br />
            <img id='temperatura' src="../assets/img/montaÑas.jpeg" alt="" width='400px' />

        </section>


    )
}
export default Principal
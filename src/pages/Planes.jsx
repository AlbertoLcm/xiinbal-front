import React from 'react'
import "../css/Planes.css"
import logo from "../assets/logos/logo.jpg"

export const Planes = () => {
    return (
        <section >
            <div className='headerplan'>
                <div className='logo_cont'>
                    <img className='logo' src={logo} width={100} height={100} />
                </div>
                <input className='barradedato' placeholder='¿Que más deseas hacer hoy?' />
            </div>
            <div className='tarjetas'>
                {/* Las tarejetas de los lugares*/}
                <div className="tarjeta1">
                    <div className="cuerpo">
                        <img src={logo} widjth={100} heigjht={100} alt="muestra" />
                    </div>
                    <div className="titulo">Nombre del luegar</div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae rerum minima, numquam, ratione quia provident optio quis corrupti ab neque, vitae accusamus ipsa eveniet quaerat molestiae nobis qui nihil blanditiis?
                    </p>
                </div>
                {/* segunda tarjeta de los lugares*/}
                <div className="tarjeta">
                    <div className="cuerpo">
                        <img src={logo} width={100} height={100} alt="muestra" />
                    </div>
                    <div className="titulo">Nombre del luegar</div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae rerum minima, numquam, ratione quia provident optio quis corrupti ab neque, vitae accusamus ipsa eveniet quaerat molestiae nobis qui nihil blanditiis?
                    </p>
                </div>
            </div>
        </section>
    )
}

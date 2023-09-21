import React from "react";
import '../../css/loadings/Loading.css'

export default function Loading1() {
    
    return(
        <div className="loading__general__container" >
            <div className="square__loading">
                <h2 className="loading__square__text" >Cargando...</h2>
                <div className="loading__square__bar" >
                    <div className="loading__square__bar__fill" />
                </div>
            </div>
        </div>
    )
}


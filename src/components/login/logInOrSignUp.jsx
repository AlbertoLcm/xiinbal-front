import React, { useState } from "react";
import backArrow from '../../assets/logAndSign/arrow_circle.svg';
import logo from '../../assets/logos/Xiinbal_full_logo.png';
import userDefault from '../../assets/logAndSign/user_square.svg';
import '../../css/login/LogInSignUp.css'

export default function LogInOrSignUp({ close }) {
    const [login, setLogin] = useState(true);
    const toggleLogin = () => setLogin(!login);

    return (
        <div className="login__general__container">
            {
                login ? (
                    <>
                        <button className="login__back__arrow__container" onClick={close}>
                            <img src={backArrow} alt="Xiinbal" width={100} height={100} className="login__back__arrow" />
                        </button>
                        <img src={logo} alt="xiinbal" width={100} height={100} className="login__logo__image" />
                        <form className="login__login__form" >
                            <input type="submit" value="Iniciar Sesion" />
                            <input type="text" name="mail" placeholder="Correo" />
                            <input type="text" name="password" placeholder="Contraseña" />
                        </form>
                        <p>O</p>
                        <button onClick={toggleLogin} className="login__register__button" >Registrarse</button>
                    </>
                ) : (
                    <>
                        <button className="login__back__arrow__container" onClick={close} >
                            <img src={backArrow} alt="Xiinbal" width={100} height={100} className="login__back__arrow" />
                        </button>
                        <img src={userDefault} alt="xiinbal" width={100} height={100} />
                        <form className="login__register__form">
                            <label>Nombre</label>
                            <input type="text" name="" />
                            <label>Correo</label>
                            <input type="text" name="" />
                            <label>Contraseña</label>
                            <input type="text" name="" />
                            <label>Edad</label>
                            <input type="number" name="" />
                            <input type="submit" value="Registrarse" />
                        </form>
                        <p>Ya tienes cuenta? <button onClick={toggleLogin} >iniciar sesion</button></p>
                    </>
                )
            }
        </div>
    )
}
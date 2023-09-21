import React, { useState } from "react";
import backArrow from '../../assets/logAndSign/arrow_circle.svg';
import logo from '../../assets/logos/Xiinbal_full_logo.png';
import userDefault from '../../assets/logAndSign/user_square.svg';
import '../../css/login/LogInSignUp.css'
import { useGlobal } from "../../helpers/global/GlobalProvider";

export default function LogInOrSignUp({ close }) {
    const [login, setLogin] = useState(true);
    const [datos, setDatos] = useState({
        email: "",
        password: "",
        name: "",
        edad: "",
    });
    const toggleLogin = () => setLogin(!login);
    const { login:actionLogin, signup } = useGlobal();

    const handleInput = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };
    
    const sendLogin = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = datos;
            await actionLogin({ email, password });
        } catch (error) {
            alert("Error al iniciar sesión", "Intenta de nuevo más tarde");
        }
    };

    const sendSignUp = async (e) => {
        e.preventDefault();
        try {
            const { email, password, name, edad } = datos;
            await signup({ email, password, name, edad });
        } catch (error) {
            alert("Error al iniciar sesión", "Intenta de nuevo más tarde");
        }
    }

    return (
        <div className="login__general__container">
            {
                login ? (
                    <>
                        <button className="login__back__arrow__container" onClick={close}>
                            <img src={backArrow} alt="Xiinbal" width={100} height={100} className="login__back__arrow" />
                        </button>
                        <img src={logo} alt="xiinbal" width={100} height={100} className="login__logo__image" />
                        <form className="login__login__form" onSubmit={sendLogin}>
                            <input type="submit" value="Iniciar Sesion" />
                            <input type="email" name="email" placeholder="Correo" onChange={handleInput} />
                            <input name="password" type="password" placeholder="Contraseña" onChange={handleInput} />
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
                        <form className="login__register__form" onSubmit={sendSignUp}>
                            <label>Nombre</label>
                            <input type="text" name="name" onChange={handleInput} />
                            <label>Correo</label>
                            <input type="email" name="email" onChange={handleInput} />
                            <label>Contraseña</label>
                            <input type="password" name="password" onChange={handleInput} />
                            <label>Edad</label>
                            <input type="number" name="edad" onChange={handleInput} />
                            <input type="submit" value="Registrarse" />
                        </form>
                        <p>Ya tienes cuenta? <button onClick={toggleLogin} >iniciar sesion</button></p>
                    </>
                )
            }
        </div>
    )
}
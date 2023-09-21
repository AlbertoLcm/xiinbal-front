import React, { useEffect, useState } from "react";
import "../css/Home/Home.css";
import instance from "../api/instance";
import squareNav from "../assets/home/square_nav.svg";
import dotLine from "../assets/home/dot_line_track.svg";
import arrow from "../assets/home/arrow_square_down.svg";
import fullLogo from "../assets/logos/Xiinbal_full_logo.png";
import LogInOrSignUp from "../components/Login/logInOrSignUp";
import "../css/Planes.css";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../helpers/global/GlobalProvider";
import Loading1 from "../components/loading/Loading";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";

export default function Home() {
  const searchSaved = localStorage.getItem("search");
  const [searchText, setSearchText] = useState(searchSaved !== null ? searchSaved : "");
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();
  const { selectPlan } = useGlobal();

  const plansSaved = localStorage.getItem("plans");
  const [plans, setPlans] = useState(plansSaved ? JSON.parse(plansSaved) : []);

  const handleInput = (e) => setSearchText(e.target.value);
  
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(plans));
    localStorage.setItem("search", searchText);
  }, [plans]);

  const sendForm = (e) => {
    e.preventDefault();
    setShowLoading(true)
    instance
      .post("/plans/generate", { searchText })
      .then((res) => {
        MySwal.fire({
            title: <strong>{res.data.message}</strong>,
            icon: 'success',
            background: "#FCBB7C",
            timer: 2000
        })
        setPlans(res.data.data);
        setShowLoading(false)
      })
      .catch((err) => {
        MySwal.fire({
            title: <strong>Algo salio mal, intentalo mas tarde</strong>,
            icon: 'error',
            background: "#FCBB7C",
            timer: 1200
        })
        setShowLoading(false)
      });
  };

  const [showForms, setShowForms] = useState(false);
  const toggleForms = () => setShowForms(!showForms);
  const [showLoading, setShowLoading] = useState(false);

  return (
    <>
      {showForms && <LogInOrSignUp close={toggleForms} />}
      {showLoading && <Loading1 /> }
      <img
        src={squareNav}
        alt="Xiinbal"
        width={100}
        height={100}
        className="home__square__nav"
        onClick={toggleForms}
      />
      <div className="home__color__container">
        <img
          src={fullLogo}
          alt="Xiinbal"
          width={100}
          height={100}
          className="home__logo__image"
        />
        <img
          src={dotLine}
          alt="DotLine"
          width={100}
          height={100}
          className="home_dote_line"
        />
      </div>
      <div className="home__white__container">
        <p>No salgas de casa sin Xíinbal, tu especialista en planes.</p>
        <h2>¿Qué deseas realizar el dia de hoy?</h2>
        <form onSubmit={sendForm} className="search">
          <input type="text" value={searchText} onChange={handleInput} disabled={showLoading} />
        </form>
        <img
          src={arrow}
          alt="Xiinbal"
          height={100}
          width={100}
          className="home__arrow__image"
        />
      </div>

      {plans && (
        <>
          <h2 className="title__plans">Planes creados</h2>
          <div className="tarjetas">
            {plans.map(
              (plan) =>
                plan[0] && (
                  <div
                    className="tarjeta"
                    onClick={() => {
                      selectPlan(plan);
                      navigate(`/plan`);
                    }}
                  >
                    <div className="cuerpo">
                      <img src={plan[0].photoUrl} width={100} height={100} alt="Xiinbal" className="plans__card__image" />
                    </div>
                    <div className="titulo">{plan[0].name}</div>
                    <p>{plan[0].vicinity}</p>
                  </div>
                )
            )}
          </div>
        </>
      )}
    </>
  );
}

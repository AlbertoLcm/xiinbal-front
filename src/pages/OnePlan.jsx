import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useGlobal } from "../helpers/global/GlobalProvider";
import "../css/OnePlan.css";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function OnePlan() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBRKSvKZYfh2UjnTeCRL8IUckfIZbz5d8U",
  });
  const { planSelected } = useGlobal();
  const [center, setCenter] = useState({
    lat: 9.934739,
    lng: -84.087502,
  });

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(planSelected);
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className="page-plan">
      <div className="content">
        <ul>
          {planSelected &&
            planSelected.map((plan, index) => (
              <li key={index}>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </li>
            ))}
        </ul>
      </div>
      <div className="map">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          {planSelected &&
            planSelected.map((plan) => (
              <MarkerF
                key={plan.place_id} 
                position={{lat: plan.geometry.location.lat, lng: plan.geometry.location.lng }} 
                />
            ))}
        </GoogleMap>
      </div>
    </section>
  );
}

export default OnePlan;

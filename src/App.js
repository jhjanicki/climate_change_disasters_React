import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styled from "styled-components";
import './App.css';
import {Legend} from './Legend';
import {Slider} from './Slider';
import {ToggleContainer} from './ToggleContainer';
mapboxgl.accessToken = 'pk.eyJ1IjoiamhqYW5pY2tpIiwiYSI6Il9vb1ZlWnMifQ.zJie3Sr8zh3h5rR8IBMB2A';


function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(9.168248);
  const [lat, setLat] = useState(11.987638);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/jhjanicki/ckrukpn7t13zy18o82tq8o7wp',
        center: [lng, lat],
        zoom: zoom
      });
    });


  return (
        <>
          <MapContainerStyled ref={mapContainer} />
          <div id='console'>
            <p> <b>Climate change effects by country</b></p>
            <Legend />
            <Slider />
            <ToggleContainer />
          </div>
        </>

  );
}

const MapContainerStyled = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`

export default App;

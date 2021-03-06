import React, { useState } from "react";
import MapGL, { Source, Layer } from "react-map-gl";
import styled from "styled-components";
import "./App.css";
import { Legend } from "./Legend";
import { Slider } from "./Slider";
import { ToggleContainer } from "./ToggleContainer";
import { countries } from "./data/countries";
import { dataLayer } from "./mapStyle.js";

const MAPBOX_TOKEN = "pk.eyJ1IjoiamhqYW5pY2tpIiwiYSI6Il9vb1ZlWnMifQ.zJie3Sr8zh3h5rR8IBMB2A";


function App() {

    const [viewport, setViewport] = useState({
        latitude: 11.987638,
        longitude: 9.168248,
        zoom: 2
    });


    return (
        <>
            <MapGL
                {...viewport}
                width="100vw"
                height="100vh"
                style= {{ "position": "absolute" }}
                onViewportChange={setViewport}
                mapStyle="mapbox://styles/jhjanicki/ckrukpn7t13zy18o82tq8o7wp"
                interactiveLayerIds={["countriesFill"]}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                <Source type="geojson" data={countries}>
                    <Layer {...dataLayer} beforeId='settlement-subdivision-label'/>
                </Source>
            </MapGL>
            <SidepanelStyled>
                <p> <b>Climate change effects by country</b></p>
                <Legend />
                <Slider />
                <ToggleContainer />
            </SidepanelStyled>
        </>

    );
}


const SidepanelStyled = styled.div`
  opacity: 0.9;
  position: absolute;
  width: 300px;
  height:400px;
  margin: 10px;
  padding: 10px 20px 10px 30px;
  background-color: #F0F0F1;
  border-radius: 5px;
  z-index: 25;
  transition: 0.3s ease-in-out;
  box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16);
`;

export default App;

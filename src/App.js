import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapGL, { Source, Layer, Feature } from "react-mapbox-gl";
import styled from "styled-components";
import "./App.css";
import { Legend } from "./Legend";
import { Slider } from "./Slider";
import { ToggleContainer } from "./ToggleContainer";
import { countries } from "./data/countries";
mapboxgl.accessToken = "pk.eyJ1IjoiamhqYW5pY2tpIiwiYSI6Il9vb1ZlWnMifQ.zJie3Sr8zh3h5rR8IBMB2A";


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
            style: "mapbox://styles/jhjanicki/ckrukpn7t13zy18o82tq8o7wp",
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on("load", function () {

            map.current.addSource("countries", {
                type: "geojson",
                data: countries
            });

            //after adding source add the fill as a layer on the map
            map.current.addLayer({
                "id": "countriesfill",
                "type": "fill",
                "source": "countries",
                "paint": {
                    "fill-color": [
                        "interpolate",
                        ["linear"],
                        ["get", "NDgain"],
                        0,
                        "#888888",
                        20,
                        "#49010d",
                        30,
                        "#cb181d",
                        40,
                        "#fb6a4a",
                        50,
                        "#fc9272",
                        60,
                        "#fcbba1",
                        70,
                        "#fee0d2",
                        80,
                        "#fff5f0"
                    ],
                    "fill-opacity": 0.9
                }
            }, "settlement-subdivision-label");

        });

    });




    return (
        <WrapperStyled>
            <MapContainerStyled ref={mapContainer} />
            {/* <Source type="geojson" data={countries}>
                <Layer id = 'Polygon'
                    type= 'fill'
                    source= {countries}
                    type = 'geojson'
                    data = {countries}></Layer>
            </Source> */}
            <SidepanelStyled>
                <p> <b>Climate change effects by country</b></p>
                <Legend />
                <Slider />
                <ToggleContainer />
            </SidepanelStyled>
        </WrapperStyled>

    );
}

const WrapperStyled = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', serif;
`;

const MapContainerStyled = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`;

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

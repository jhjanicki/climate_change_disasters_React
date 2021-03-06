import styled from "styled-components";
import { useState } from "react";

export const Slider = () => {

    const [sliderVal, setSliderVal] = useState("1960");


    return (
        <div id='sliderWrapper'>
            <SliderStyled type='range' min='1960' max='2010' step='10' value={sliderVal} onChange={(event)=> setSliderVal(event.target.value)} />
            <StartStyled>start</StartStyled>
            <EndStyled>end</EndStyled>
            <p>Decade: <span id="selectedDecade">1960s</span></p>
        </div>);
};


const SliderStyled = styled.input`
    margin-top: 20px;
    width:280px;
`;

const StartStyled = styled.div`
    position: relative;
    display: inline;
    top: -5px;
    margin-left: 0px;
    font-size: 11px;
`;

const EndStyled = styled.div`
    position: relative;
    display: inline;
    top: -5px;
    margin-left: 240px;
    font-size: 11px;
`;

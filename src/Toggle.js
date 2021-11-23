import React from "react";
import styled from "styled-components";
import { StyledToggle, StyledTogglePointer, StyledInput } from "./SharedStyles";
import { useState } from "react";

const colorObj = { "1":"#a8ddb5","2":"#2b8cbe","3":"#c51b8a","4":"#d8b365","5":"#8073ac" };

export const Toggle = ({ id, disaster }) => {

    const [checked, setChecked] = useState(true);
    const toggleToggle = () => {
        console.log(checked);
        setChecked((prevState)=>!prevState);
    };

    console.log(checked);
    return (
        <div>
            <StyledToggle color={colorObj[id]} id={`filter${id}`} onClick={toggleToggle}>
                <StyledInput id={`layer${id}On`} type="radio" value={`layer${id}On`} name={`toggle${id}`} checked={checked} />
                <StyledInput id={`layer${id}Off`} type="radio" value={`layer${id}Off`} name={`toggle${id}`} />
                <StyledTogglePointer color={colorObj[id]} checked={checked}></StyledTogglePointer>
            </StyledToggle>
            <ToggleTextStyled className = "disasterName">{disaster}</ToggleTextStyled>

        </div>
    );
};


const ToggleTextStyled = styled.p`
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: 0px;
    margin-top:5px;
    margin-bottom:5px;
`;

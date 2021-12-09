import React from "react";
import styled from "styled-components";

const colorObj = { "1":"#a8ddb5","2":"#2b8cbe","3":"#c51b8a","4":"#d8b365","5":"#8073ac" };

export const Toggle = ({ id, disaster, checked, onToggle }) => {


    return (
        <div>
            <StyledToggle color={colorObj[id]} id={`filter${id}`} onClick={()=>onToggle(disaster)}>
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

export const StyledToggle = styled.div`
  position: relative;
  height: 14px;
  width: 35px;
  border-radius: 15px;
  background: #cfcfcf;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  margin-left: -8px;
  &:hover{
    cursor:pointer;
  }
`;

export const StyledInput = styled.input`
  display:none;
  width: 100%;
  height: 200%;
  position: absolute;
  top: -7px;
  left: 0;
  z-index: 2;
  margin: 0;
`;

export const StyledTogglePointer = styled.div`
  position: absolute;
  top: -2px;
  left: 18px;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: ${(props)=>props.checked?props.color:"#777777"};
  -webkit-transition: left .15s ease-out;
  transition: left .15s ease-out;
  left:${(props)=>props.checked?"18px":"0px"};
`;


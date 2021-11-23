import styled from "styled-components";

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



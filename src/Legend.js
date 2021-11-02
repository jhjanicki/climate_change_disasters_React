import styled from "styled-components";
import legendImg from "./static/legend1.png";

export const Legend = () => (
    <LegendWrapperStyled className="inlineWrapper">
        <div className="inline">worse (28)</div>
        <LegendStyled className="inline" src={legendImg} />
        <div className="inline">better (77)</div>
    </LegendWrapperStyled>
);


const LegendWrapperStyled = styled.div`
    margin-top: 15px;
    font-size: 11px;
`;

const LegendStyled = styled.img`
    width:170px;
    height:20px;
`;

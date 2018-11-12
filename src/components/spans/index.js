import styled from 'styled-components';

const InfoValue = styled.span`
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    color: #1E135F;
`;

const InfoName = styled.span`
    font-weight: 600;
    line-height: normal;
    font-size: 10px;
color: rgba(30, 19, 95, 0.5);
`;

const GrowText = styled.span`
    font-weight: 600;
    line-height: normal;
    font-size: 10px;
    color: #1E135F;
    position: absolute;
    bottom: 23px;
    left: 5px;
`;

export {
    GrowText,
    InfoName,
    InfoValue,
}

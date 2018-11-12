import styled from 'styled-components';
import { Media } from 'reactstrap';

const MediaObject = styled(Media)`
    border-radius: 10px;
    border: 1px solid #cec3c3;
`;

const MediaBody = styled(Media)`
    height: 72px;
    margin-left: 10px;
`;

const GradientObject = styled(Media)`
    position: absolute;
    width: 100%;
    height: 60px; 
    bottom: 0px;
`;

export {
    MediaObject,
    MediaBody,
    GradientObject,
};
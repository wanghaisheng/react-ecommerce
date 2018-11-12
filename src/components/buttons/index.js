import styled from 'styled-components';
import { Button } from 'reactstrap';

const MetricButton = styled(Button)`
    width: 100%;
    height: 34px;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 8px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #4B42C6;
    background: #FFFFFF;
    border: 0.5px solid #4B42C6;
    box-sizing: border-box;
    border-radius: 6px;
    margin-top: 6px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:focus {
        box-shadow: none;
    }

    &.add {
        text-align: center;
        border-color: #BFBBF2;
        font-size: 10px;
        color: #1E135F;
    }
`;

const SubCollapseButton = styled(Button)`
    width: 100%;
    height: 34px;
    padding-left: 5px;
    background: #E6E8ED;
    color: #1E135F;
    border: none;
    border-radius: 0;
    font-size: 12px;
    text-align: left;
    border: 0.5px solid #D6D6DA;

    &:focus {
        box-shadow: none;
    }
`;

const FilterButton = styled(Button)`
	width: 100%;
	height: 34px;
	border: 0.5px solid #BFBBF2;
	border-radius: 17px;
	font-weight: bold;
	line-height: normal;
	font-size: 10px;	
	color: #4B42C6;

	&:focus {
		color: #1E135F;
    background: #E6E8ED;
		border: 0.5px solid #BFBBF2;
		box-shadow: none;
	}
`;

const MainCollapseButton = styled(Button)`
	width: 100%;
	height: 34px;
	padding-left: 5px;
	background: #4B42C6;
	color: #FAFAFB;
	border-radius: 0;
	text-align: left;
	font-weight: 600;
	font-size: 12px;

	&:focus {
		box-shadow: none;
	}
`;

const LinkButton = styled(Button)`
	font-style: normal;
	font-weight: normal;
	line-height: normal;
	font-size: 8px;
	padding: 0px;
	color: #ED3E67;
`;

export {
    MetricButton,
    LinkButton,
    MainCollapseButton,
    FilterButton,
    SubCollapseButton,    
}
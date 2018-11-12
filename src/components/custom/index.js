import styled from 'styled-components';
import { ListGroupItem } from 'reactstrap';

const Title = styled.div`
    font-size: 22px;
    color: #1E135F;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const ProductStatusBar = styled.div`
    background: white;
    height: 84px;
    border-radius: 12px;
    border: 1px solid #cec3c3;
    margin-top: 9px;
`;

const ProductStatus = styled.div`
    width: 20%;
    padding-left: 16px;
`;

const IdText = styled.div`
	font-weight: normal;
	line-height: normal;
	font-size: 12px;
	color: rgba(30, 19, 95, 0.5);
`;

const ProductListItem = styled(ListGroupItem)`
	padding: 7px 9px 7px 24px;
	font-size: 12px;
	color: rgba(30, 19, 95, 0.5);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;

	&:hover {
		background: rgba(0,0,0,0.07);
	}
`;

const FilterSection = styled.div`
	padding: 5px 20px;

	& > .btn-group {
		width: 100%;
	}

	& > .input-group {
		height: 34px;
		background: #FAFAFB;
		border: 0.5px solid #BFBBF2;
		border-radius: 6px;
		font-size: 12px;
		color: rgba(76, 76, 85, 0.7);

		& > input {
			height: 32px;
			font-size: 12px;
			color: rgba(76, 76, 85, 0.7);
		}

		& > .input-group-append > button {
			background: #4B42C6;
			width: 34px;
			display: flex;
			align-items: center;
			justify-content: center;	
		}
	}
`;

export {
    Title,
    ProductStatusBar,
    ProductStatus,
    IdText,
    ProductListItem,
    FilterSection,
};
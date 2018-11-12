import React from 'react';
import styled from 'styled-components';

const OuterCircle = styled.div`
	width: 14px;
	height: 14px;
	background: #FFFFFF;
	border: 1px solid #D6D6DA;
	box-sizing: border-box;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const InnerCircle = styled.div`
	background: #00C1FC;
	border-radius: 100px;
	height: 8px;
	width: 8px;
`;

function StatusIcon({ ...props }) {
	const { checked } = props;

	return (
		<OuterCircle>
			{checked && <InnerCircle />}
		</OuterCircle>
	);
}

export default StatusIcon;
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div `
	background: #1E135F;
	width: 100%;
	height: 120px;
	padding: 20px;
`;
const LogoContainer = styled.div `
	background: rgba(240, 70, 40, 0.3);
	width: 188px;
	height: 80px;
`;
const LogoPlaceholder = styled.div `
	font-family: Open Sans;
	font-style: bold;
	font-size: 12px;
	color: white;
	line-height: 16px;
`;
const HeaderTitle = styled.div `
	font-weight: bold;
	line-height: normal;
	font-size: 28px;
	margin-left: 60px;
	color: #FFFFFF;
`;

function Header({ ...props }) {
	return (
		<HeaderContainer className='d-flex align-items-center'>
			<LogoContainer className='d-flex align-items-center justify-content-center'>
				<LogoPlaceholder>Logo Placeholder</LogoPlaceholder>
			</LogoContainer>
			<HeaderTitle>Customer Name&nbsp;&nbsp;<i className='fas fa-cog' style={{fontSize: 20}}/></HeaderTitle>
		</HeaderContainer>
	)
}

export default Header;
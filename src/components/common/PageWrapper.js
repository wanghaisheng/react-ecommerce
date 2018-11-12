import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const PageContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow-x: hidden;
`;

function PageWrapper({ ...props }) {
	const { children } = props;

	return (
		<PageContainer>
			<Header />
			{ children }
		</PageContainer>
	)
}

export default PageWrapper;

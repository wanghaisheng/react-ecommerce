import React, { Component } from 'react';

import { 
	PageWrapper 
} from '../../components';
import NavigationBar from './NavigationBar';
import ProductPanel from './ProductPanel';
import StatisticsGraphPanel from './StatisticsGraph';

class CardView extends Component {

	render() {

		return (
			<PageWrapper>
				<div className='d-flex overflow-y-hide'>
					<NavigationBar />
					<ProductPanel />
					<StatisticsGraphPanel />
				</div>
			</PageWrapper>
		)
	}
}

export default CardView;
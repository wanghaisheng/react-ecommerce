import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
	Button,
	ButtonGroup, 
	InputGroup,
	InputGroupAddon,
	Input,
	Collapse,
	ListGroup,
} from 'reactstrap';

import { 
	StatusIcon,
	MetricButton,
	FilterSection,
	FilterButton,
	MainCollapseButton,
	SubCollapseButton,
	ProductListItem,
} from '../../components';
import { loadProducts } from '../../reducer/product';
import { setFilterType, setFilterQuery } from '../../reducer/filter';

const NavBarContainer = styled.div`
	width: 228px;
	background: #FFFFFF;
	box-shadow: 0px 2px 10px rgba(37, 37, 57, 0.05), 1px 2px 3px rgba(37, 37, 57, 0.1);
	z-index: 1;
`;
const MetricSection = styled.div`
	padding: 20px;
`;
const ProductList = styled.div`
	margin-top: 5px;
`;
const ProductName = styled.div`
	width: 80%;
	white-space: nowrap; 
	overflow: hidden;
	text-overflow: ellipsis;
`;

class NavigationBar extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			collapse: false,
		};
		
		this.handleQueryChange = this.handleQueryChange.bind(this);
	}

	componentDidMount() {
		this.props.loadProducts();
	}

	toggle = name => ev => {
		this.setState({
			menCollapse: false,
			womenCollapse: false,
			birdsCollapse: false,
			reptilesCollapse: false,
		})
		this.setState({
			[name + 'Collapse']: !this.state[name + 'Collapse'],
		});
	};

	toggleMetric = name => ev => {
		this.setState({
			[name + '_status']: !this.state[name + '_status'],
		})
	};

	handleQueryChange(e) {
		this.props.setFilterQuery(e.target.value);
	}

	filterStarred = isStarred => ev => {
		this.props.setFilterType(isStarred);
	};

	render() {
		const {
			products,
			isLoading,
		} = this.props;

		return (
			<NavBarContainer>
				<MetricSection>
					<MetricButton className='add' outline><i className="far fa-plus-circle"></i>Add/Edit Metrics</MetricButton>
					<MetricButton outline onClick={this.toggleMetric('or')}>ORDERED REVENUE<StatusIcon checked={this.state['or_status']} /></MetricButton>
					<MetricButton outline onClick={this.toggleMetric('us')}>UNITS SOLD<StatusIcon checked={this.state['us_status']} /></MetricButton>
					<MetricButton outline onClick={this.toggleMetric('oor')}>ORGANIC ORDERED REVENUE<StatusIcon checked={this.state['oor_status']} /></MetricButton>
					<MetricButton outline onClick={this.toggleMetric('por')}>PAID ORDERED REVENUE<StatusIcon checked={this.state['por_status']} /></MetricButton>
					<MetricButton outline onClick={this.toggleMetric('pou')}>PAID ORDERED UNITS<StatusIcon checked={this.state['pou_status']} /></MetricButton>
				</MetricSection>
				<FilterSection>
					<ButtonGroup>
						<FilterButton outline onClick={this.filterStarred(false)}>Browse All</FilterButton>
						<FilterButton outline onClick={this.filterStarred(true)}>Starred</FilterButton>
					</ButtonGroup>
				</FilterSection>
				<FilterSection>
					<InputGroup>
						<Input placeholder='Search' onChange={this.handleQueryChange} />
						<InputGroupAddon addonType='append'>
							<Button><i className='fas fa-search' /></Button>
						</InputGroupAddon>
					</InputGroup>
				</FilterSection>
				<ProductList>
					<MainCollapseButton onClick={this.toggle('shoe')}><i className="fas fa-angle-down"></i>&nbsp;&nbsp;Shoes</MainCollapseButton>
					<Collapse isOpen={this.state['shoeCollapse']}>
						<SubCollapseButton onClick={this.toggle('men')}>
							{this.state['menCollapse'] && <i className="fas fa-angle-left"></i>}
							&nbsp;&nbsp;Men's Shoes
						</SubCollapseButton>
						<Collapse isOpen={this.state['menCollapse']}>
							{isLoading && <div>Loading...</div>}
							{!isLoading && 
								<ListGroup>
									{
										products.map((product, id) => 
											<ProductListItem key={id}>
												<ProductName>{product.name}</ProductName>
												{product.isStarred ? <i className="fas fa-star" style={{color: '#4B42C6', fontSize: 10}}></i> : <i className="fas fa-star" style={{color: '#AEACB2', fontSize: 10}}></i>}
											</ProductListItem>)
									}
								</ListGroup>
							}
						</Collapse>
						<SubCollapseButton onClick={this.toggle('women')}>
							{this.state['womenCollapse'] && <i className="fas fa-angle-left"></i>}
							&nbsp;&nbsp;Women's Shoes
						</SubCollapseButton>
						<Collapse isOpen={this.state['womenCollapse']}>
						</Collapse>
						<SubCollapseButton onClick={this.toggle('birds')}>
							{this.state['birdsCollapse'] && <i className="fas fa-angle-left"></i>}
							&nbsp;&nbsp;Birds
						</SubCollapseButton>
						<Collapse isOpen={this.state['birdsCollapse']}>
						</Collapse>
						<SubCollapseButton onClick={this.toggle('reptiles')}>
							{this.state['reptilesCollapse'] && <i className="fas fa-angle-left"></i>}
							&nbsp;&nbsp;Reptiles
						</SubCollapseButton>
						<Collapse isOpen={this.state['reptilesCollapse']}>
						</Collapse>
					</Collapse>
				</ProductList>
			</NavBarContainer>
		)
	}
}

// Actually filter should be done on back-end side.
// It will send params like search query, filter type (isStarred or not).
function GetFilteredProducts(products, filterStarred, query) {
	let lowerCaseQuery = query.toLowerCase();
	let result1 = products.filter(product => (product.name.toLowerCase()).indexOf(lowerCaseQuery) > -1);

	if (filterStarred) {
		return result1.filter(product => product.isStarred);
	}

	return result1;
}

const mapStateToProps = state => ({
	products: GetFilteredProducts(state.product.products, state.filter.filterStarred, state.filter.query),
	isLoading: state.product.isLoading,
});

const mapDispatchToProps = {
	loadProducts,
	setFilterType,
	setFilterQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
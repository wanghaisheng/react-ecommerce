import React, { Component } from 'react';
import styled from 'styled-components';
import { 
	Media,
	Col,
} from 'reactstrap';

import greenGradient from '../../assets/images/green.png';
import pinkGradient from '../../assets/images/pink.png';
import purpleGradient from '../../assets/images/purple.png';
import blueGradient from '../../assets/images/blue.png';
import {
	Title,
	GrowText,
	GradientObject,
	InfoValue,
	InfoName,
	ProductStatus,
	ProductStatusBar,
	IdText,
	LinkButton,
	MediaObject,
	MediaBody
} from '../../components';

// DUMMY Data - should be pulled out by api
const PRODUCTS = [{
		"name": "Supra Skytop Navy & White Canvas Skate Shoe Mens Size 10.5",
		"image": "/assets/images/product1.jpg",
		"id": "B01LZMHWF6",
		"isStarred": false,
		"orderedRevenue": 1082384,
		"unitsSold": 213358,
		"organicOrderedRevenue": 976324,
		"paidOrders": 1083852
	}, {
		"name": "Supra Skytop Red Canvas Skate Shoe Mens Size 10.5",
		"image": "/assets/images/product2.jpg",
		"id": "B01LZMHWF6",
		"isStarred": false,
		"orderedRevenue": 1082384,
		"unitsSold": 213358,
		"organicOrderedRevenue": 976324,
		"paidOrders": 1083852
	}, {
		"name": "Supra Skytop Ocean/White Canvas Skate Shoe Mens Size 10.5",
		"image": "/assets/images/product3.jpg",
		"id": "B01LZMHWF6",
		"isStarred": true,
		"orderedRevenue": 1082384,
		"unitsSold": 213358,
		"organicOrderedRevenue": 976324,
		"paidOrders": 1083852
	}, {
		"name": "Supra Skytop Grey/White Canvas Skate Shoe Mens Size 10.5",
		"image": "/assets/images/product4.jpg",
		"id": "B01LZMHWF6",
		"isStarred": true,
		"orderedRevenue": 1082384,
		"unitsSold": 213358,
		"organicOrderedRevenue": 976324,
		"paidOrders": 1083852
}];
const GRADIENTS = [
	greenGradient,
	blueGradient,
	pinkGradient,
	purpleGradient,
];

const RootContainer = styled(Col)`
	min-width: 376px;
	background: #F1F3F8;
`;
const ProductName = styled.div`
	font-weight: bold;
	line-height: 18px;
	font-size: 12px;
	width: 80%;
	color: #1E135F;
`;

class ProductInfo extends Component {

	renderValue(value) {		
		let result;

		if (value > 1000000) {
			result = (value / 1000000).toFixed(2);
			return <span>{result}M</span>
		} else {
			result = (value / 1000).toFixed(0);
			return <span>{result}K</span>
		}
	}

	render() {
		const { 
			image,
			isStarred,
			name,
			id,
			orderedRevenue,
			unitsSold,
			organicOrderedRevenue,
			paidOrders,
			gradient,
		} = this.props;

		return (
			<div className='mt-3'>
				<Media className='align-items-center'>
					<Media left>
						<MediaObject object src={image} width={72} height={72} alt={name} />
					</Media>
					<MediaBody body className='d-flex justify-content-between flex-column' style={{height: 72}}>
						<div className='d-flex justify-content-between'>
							<LinkButton color='link'>Remove Product</LinkButton>
							{isStarred ? <i className="fas fa-star" style={{color: '#4B42C6', fontSize: 10}}></i> : <i className="fas fa-star" style={{color: '#AEACB2', fontSize: 10}}></i>}
						</div>
						<ProductName>
							{name}
						</ProductName>
						<IdText>{id}</IdText>
					</MediaBody>
				</Media>
				<ProductStatusBar className='d-flex'>
					<ProductStatus className='d-flex flex-column justify-content-center'>
						<InfoValue>${this.renderValue(orderedRevenue)}</InfoValue>
						<InfoName>Ordered R.</InfoName>
					</ProductStatus>
					<ProductStatus className='d-flex flex-column justify-content-center'>
						<InfoValue>{this.renderValue(unitsSold)}</InfoValue>
						<InfoName>Units Sold</InfoName>
					</ProductStatus>
					<ProductStatus className='d-flex flex-column justify-content-center'>
						<InfoValue>{this.renderValue(organicOrderedRevenue)}</InfoValue>
						<InfoName>Organic O.</InfoName>
					</ProductStatus>
					<ProductStatus className='d-flex flex-column justify-content-center'>
						<InfoValue>${this.renderValue(paidOrders)}</InfoValue>
						<InfoName>Paid Orde.</InfoName>
					</ProductStatus>
					<ProductStatus className='d-flex flex-column justify-content-center position-relative p-0'>
						<GradientObject src={gradient} alt='Gradient'/>
						<GrowText>+ 350K&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-up" style={{color: '#3EED7B'}}></i></GrowText>
					</ProductStatus>
				</ProductStatusBar>
			</div>
		)
	}
}
class ProductPanel extends Component {

	render() {

		return (
			<RootContainer xs={12} sm={4} className='p-3'>
				<Title>Products Selected <span style={{fontSize: 12}}>(Max 4)</span></Title>
				{
					PRODUCTS.map((product, id) => (
						<ProductInfo 
							key={id}
							gradient={GRADIENTS[id]}
							{ ...product }
						/>
					))
				}
			</RootContainer>
		)
	}
}

export default ProductPanel;
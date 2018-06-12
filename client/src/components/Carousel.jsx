import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const CarouselInner = styled.div.attrs({
	className: "carousel-inner"
})`
	height: 500px;
	width: 500px;
	margin: auto;
	box-shadow: 5px 10px 18px black;
`;

const CarouselControlPrev = styled.a.attrs({
	className: "carousel-control-prev"
})`
	margin-left: 250px;
`;

const CarouselControlNext = styled.a.attrs({
	className: "carousel-control-next"
})`
	margin-right: 250px;
`;

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-ride="carousel"
			>
				<CarouselInner>
					{this.props.photos.map((photo, i) => {
						if (photo === this.props.photos[0]) {
							return (
								<div key={0} className="carousel-item active">
									<img
										className="d-block w-100"
										src={photo.url}
									/>
								</div>
							);
						} else {
							return (
								<div key={i} className="carousel-item">
									<img
										className="d-block w-100"
										src={photo.url}
									/>
								</div>
							);
						}
					})}
				</CarouselInner>
				<CarouselControlPrev
					href="#carouselExampleControls"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Previous</span>
				</CarouselControlPrev>
				<CarouselControlNext
					href="#carouselExampleControls"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Next</span>
				</CarouselControlNext>
			</div>
		);
	}
}

export default Carousel;

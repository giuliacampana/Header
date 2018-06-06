import React from "react";
import ReactDOM from "react-dom";

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
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="http://dummyimage.com/202x136.png/5fa2dd/ffffff"
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="http://dummyimage.com/202x136.png/5fa2dd/ffffff"
							alt="Second slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="http://dummyimage.com/202x136.png/5fa2dd/ffffff"
							alt="Third slide"
						/>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleControls"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleControls"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Next</span>
				</a>
			</div>
		);
	}
}

export default Carousel;

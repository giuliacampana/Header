import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const CarouselInner = styled.div.attrs({
	className: "carousel-inner"
})`
	height: 300px;
	width: 300px;
	margin-right: 75px;
`;

const CarouselControlPrev = styled.a.attrs({
	className: "carousel-control-prev"
})`
	margin-right: 75px;
`;

const CarouselControlNext = styled.a.attrs({
	className: "carousel-control-next"
})`
	margin-right: 75px;
`;

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div
				className="modal fade"
				id="exampleModal2"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							/>
							<span aria-hidden="true">
								{" "}
								Close Button &times;
							</span>
							<div
								id="carouselExampleControls"
								className="carousel slide"
								data-ride="carousel"
							>
								<CarouselInner>
									{this.props.photos.map((photo, i) => {
										if (photo === this.props.photos[0]) {
											return (
												<div
													key={0}
													className="carousel-item active"
												>
													<img
														className="d-block w-100"
														src={photo}
													/>
												</div>
											);
										} else {
											return (
												<div
													key={i}
													className="carousel-item"
												>
													<img
														className="d-block w-100"
														src={photo}
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
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Carousel;

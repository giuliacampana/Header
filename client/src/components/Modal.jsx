import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalBody = styled.div.attrs({
	className: "modal-body"
})`
	color: black;
`;

const ModalTitle = styled.div.attrs({
	className: "modal-title",
	id: "exampleModalLabel"
})`
	color: black;
	font-size: 20px;
	position: absolute;
	right: 50%;

	a {
		color: #ed7043;
		font-size: 20px;
	}
`;

const ModalDialog = styled.div.attrs({
	className: "modal-dialog"
})`
	max-height: 300px;
	max-width: 100%;
	width: 400px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) !important;
`;

const ModalFooter = styled.div.attrs({
	className: "modal-footer"
})`
	a {
		color: #ed7043;
		position: absolute;
		left: 50%;
		bottom: 6%;
		transform: translate(-50%, -50%) !important;
	}

	button {
		background: #ed7043;
		color: white;
		width: 100px;
		margin-left: 140px;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-right: 10px;
	}
`;

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			password: ""
		};
	}

	handleUserChange(e) {
		this.setState({
			userName: e.target.value
		});
	}

	handlePasswordChange(e) {
		this.setState({
			password: e.target.value
		});
	}

	render() {
		return (
			<div>
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<ModalDialog role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
								<ModalTitle>
									Sign in or{" "}
									<a href="https://tsecure.hostelworld.com/en/signup">
										Sign up
									</a>
								</ModalTitle>
							</div>
							<ModalBody>
								<form role="form">
									<div className="form-group">
										<label htmlFor="usrname">
											{" "}
											EMAIL ADDRESS/ USERNAME
										</label>
										<input
											type="text"
											className="form-control"
											id="usrname"
											value={this.state.userName}
											onChange={e => {
												this.handleUserChange(e);
											}}
											placeholder="Username/email address"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="psw">PASSWORD</label>
										<input
											type="text"
											value={this.state.password}
											onChange={e => {
												this.handlePasswordChange(e);
											}}
											className="form-control"
											id="psw"
											placeholder="Password"
										/>
									</div>
								</form>
							</ModalBody>
							<ModalFooter>
								<a> Forgot password? </a>
								<button
									type="button"
									className="btn btn-search"
								>
									Login
								</button>
							</ModalFooter>
						</div>
					</ModalDialog>
				</div>
			</div>
		);
	}
}

export default Modal;

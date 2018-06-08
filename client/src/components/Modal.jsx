import React from "react";
import ReactDOM from "react-dom";

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

	//make a function to make a new user in user table when you click on login

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
					<div className="modal-dialog" role="document">
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
								<div
									className="modal-title"
									id="exampleModalLabel"
								>
									Sign in or{" "}
									<a href="https://tsecure.hostelworld.com/en/signup">
										Sign up
									</a>
								</div>
							</div>
							<div className="modal-body">
								<form role="form">
									<div className="form-group">
										<label for="usrname">
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
										<label for="psw">PASSWORD</label>
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
							</div>
							<div className="modal-footer">
								<a> Forgot password? </a>
								<button
									type="button"
									className="btn btn-search"
								>
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;

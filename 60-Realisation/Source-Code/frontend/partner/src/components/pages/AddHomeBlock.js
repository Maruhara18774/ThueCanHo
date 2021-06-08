/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import { Link } from "react-router-dom";
import "../../style/pages/AddHomeBlock.css";
import Navbar from "../paner-form/Navbar";

class AddHomeBlock extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			idtk: 0,
		}
	}
	
	handleSubmit = () => {
		this.state.idtk = document.location.pathname.substring(14);
		this.setState(this);
		if(this.state.idtk !== "0"){
			this.props.history.push("/registrationDetail/mainContact/" + this.state.idtk); 
			//this.props.history.push("/lstApartment/" + this.state.idTk); 
		}
	};
	render(){
		return (
			<div>
				<Navbar />
				<div className="c-block responsiveContainer">
					<div className="c-block">
						<div className="c-flexbox css-19psm70">
							<div className="c-block card">
								<div className="c-block">
									<p className="c-text css-n0mx2z">
										<span>I already have accommodation listed in TERA</span>
									</p>
								</div>
								<div className="c-block">
									<span className="c-text css-1d279ga">
										<span>
											Ask your Market Manager to link your account to the
											accommodation that you have listed
										</span>
									</span>
								</div>
								<div className="c-block css-btn-edit">
									<div className="c-flexbox css-1bvc4cc">
										<Link to="/ListHome">
											<button
												type="button"
												className="c-btn c-btn--theme-tera c-btn--variant-default c-btn--size-sm c-btn--has-icon css-7mp1uz btn btn--primary btn--small "
											>
												<g id="add">
													<polygon points="12.997 4 12.997 11.003 20 11.003 20 12.997 12.997 12.997 12.997 20 11.003 20 11.003 12.997 4 12.997 4 11.003 11.003 11.003 11.003 4"></polygon>
													<path d="M0 0h24v24H0z" fill="none"></path>
												</g>
												<span>
													<span>Your Apartments</span>
												</span>
											</button>
										</Link>
									</div>
								</div>
							</div>
							<div className="c-block card">
								<div className="c-block">
									<p className="c-text css-n0mx2z">
										<span>I want to list a new accommodation</span>
									</p>
								</div>
								<div className="c-block">
									<span className="c-text css-1d279ga">
										<span>
											We're happy to hear that! Click the button below to begin
											listing your new accommodation. The registration process may
											take up to 15 minutes.
										</span>
									</span>
								</div>
								<div className="c-block">
									<div className="c-flexbox css-1bvc4cc">
											<button
											onClick={() => this.handleSubmit()}
												type="button"
												className="c-btn c-btn--theme-tera c-btn--variant-default c-btn--size-sm c-btn--has-icon css-7mp1uz btn btn--primary btn--small"
											>
												<svg
													className="c-icon css-36kz25"
													viewBox="0 0 24 24"
													preserveAspectRatio="xMidYMid meet"
												>
													<g id="add">
														<polygon points="12.997 4 12.997 11.003 20 11.003 20 12.997 12.997 12.997 12.997 20 11.003 20 11.003 12.997 4 12.997 4 11.003 11.003 11.003 11.003 4"></polygon>
														<path d="M0 0h24v24H0z" fill="none"></path>
													</g>
												</svg>
												<span>
													<span>List New Accommodation</span>
												</span>
											</button>
										
									</div>
								</div>
							</div>
							<div className="c-block css-end"></div>
						</div>
					</div>
				</div>
			</div>
		);

	}
  
}

export default AddHomeBlock;

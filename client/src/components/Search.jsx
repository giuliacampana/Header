import React from "react";
import ReactDOM from "react-dom";


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div id="search">
				<div id="searchDiv"> LOCATION </div>
					<div className="input-group add-on col-md-2 date datepicker" data-date-format="yyyy-mm-dd">
					    <input name="name" value="" type="text" className="form-control date-picker" data-date-format="yyyy-mm-dd"/>
					    	<div className="input-group-btn">
					   			<button className="btn btn-default"><i className="fa fa-compass"></i></button>
					   		</div>
					</div>
				<div id="searchDiv"> CHECK IN </div>
					<div className="input-group add-on col-md-2 date datepicker" data-date-format="yyyy-mm-dd">
					    <input name="name" value="" type="text" className="form-control date-picker" data-date-format="yyyy-mm-dd"/>
					    	<div className="input-group-btn">
					   			<button className="btn btn-default"><i className="fa fa-calendar"></i></button>
					   		</div>
					</div>
				<div id="searchDiv"> CHECK OUT </div>
					<div className="input-group add-on col-md-2 date datepicker" data-date-format="yyyy-mm-dd">
					    <input name="name" value="" type="text" className="form-control date-picker" data-date-format="yyyy-mm-dd"/>
					    	<div className="input-group-btn">
					   			<button className="btn btn-default"><i className="fa fa-calendar"></i></button>
					   		</div>
					</div>
				<div id="searchDiv"> GUESTS 
						<select  type="text">
						             <option
						                value="1"
						                                >1 Guest</option>
						            <option
						                value="2"
						                selected="selected"                >2 Guests</option>
						            <option
						                value="3"
						                                >3 Guests</option>
						            <option
						                value="4"
						                                >4 Guests</option>
						            <option
						                value="5"
						                                >5 Guests</option>
						            <option
						                value="6"
						                                >6 Guests</option>
						            <option
						                value="7"
						                                >7 Guests</option>
						            <option
						                value="8"
						                                >8 Guests</option>
						            <option
						                value="9"
						                                >9 Guests</option>
						            <option
						                value="10"
						                                >10 Guests</option>
						            <option
						                value="11"
						                                >11 Guests</option>
						            <option
						                value="12"
						                                >12 Guests</option>
						            <option
						                value="13"
						                                >13 Guests</option>
						            <option
						                value="14"
						                                >14 Guests</option>
						            <option
						                value="15"
						                                >15 Guests</option>
						            <option
						                value="16"
						                                >16 Guests</option>
						            <option
						                value="17"
						                                >17 Guests</option>
						            <option
						                value="18"
						                                >18 Guests</option>
						            <option
						                value="19"
						                                >19 Guests</option>
						            <option
						                value="20"
						                                >20 Guests</option>
						            <option
						                value="21"
						                                >21 Guests</option>
						            <option
						                value="22"
						                                >22 Guests</option>
						            <option
						                value="23"
						                                >23 Guests</option>
						            <option
						                value="24"
						                                >24 Guests</option>
						            <option
						                value="25"
						                                >25 Guests</option>
						            <option
						                value="26"
						                                >26 Guests</option>
						            <option
						                value="27"
						                                >27 Guests</option>
						            <option
						                value="28"
						                                >28 Guests</option>
						            <option
						                value="29"
						                                >29 Guests</option>
						            <option
						                value="30"
						                                >30 Guests</option>
						            <option
						                value="31"
						                                >31 Guests</option>
						            <option
						                value="32"
						                                >32 Guests</option>
						            <option
						                value="33"
						                                >33 Guests</option>
						            <option
						                value="34"
						                                >34 Guests</option>
						            <option
						                value="35"
						                                >35 Guests</option>
						            <option
						                value="36"
						                                >36 Guests</option>
						            <option
						                value="37"
						                                >37 Guests</option>
						            <option
						                value="38"
						                                >38 Guests</option>
						            <option
						                value="39"
						                                >39 Guests</option>
						            <option
						                value="40"
						                                >40 Guests</option>
						            <option
						                value="41"
						                                >41 Guests</option>
						            <option
						                value="42"
						                                >42 Guests</option>
						            <option
						                value="43"
						                                >43 Guests</option>
						            <option
						                value="44"
						                                >44 Guests</option>
						            <option
						                value="45"
						                                >45 Guests</option>
						            <option
						                value="46"
						                                >46 Guests</option>
						            <option
						                value="47"
						                                >47 Guests</option>
						            <option
						                value="48"
						                                >48 Guests</option>
						            <option
						                value="49"
						                                >49 Guests</option>
						            <option
						                value="50"
						                                >50 Guests</option>
						            <option
						                value="51"
						                                >51 Guests</option>
						            <option
						                value="52"
						                                >52 Guests</option>
						            <option
						                value="53"
						                                >53 Guests</option>
						            <option
						                value="54"
						                                >54 Guests</option>
						            <option
						                value="55"
						                                >55 Guests</option>
						            <option
						                value="56"
						                                >56 Guests</option>
						            <option
						                value="57"
						                                >57 Guests</option>
						            <option
						                value="58"
						                                >58 Guests</option>
						            <option
						                value="59"
						                                >59 Guests</option>
						            <option
						                value="60"
						                                >60 Guests</option>
						            <option
						                value="61"
						                                >61 Guests</option>
						            <option
						                value="62"
						                                >62 Guests</option>
						            <option
						                value="63"
						                                >63 Guests</option>
						            <option
						                value="64"
						                                >64 Guests</option>
						            <option
						                value="65"
						                                >65 Guests</option>
						            <option
						                value="66"
						                                >66 Guests</option>
						            <option
						                value="67"
						                                >67 Guests</option>
						            <option
						                value="68"
						                                >68 Guests</option>
						            <option
						                value="69"
						                                >69 Guests</option>
						            <option
						                value="70"
						                                >70 Guests</option>
						            <option
						                value="71"
						                                >71 Guests</option>
						            <option
						                value="72"
						                                >72 Guests</option>
						            <option
						                value="73"
						                                >73 Guests</option>
						            <option
						                value="74"
						                                >74 Guests</option>
						            <option
						                value="75"
						                                >75 Guests</option>
						            <option
						                value="76"
						                                >76 Guests</option>
						            <option
						                value="77"
						                                >77 Guests</option>
						            <option
						                value="78"
						                                >78 Guests</option>
						            <option
						                value="79"
						                                >79 Guests</option>
						            <option
						                value="80"
						                                >80 Guests</option>
						    
					</select>
				</div>
			</div>
		);
	}
}

export default Search;

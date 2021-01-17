import React from 'react';

class Chart extends React.Component {
	render() {
		return(
			<div>
				<div className="charts">
					<span>Javascript</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="70%" style={{width: "70%"}}></div>
					<span>ReactJS</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="60%" style={{width: "60%"}}></div>
					<span>Redux</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="50%"style={{width: "50%"}}></div>
					<span>React Native</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="40%"style={{width: "40%"}}></div>
                    <span>Firebase</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="20%"style={{width: "20%"}}></div>
                    <span>HTML</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="90%"style={{width: "90%"}}></div>
                    <span>CSS</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="80%"style={{width: "80%"}}></div>
					<span>NodeJS</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="40%"style={{width: "40%"}}></div>
                    <span>Git</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="30%"style={{width: "30%"}}></div>
				</div>
			</div>
		)
	}
}

export default Chart;


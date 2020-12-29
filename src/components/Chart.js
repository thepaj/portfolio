import React from 'react';

class Chart extends React.Component {
	render() {
		return(
			<div>
				<div className="charts">
					<span>HTML</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="80%" style={{width: "80%"}}></div>
					<span>CSS</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="40%" style={{width: "40%"}}></div>
					<span>Javascript</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="45%"style={{width: "45%"}}></div>
					<span>ReactJS</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="30%"style={{width: "30%"}}></div>
                    <span>Redux</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="30%"style={{width: "30%"}}></div>
                    <span>React Native</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="30%"style={{width: "30%"}}></div>
                    <span>NodeJS</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="30%"style={{width: "30%"}}></div>
                    <span>SQL</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="30%"style={{width: "30%"}}></div>
                    <span>Firebase</span>
					<div className="charts__chart chart--lg chart--hover" data-percent="10%"style={{width: "10%"}}></div>
				</div>
			</div>
		)
	}
}

export default Chart;


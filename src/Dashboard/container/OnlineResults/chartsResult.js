import React, { Component } from 'react';
import CanvasJSReact from './ChartsRequires/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartResult = ({options}) =>{
   

    return(
		<div>
			<h1>React Spline Chart</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
    )
}

export default ChartResult;
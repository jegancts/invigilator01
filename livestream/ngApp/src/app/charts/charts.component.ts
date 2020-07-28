import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as CanvasJS from 'D:/angularpoc/examchart-final/livestream/ngApp/src/assets/canvasjs.min';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  loginUser () { this._router.navigate(['/events']);  } 

  constructor(private _router: Router) { }

  ngOnInit() {

    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      culture: "es",
      backgroundColor: "#fff",
      animationEnabled: true,

      title: {
        text: "Current Weekly Attendance"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: " English Exam " },
          { y: 90, label: "Maths Exam" },
          { y: 100, label: "Chemistry Exam" },
          { y: 89, label: "Physics Exam" },
          { y: 95, label: "Advanced  English Exam " }

        ]
      }]
    });

    chart.render();

/* next char start here */

    let chart1 = new CanvasJS.Chart("chartContainer1", {
      theme: "light2",
      animationEnabled: true,
      backgroundColor: "#fff",
      
      title:{
        text: "Pass Fail Rate"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
      
        dataPoints: [
          { y: 90, name: "Pass Rate",color: "mediumaquamarine" },
          { y: 10, name: "Fail Rate", color: "lightcoral" }
    
        ]
      }]
    });
      
    chart1.render();

/* next char start here */

    var chart2 = new CanvasJS.Chart("chartContainer2", {
    theme: "light2",
          animationEnabled: true,
          backgroundColor: "#fff",
        title:{
         text: "Total Anomalies"
       },

       data: [
       {
        type: "bubble",
         dataPoints: [
                  { x: new Date(2020, 0, 3), y: 42, z:10 },
                  { x: new Date(2020, 0, 4), y: 55, z:20},
                  { x: new Date(2020, 0, 5), y: 16, z:5 },
                  { x: new Date(2020, 0, 6), y: 10, z:2 },
                  { x: new Date(2020, 0, 7), y: 35, z:15 },
                  { x: new Date(2020, 0, 8), y: 29, z:13 },
                  { x: new Date(2020, 0, 9), y: 67, z:21 }]
    }]
    });
    chart2.render();

/* next char start here */
var chart3 = new CanvasJS.Chart("chartContainer3", {
	animationEnabled: true,
  theme: "light2",
  backgroundColor: "#fff",
	title:{
		text: "Current Examination"
	},
	axisX:{
		valueFormatString: "DD MMM",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "Number of Test Takers (in hundreds)",
		crosshair: {
			enabled: true
		}
	},
	toolTip:{
		shared:true
	},  
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "Total Test Takers",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "mediumaquamarine",
		dataPoints: [
			{ x: new Date(2020, 0, 3), y: 650 },
			{ x: new Date(2020, 0, 4), y: 702 },
			{ x: new Date(2020, 0, 5), y: 710 },
			{ x: new Date(2020, 0, 6), y: 658 },
			{ x: new Date(2020, 0, 7), y: 734 },
			{ x: new Date(2020, 0, 8), y: 663 },
			{ x: new Date(2020, 0, 9), y: 847 },
			{ x: new Date(2020, 0, 10), y: 853 },
			{ x: new Date(2020, 0, 11), y: 869 },
			{ x: new Date(2020, 0, 12), y: 700 },
			{ x: new Date(2020, 0, 13), y: 650 },
			{ x: new Date(2020, 0, 14), y: 869 },
			{ x: new Date(2020, 0, 15), y: 890 },
			{ x: new Date(2020, 0, 16), y: 700 }
		]
	}
]
});
chart3.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart3.render();
}

}
}

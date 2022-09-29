console.log('h');


//Start JQ Area
$(document).ready(function(){
	console.log("h");


	//Start header
		//start navbar

		$(".navbuttons").click(function(){
			$(this).toggleClass("crossxs");
		});


		//end navbar
	//End header


	//Start LoginBox

	$(".open-btn").click(function(){

		document.getElementById("form-popup").style.display ="block";

	});

	$("#formclose-btn").click(function(){

		document.getElementById("form-popup").style.display = "none";

	});

	// End LoginBox





});

//End JQ Area


//Start JS Area

//Start Student Couner


var getcountervalues = document.querySelectorAll('.countervalues');
console.log(getcountervalues); //node list

getcountervalues.forEach(function(getcountervalue){

	getcountervalue.textContent = 0;

	//anonymous fun
	const updatecounter = function(){
		const getcttarget = +getcountervalue.getAttribute('data-target'); //insert + to change from string to number
		//console.log(getcttarget); //String
		//console.log(typeof getcttarget,getcttarget); //string

		const getctcontent = +getcountervalue.innerText;
		console.log(getctcontent); //0 
		console.log(typeof getctcontent); //string

		const incnumber = getcttarget / 100;
		console.log(incnumber);

		if(getctcontent < getcttarget){

			getcountervalue.textContent = getctcontent + incnumber;

			setTimeout(updatecounter,50);

		}

	}

	updatecounter();

});

//End Student Couner


//Start Ratings

	//start google chart api

	 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     8],
          ['Thailand',      2],
          ['Singpore',  4],
          ['Indonesia', 2],
          ['India',    8]
        ]);

        var options = {
          title: 'International Student',
          // is3D: true
          width: 500,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

	//End google chart api



//End Ratings


const getyear = document.getElementById("getyear");
const getfullyear = new Date().getUTCFullYear();
getyear.textContent = getfullyear;

//End JS Area

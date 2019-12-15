function checkMetricInfo() {
//Js is Working
	
//Validating Gender(Metric) 
	if (document.forms["metricForm"]["gender1"].checked==false && 
		document.forms["metricForm"]["gender2"].checked==false ){
		alert("Please select a gender");
		return;
	}
	
	if (document.forms["metricForm"]["gender1"].checked==true && 
		document.forms["metricForm"]["gender2"].checked==true ){
		alert("Please only select one gender");
		return;
	}
	
	
//Validating Age (Metric)
	var age=document.forms["metricForm"]["age"].value;
		  
		  if (age <18 || age > 110){
			alert("Please enter a valid age that is 18 and over");
			return;
		}
		  else if (isNaN(age)) {
			alert("Please enter a numeric value for your age");
			return;
		}		

		
		
		
//Validating Weight (Metric)
	var weight=document.forms["metricForm"]["weight"].value;
		if (weight <25 || weight >635){
			alert("Please enter a valid weight");
			return;
		}
		else if (isNaN(weight)) {
			alert("Please enter a numeric value for your weight");
			return;
		}
	
//Validating Height(Metric)
	var height=document.forms["metricForm"]["height"].value;
		if (height <70 || height>240 || height == ""){
			alert("Please enter a valid height");
			return;
		}
		
		else if (isNaN(height)) {
			alert("Please enter a numeric value for your height");
			return;
		}

				
//Validating Goal Weight(Metric)
var goal=document.forms["metricForm"]["goal"].value;
		
		if(goal<25 || goal>635){
			alert ("Please enter a valid goal weight");
			return;
		}
		
			else if (isNaN(goal)) {
				alert("Please enter a numeric value for your goal weight");
				return;
			}


				window.location.href = "output.html";
		


	
}// End of checkMetricInfo() Function 


 

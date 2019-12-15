function checkImperialInfo(){ 

//Validating Gender(Imperial)
	if (document.forms["imperialForm"]["gender1"].checked==false && 
		document.forms["imperialForm"]["gender2"].checked==false ){
		alert("Please select a gender");
		return;
	}
	
	if (document.forms["imperialForm"]["gender1"].checked==true && 
		document.forms["imperialForm"]["gender2"].checked==true ){
		alert("Please only select one gender");
		return;
	}
	
	
//Validating Age(Imperial)			
	var age=document.forms["imperialForm"]["age"].value;
		  
		  if (age <18 || age > 110){
			alert("Please enter a valid age that is 18 and over");
			return;
		}
		  else if (isNaN(age)) {
			alert("Please enter a numeric value for your age");
			return;
		}
		
		
//Validating Weight (Imperial)
	var weight=document.forms["imperialForm"]["weight"].value;
		if (weight <25 || weight >1400){
			alert("Please enter a valid weight");
			return;
		}
		else if (isNaN(weight)) {
			alert("Please enter a numeric value for your weight");
			return;
		}	
		
//Validating Height(Imperial)
	var height=document.forms["imperialForm"]["height"].value;
		if (height <30 || height>240 || height == ""){
			alert("Please enter a valid height");
			return;
		}
		
		else if (isNaN(height)) {
			alert("Please enter a numeric value for your height");
			return;
		}	

//Validating Goal Weight(Imperial)
	var goal=document.forms["imperialForm"]["goal"].value;
		if(goal == "" || goal == null){
			alert("Please enter a valid goal weight");
			return;
		}
		
		if(goal<25 || goal>1400){
			
			alert ("Please enter a valid goal weight");
			return;
		}
			
			window.location.href = "output.html";
			
	

}// End of imperialInfo()function

				
		

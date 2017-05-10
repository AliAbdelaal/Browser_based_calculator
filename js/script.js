function test(){
	alert("it worked !")
}

calculated = true 
firstOperand = "0.00"
secondOperand = "0.00"
operation = null 

function clr(){
	//the C button
	answer = document.getElementById("answer")
	answer.innerHTML = "0.00"
	firstOperand = ""
	calculated = true
	operation = null 
}
function conc(arg){
	//when any button is pressed
	toPrint = "0.00"
	if (!calculated){
		if(isFinite(arg) || !arg.localeCompare(".")){
			if(operation)
			{
				if(!secondOperand.localeCompare("0.00"))
					secondOperand = arg 
				else
					secondOperand += arg 
				toPrint = secondOperand
			}	
			else{
				firstOperand += arg 
				toPrint = firstOperand  
			}
		} 
		else{
			if(operation){
				process()
				operation = arg
				calculated = false 
				toPrint = firstOperand  
			}
			else{ 
				operation = arg 
				toPrint = document.getElementById("answer").innerHTML
			}
		}
	}
	else{
		if(isFinite(arg) || !arg.localeCompare(".")){
			//if a number 
			firstOperand = arg
			calculated = false 
			toPrint = firstOperand
		}
		else{
			operation = arg 
			calculated = false 
			toPrint = firstOperand 
		}
	}
	document.getElementById("answer").innerHTML = toPrint 
	//alert("firstOperand : "+firstOperand+" ,secondOperand : "+secondOperand+" ,operation : "+operation)

}
function process(){
	//when = pressed 
	firstOperand = eval(firstOperand+operation+secondOperand)
	calculated = true 
	secondOperand = "0.00"
	operation = null 
	document.getElementById("answer").innerHTML = firstOperand
	//alert("result is "+firstOperand)

}

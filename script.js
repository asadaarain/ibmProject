function validate() {
	var principal = document.getElementById("principal");

	if (principal.value > 0) {
		compute();
	}
	else {
		alert("Enter a positive number");
		principal.focus();
    }
}


function compute()
{

	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;

	var interest = principal * years * rate / 100;

	var year = new Date().getFullYear() + parseInt(years);

	document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>"
}

function updateRate()
{
	rateRange = document.getElementById("rate").value;
	rateLabel = document.getElementById("rate_value");
	rateLabel.innerHTML = rateRange + " %";
}
        
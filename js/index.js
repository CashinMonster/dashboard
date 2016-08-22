var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var ch1 = document.getElementById("ch1");
var ul1 = document.getElementById("ul1");
var inputs = ul1.getElementsByTagName("input");
//		alert(inputs.length);

btn1.onclick = function (){
	
	for (var i=0; i<inputs.length; i++){
		
		inputs[i].checked = true;
	}
	ch1.checked = true;
}
btn2.onclick = function (){
	var bol = true;//假设所有的input都是为false
	for (var i=0; i<inputs.length; i++){
		//验证我的假设
		if (inputs[i].checked == true){
			bol = false;
		}
		inputs[i].checked = !inputs[i].checked;
	}
	if (bol){
		ch1.checked = true;
	}	
}
for (var i=0; i<inputs.length; i++){
	inputs[i].onclick = function (){
		
		for (var i=0; i<inputs.length; i++){
			if (inputs[i].checked == false){
				break;
			}
		}
		if (i == inputs.length){
			ch1.checked = true;
		}else{
			ch1.checked = false;
		}
	}
}
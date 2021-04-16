function submitHandler(e) {
  // TODO: implement this function
  e.preventDefault();
  var input = document.getElementById("type-input");
  var str =  input.value;
  str = str.replace(/ +(?= )/g,'');
  console.log(str);
  if(str !== "" && str !== " "){
	document.getElementById("receive-input").innerHTML = str;
  }else{
	  return
  }
  input.value="";
};

document.getElementById("form").addEventListener("submit", submitHandler);


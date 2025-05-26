function myFunction(input_id, output_id) {
  const message = document.getElementById(output_id);
  message.innerHTML = "";
  let x = document.getElementById(input_id).value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
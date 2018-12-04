
function contactUs() {
  document.getElementById("contactinfo").innerHTML = "Email: safterbeauty@gmail.com";
}

//function addWords(){
//    var words = document.getElementById("stuff").value;
//}

function subscribeForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Enter a valid name");
        return false;
    }
}

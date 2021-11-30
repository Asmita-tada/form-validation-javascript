
var myInput = document.getElementById("psw");

myInput.onfocus = function()
{
    document.getElementById("message").style.display = "block";
}

myInput.onblur = function()
{
    document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function()
{
    var lowercase = /[a-z]/g;
    if(myInput.value.match(lowercase))
    {
        document.getElementById("letter").style.color="green";

    }
    var uppercase = /[A-Z]/g;
    if(myInput.value.match(uppercase))
    {
        document.getElementById("capital").style.color="green";

    }
    var number = /[0-9]/g;
    if(myInput.value.match(number))
    {
        document.getElementById("number").style.color="green";

    }

    if(myInput.value.length >= 8)
    {
        document.getElementById("length").style.color="green";

    }
    
}

function validate()
{
    var name= document.getElementById("uname").value;
    console.log(name);


    if(name== "" || name==null)
    {
        alert("Please enter Username");
        return false;
    }
    if(myInput.value.length<6)
    {
        alert("password must be 8 char long");
        return false;
    }
}
// set the correct username and password combination below
var correctUsername = "Angelo Bolos";
var correctPassword = "angelobolos123";



$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    if (username === correctUsername && password === correctPassword){
    $("p").text(" u smart smart lol");
    } else if (username !== correctUsername && password === correctPassword){
        $("p").text(" u dumb smart lol");
    // WRITE YOUR COMPOUND CONDITIONAL BELOW
    } else if (username === correctUsername && password !== correctPassword){
        $("p").text(" u smart dumb lol");
    } else {
    $("p").text(" u dum dum lol");}
});
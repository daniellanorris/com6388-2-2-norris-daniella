function greet() {
    var username = prompt("What is your name?");
    var greeting = alert("Hello,  " + username); 

    var age = prompt("How old are you?");
    var numberAge = parseInt(age);

    var question;
    if (confirm("Have you already had a birthday this year?") == true) {
        question = "Cool!";
    } else {
        question = "Soon enough!";
    }

    var yearMsg = alert("You were born in  " + calcYear) 
    if(question === true) {
        calcYear = new Date().getFullYear() - numberAge;
    } else {
        calcYear = (new Date().getFullYear() + 1) - numberAge;
    }

}
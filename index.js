function greet() {
    var username = prompt("What is your name?", '');
    alert(`Hello, ${username}`); 


    var age = prompt("How old are you?", '');
    var numberAge = parseInt(age);

    var question  = confirm("Have you already had a birthday this year?");
    if(question === true) {
        calcYear = new Date().getFullYear() - numberAge;
    } else {
        calcYear = new Date().getFullYear()  - (numberAge + 1);
    }
    alert("Your birthyear is  " + calcYear);
    
}
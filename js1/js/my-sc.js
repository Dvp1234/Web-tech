function do_it(){
    let x,y,operator;
x=parseInt(prompt("Enter number "));
y=parseInt(prompt("Enter number "));
operator=prompt("Enter operator " );

switch (operator) {
    case '+': result = x + y; break;
    case '-': result = x - y; break;
    case '*': result = x * y; break;
    case '/': result = x/y; break;

}
document.getElementById('divy').innerHTML='Your answer is ' + result
}


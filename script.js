function calc(op) {
    var num1 = parseFloat( document.getElementById("num1").value);
    var num2 = parseFloat( document.getElementById("num2").value);
    var result = 0;

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        }

        document.getElementById('history').innerHTML += `<h3> ${num1} ${op} ${num2} = ${result}</h3>`;
}
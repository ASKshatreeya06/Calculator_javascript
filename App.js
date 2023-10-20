


// clear function
const clr = () => {
    document.getElementById("result").value = ""

}
//result funciton
const result = (ans) => {
    document.getElementById("result").value = ans;
}
//   operator functions
function addition(a, b) {
    let ans = a + b;
    result(ans);
}
function substraction(a, b) {
    let ans = a - b;
    result(ans);
}
function multiplication(a, b) {
    let ans = a * b;
    result(ans);
}
function division(a, b) {
    let ans = a / b;
    result(ans);
}
function modular(a, b) {
    let ans = a % b;
    result(ans);
}

// Equal function
function Equal() {
    let a1 = document.getElementById('num1').value;
    let b1 = document.getElementById('num2').value;
    let a = parseInt(a1);
    let b = parseInt(b1);
    let x = document.getElementById('Operator');

    console.log(x.value)



    switch (parseInt(x.value)) {
        case 1:
            addition(a, b);
            console.log(x.value)
            // console.log(ans)
            // result(addition(a, b));
            break;
        case 2:
            substraction(a, b);

            break;
        case 4:
            multiplication(a, b);

            break;
        case 3:
            division(a, b);

            break;
        case 5:
            modular(a, b);

            break;

        default:
            break;
    }
}

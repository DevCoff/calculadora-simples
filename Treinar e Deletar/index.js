function insert(num) {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result + num;
}
function clean() {
    document.getElementById('result').innerHTML = " "
}
function back() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1)
}

function calcular() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById("result").innerHTML = eval(result);
    } else {
        document.getElementById('result').innerHTML= "0"
    }
};
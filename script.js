function zero() {
    document.getElementById('result').value += "0"
}
function one() {
    document.getElementById('result').value += "1"
}
function two() {
    document.getElementById('result').value += "2"
}
function three() {
    document.getElementById('result').value += "3"
}
function four() {
    document.getElementById('result').value += "4"
}
function five() {
    document.getElementById('result').value += "5"
}
function six() {
    document.getElementById('result').value += "6"
}
function seven() {
    document.getElementById('result').value += "7"
}
function eight() {
    document.getElementById('result').value += "8"
}
function nine() {
    document.getElementById('result').value += "9"
}
function dot() {
    document.getElementById('result').value += "."
}
function plus() {
    document.getElementById('result').value += "+"
}
function minus() {
    document.getElementById('result').value += "-"
}
function multiply() {
    document.getElementById('result').value += "*"
}
function divide() {
    document.getElementById('result').value += "/"
}
function sqr() {
    document.getElementById('result').value *= result.value
}
function sqrt() {
    document.getElementById('result').value = Math.sqrt(result.value)
}
function del() {
    document.getElementById('result').value = result.value.slice(0, -1)
}
function clr(){
    document.getElementById('result').value = ""
}
function equal() {
   document.getElementById('result').value = eval(result.value)
  
}

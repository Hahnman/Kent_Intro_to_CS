function calculatePrice() {
if (ham.checked === true){
var type = 5.00;
}
else if (tur.checked === true){
var type = 6.00;
}
else if (sal.checked === true){
var type = 7.00;
}
else if (roa.checked === true){
var type = 8.00;
}
if (ame.checked === true){
var mur = 1.00;
}
else {
var mur = 0;
}
if (sws.checked === true){
var sww = 1.00;
}
else {
var sww = 0;
}
if (pro.checked === true){
var prv = 1.00;
}
else {
var prv = 0;
}
if (che.checked === true){
var chd = 1.00;
}
else {
var chd = 0;
}
if (mon.checked === true){
var moj = 1.00;
}
else {
var moj = 0;
}
if (lett.checked === true){
var ltt = 0.50;
}
else {
var ltt = 0;
}
if (tom.checked === true){
var toe = 0.50;
}
else {
var toe = 0;
}
if (mush.checked === true){
var mus = 0.50;
}
else {
var mus = 0;	
if (delivery.checked === true){
var del = 0.10;
}
else {
var del = 0;
}	
var total = type + mur + sww + prv + chd + moj + ltt + toe + mus;
var cost = total + (total * del);
document.getElementById("price").innerHTML = "$" + cost;
while (cost <= 1) {
	document.writeln("That Is Not An Option");
}
}
function enableBox(){
if (delivery.checked == true){
document.getElementById("address").attributes.disabled = false;
}
else{
document.getElementById("address").attributes.disabled = true
}

function resetPrice(){
document.getElementById("price").innerHTML = "__";
}
}

function confirm(){
window.alert("Due to a connection error, your order could not be placed at this time.");
}
}
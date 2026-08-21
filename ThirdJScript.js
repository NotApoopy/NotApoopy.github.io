let userage
document.createElement("H2")
document.getElementById("SubmitButton").onclick = function() {
    userage = document.getElementById("AgeEnter");
    console.log(`you are ${userage.value} years old`);
}

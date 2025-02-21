const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");

redButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

blueButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});

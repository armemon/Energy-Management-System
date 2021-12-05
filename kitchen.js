function myFunction() {
    fire = document.getElementById("fire");
    nofire = document.getElementById("nofire");
    firebutton = document.getElementById("firebutton");
    if (fire.style.display == "none") {
        document.body.style.backgroundImage = "url(fire.jpg)";
        nofire.style.display = "none";
        fire.style.display = "block";
        firebutton.innerText = "Aag bhuja do"
    } else {
        document.body.style.backgroundImage = "url(background1.jpg)";
        fire.style.display = "none";
        nofire.style.display = "block";
        firebutton.innerText = "Aag laga do"
    }
}
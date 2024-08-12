let divRef = document.querySelector("div");

let aquaButton = document.getElementById("aqua");
aquaButton.onclick = function() {
    divRef.style.backgroundColor = "aqua";
    divRef.innerHTML = "aqua";
    divRef.display = "flex"
    divRef.style.textAlign = "center"
    divRef.style.alignContent = "center"
    divRef.style.display = "block";
    divRef.style.opacity = "1";
}

let tealButton = document.getElementById("teal");
tealButton.onclick = function() {
    divRef.style.backgroundColor = "teal";
    divRef.innerHTML = "teal";
    divRef.display = "flex"
    divRef.style.textAlign = "center"
    divRef.style.alignContent = "center"
    divRef.style.display = "block";
    divRef.style.opacity = "1";
}

let pinkButton = document.getElementById("pink");
pinkButton.onclick = function() {
    divRef.style.backgroundColor = "pink";
    divRef.innerHTML = "pink";
    divRef.display = "flex"
    divRef.style.textAlign = "center"
    divRef.style.alignContent = "center"
    divRef.style.display = "block";
    divRef.style.opacity = "1";
}

let purpleButton = document.getElementById("purple");
purpleButton.onclick = function() {
    divRef.style.backgroundColor = "purple";
    divRef.innerHTML = "purple";
    divRef.display = "flex"
    divRef.style.textAlign = "center"
    divRef.style.alignContent = "center"
    divRef.style.display = "block";
    divRef.style.opacity = "1";
}

let colorlessButton = document.getElementById("colorless");
colorlessButton.onclick = function() {
    divRef.style.backgroundColor = "transparent";
    divRef.innerHTML = "colorless";
    divRef.display = "flex"
    divRef.style.textAlign = "center"
    divRef.style.alignContent = "center"
    divRef.style.display = "block";
    divRef.style.opacity = "1";
}

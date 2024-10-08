
let letterC = document.getElementById("cLetter");
let letterM = document.getElementById("mLetter");
let letterY = document.getElementById("yLetter");
let letterK = document.getElementById("kLetter");
let letters = document.querySelector(".letters");

function reset() {
    letterC.src = "c_color.png";
    letterM.src = "m_color.png";
    letterY.src = "y_color.png";
    letterK.src = "k_color.png";
    document.body.style.background = "black";
}

function cColor() {
    letterC.src = "c_black.png";
    letterM.src = "m_black.png";
    letterY.src = "y_black.png";
    letterK.src = "k_black.png";
    document.body.style.background = "#00AEEF";
}

function mColor() {
    letterC.src = "c_black.png";
    letterM.src = "m_black.png";
    letterY.src = "y_black.png";
    letterK.src = "k_black.png";
    document.body.style.background = "#EB008C";
}

function yColor() {
    letterC.src = "c_black.png";
    letterM.src = "m_black.png";
    letterY.src = "y_black.png";
    letterK.src = "k_black.png";
    document.body.style.background = "#FFF200";
}

function kColor() {
    letterC.src = "c_black.png";
    letterM.src = "m_black.png";
    letterY.src = "y_black.png";
    letterK.src = "k_black.png";
    document.body.style.background = "#231F20";
}



letterC.onmouseover = cColor;
letterM.onmouseover = mColor;
letterY.onmouseover = yColor;
letterK.onmouseover = kColor;
letters.onmouseleave = reset;
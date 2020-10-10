const bscbtn = document.getElementById("bsc_btn");
const ccnabtn = document.getElementById("ccna_btn");
const htmlbtn = document.getElementById("html_btn");

const bscContainer = document.getElementById("BscIT_image");
const ccnaContainer = document.getElementById("CCNA_image");
const htmlContainer = document.getElementById("HTML_image");

bscContainer.style.display = "none";
ccnaContainer.style.display = "none";
htmlContainer.style.display = "none";

function Show_all() {
    ccnaContainer.style.display = "inline";
    htmlContainer.style.display = "inline";
    bscContainer.style.display = "inline";
}

function Bsc_click() {
    bscContainer.style.display = "inline";
    ccnaContainer.style.display = "none";
    htmlContainer.style.display = "none";
}

function CCNA_click() {
    bscContainer.style.display = "none";
    ccnaContainer.style.display = "inline";
    htmlContainer.style.display = "none";
}

function HTML_click() {
    ccnaContainer.style.display = "none";
    bscContainer.style.display = "none";
    htmlContainer.style.display = "inline";
}



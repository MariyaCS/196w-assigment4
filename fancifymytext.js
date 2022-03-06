// function getAlert(){
//     alert("Hello, world!");
// }

function makeTextBigger(){
    let text = document.getElementById("input_text");
    text.style.fontSize = "24px";
}


function fancify(){
    let text = document.getElementById("input_text");

        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration ="underline";
}

function makeBoring(){
    let text = document.getElementById("input_text");

    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration ="none";
}

function addMoo(){
    document.getElementById("input_text").style.textTransform = "uppercase";

    let str = document.getElementById("input_text").value;
    let parts = str.split(".");  
    let str2 = parts.join("-Moo");
    document.getElementById("input_text").value = str2;

}
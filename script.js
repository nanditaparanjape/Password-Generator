const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
const rangeValue = document.getElementById("rangeValue");

function getRandNum(){
    return Math.floor(Math.random() * 92)
}
function generate(){
    const passwordLength  = rangeValue.innerText;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const element = string.charAt(getRandNum());
        password += element;
    }
    console.log(password);
    document.getElementById("output").innerHTML = password
    return(password);
}
function copy(){
    const clipBoard = navigator.clipboard;
    clipBoard.writeText(document.getElementById("output").innerHTML).then(() => {
    alert("Copied text to keyboard");
    });
}
document.addEventListener("DOMContentLoaded", function (event) {
    let origArray = [2,3,4];
    let textbox = "textbox";
    for (var i = 0; i < origArray.length; i++) {
        document.getElementById(textbox + (i + 1)).value = origArray[i];
    }
    document.getElementById("cube").addEventListener("click", function() {
        powOfThree();
    });

    document.getElementById("toTheFourth").addEventListener("click", powOfFourth);

});

function squareButton() {
    let orignalArray = [document.getElementById("textbox1").value, document.getElementById("textbox2").value,
                        document.getElementById("textbox3").value];
    let squareArray = orignalArray.map(square);

    document.getElementById("textbox1").value = squareArray[0];
    document.getElementById("textbox2").value = squareArray[1];
    document.getElementById("textbox3").value = squareArray[2];
}

function powOfThree() {
    let orignalArray = [document.getElementById("textbox1").value, document.getElementById("textbox2").value,
    document.getElementById("textbox3").value];
    let squareArray = orignalArray.map(cube);

    document.getElementById("textbox1").value = squareArray[0];
    document.getElementById("textbox2").value = squareArray[1];
    document.getElementById("textbox3").value = squareArray[2];
}

function powOfFourth() {
    let orignalArray = [document.getElementById("textbox1").value, document.getElementById("textbox2").value,
    document.getElementById("textbox3").value];
    let squareArray = orignalArray.map(fourth);

    document.getElementById("textbox1").value = squareArray[0];
    document.getElementById("textbox2").value = squareArray[1];
    document.getElementById("textbox3").value = squareArray[2];
}

function square(data) {
    return data * data;
} 

function cube(data) {
    return data * data * data;
}

function fourth(data) {
    return data * data * data * data;
}
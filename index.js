var load = document.getElementById("loading");

window.onload = lun;

function lun() {
    load.style.display = "none";
}

var dialog = document.getElementsByClassName("dialog")[0];
var variableBorder = 1;
var changeBorder = setInterval(change, 300);

function change() {
    if (variableBorder == 1) {
        dialog.style.border = "none";
        variableBorder = 2;
    } else if (variableBorder == 2) {
        dialog.style.borderRight = "20px solid white";
        variableBorder = 1;
    }
}

var dialogs = {
    value0: function() {
        texts = "Buenas Maria laura...  ";
        timer = 100;
    },
    value1: function() {
        texts = "Como andas querida?";
        timer = 100;
    },
    value2: function() {
        texts = "Me alegro mucho por tanta felicidad";
        timer = 150;
    },
    value3: function() {
        texts = "Вueno No te traje aca para Pedirte, un vacio y dos fernet.";
        timer = 150;
    },
    value4: function() {
        texts = " Espero tu Respuesta En mi Whatsapp.";
        timer = 100;
    },
    value5: function() {
        texts = " Que tengas un hermoso Dia.";
        timer = 100;
    },
    value6: function() {
        texts = "BENDICIONES";
        timer = 400;
    },
    value7: function() {
        texts = "Bay";
        timer = 600;
    }


};

var namber = 0;
var timer;
var texts;

type();

function type() {
    dialogs["value" + namber]();

    dialog.innerHTML = "";
    var Letters = [];

    for (var i = 0; i < texts.length; i++) {
        text = texts.charAt(i);
        Letters[i] = text;
    }

    writes = setInterval(write, timer);

    positionLetter = 0;

    function write() {
        if (positionLetter == Letters.length) {
            clearInterval(writes);
            namber++;
            if (namber == Object.keys(dialogs).length) {
                clearInterval(writes);
                return up();
            }
            setTimeout(type, 1000);
            return;
        }
        dialog.innerHTML += Letters[positionLetter];
        positionLetter++;
    }
}

var a = 1;
var b = 1;

function up() {
    sus = setInterval(startus, 10);

    function startus() {
        a += 0.00001;
        b += 0.00001;
        dialog.style.transform = "scale(" + a++ + "," + b++ + ")";
    }
}

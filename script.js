const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        let response = request.response;
        processResponse(response);
    }
}

function sendRequest() {
    requestJSON(requestUrl);
}

function processResponse(response) {

    var squadname = document.getElementById("squadName");
    squadname.innerHTML = response["squadName"];
    var hometown = document.getElementById("homeTown");
    hometown.innerHTML = response["homeTown"];
    var formed = document.getElementById("formed");
    formed.innerHTML = response["formed"];
    var secretbase = document.getElementById("secretBase");
    secretbase.innerHTML = response["secretBase"];
    var active = document.getElementById("active");
    active.innerHTML = response["active"];

    // Molecule man
    var molecule = document.querySelectorAll(".Molecule");
    var molecule1 = document.querySelectorAll(".Molecule1");
    var molecule2 = document.querySelectorAll(".Molecule2");
    var molecule3 = document.querySelectorAll(".Molecule3");
    molecule[0].innerHTML = response["members"][0].name;
    molecule1[0].innerHTML = response["members"][0].age;
    molecule2[0].innerHTML = response["members"][0].secretIdentity;
    molecule3[0].innerHTML = response["members"][0].powers;

    // Madame Uppercut
    var uppercut = document.querySelectorAll(".Upper");
    var uppercut1 = document.querySelectorAll(".Upper1");
    var uppercut2 = document.querySelectorAll(".Upper2");
    var uppercut3 = document.querySelectorAll(".Upper3");
    uppercut[0].innerHTML = response["members"][1].name;
    uppercut1[0].innerHTML = response["members"][1].age;
    uppercut2[0].innerHTML = response["members"][1].secretIdentity;
    uppercut3[0].innerHTML = response["members"][1].powers;

    // Eternal Flame
    var flame = document.querySelectorAll(".Flame");
    var flame1 = document.querySelectorAll(".Flame1");
    var flame2 = document.querySelectorAll(".Flame2");
    var flame3 = document.querySelectorAll(".Flame3");
    flame[0].innerHTML = response["members"][2].name;
    flame1[0].innerHTML = response["members"][2].age;
    flame2[0].innerHTML = response["members"][2].secretIdentity;
    flame3[0].innerHTML = response["members"][2].powers;



    console.log(response["members"][0].name);



    // console.log(response["squadName"]);
}



sendRequest();
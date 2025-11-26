//         window.onload = function () {
//     welkom();
// }
//         function welkom() {
//             let naam = prompt("Wat is uw naam?")
//                 document.getElementById("welkom").innerHTML = "Welkom " + naam;
//             }


function geboortejaar() {

    let geboortejaar = prompt("wat is je geboortejaar")
    let vandaag = 2025

    let sum = Number(vandaag) - Number(geboortejaar)
    // onder 120 jaar oud
    if (sum < 120) {


        alert("je bent " + sum + " jaar oud!")
        alert("Je bent geboren in " + geboortejaar)

        if (geboortejaar >= 2000 && geboortejaar <= 2010) {
            alert("De Sony PlayStation 2 werd gelanceerd");
        } else if (geboortejaar >= 1990 && geboortejaar < 2000) {
            alert("De Hubble-ruimtetelescoop werd gelanceerd");
        } else {
            alert("Geen belangrijke gebeurtenis voor dit jaar toegevoegd");
        }
    }
    // als je over 120 jaar oud bent
    else {
        alert("voor wie zit je te liegen opgedonderd")
        return;
    }
}

function favo() {
    let quote = prompt("Wat is je favoriete quote")
    document.getElementById("quote").innerHTML = quote;
}

function contact() {
    let email = prompt("wat is je email?")
    let nummer = prompt("wat is je nummer?")
    let confirm = confirm("Weet je zeker dat je deze info door gaat geven?")
    if (confirm = true) {
        document.getElementById("informatie").innerHTML = nummer + "" + email;
    }
}

function quiz() {
    let weet = confirm("dit is een quiz over bertug? denk je dat je genoeg weet")
    if (weet = true) {
        kleurvraag()
    }
    else {
        return;
    }

}

function kleurvraag() {
    let kleur = prompt("Wat is mijn favoriete kleur? (lowercase)")
    if (kleur = "rood") {
        hobbyvraag()
    }

    else {
        alert("fakie")
        return;
    }
}

function hobbyvraag() {
    let hobby = prompt("Wat do ik als hobby?(lowercase)")
    if (hobby = "judo") {
        verjaardagvraag()
    }
    else {
        alert("fakie")
        return;
    }

}

function verjaardagvraag() {
        let oud = prompt("Hoe oud ben ik")
    if (oud = "17") {
alert("lekker bezig je hebt de quiz gehaald!")
    }
    else {
        alert("fakie")
        return;
    }

}
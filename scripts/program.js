// JavaScript source code

//Lent kezdődik a kód, ideiglenesen betettem ide a GoT tömböt h tudjak dolgozni vmivel.


//a div aminek az innerHTML-ében megjelenítem az adatokat
var allData = document.getElementById("allData");

//eventlistenert ad a gombokhoz
document.getElementById("dataList").addEventListener("click", showAllHouse);
document.getElementById("fromAtoZ").addEventListener("click", sortAz);
document.getElementById("fromZtoA").addEventListener("click", sortZa);
document.getElementById("searchAll").addEventListener("click", searchAll);
//text input box :
var searchText = document.getElementById("searchText");

// Elkészít egy "House"-t a GoT tömb alapján, ilyen csúnya innerHTML formában, van egy mindenek egy class-ja és egy gombja
function createHouse(GoT, i) {
    var houseBox = document.createElement('div');
    houseBox.classList.add("divHouse");
    houseBox.innerHTML += "<b>" + GoT.name + "</b>" + "<br>"+ " <i>" + GoT.region + "</i>" + "<br>" + GoT.coatOfArms + "<br>" 
  + GoT.words + "<br>" +
        "<input type='button' onclick='teszt()' value='tesztgomb' /> "+ "<br>" ;
    allData.appendChild(houseBox);
};

//Kiírja az összes elkészült "house"-t
function showAllHouse() {
    allData.innerHTML = "";
    for (var i = 0; i < GoT.length; i++) {
        createHouse(GoT[i], i);
    }
};
//abc szerint növekvő sorrend
function sortAz() {
    allData.innerHTML = "";
    GoT.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    for (var i = 0; i < GoT.length; i++) {
        createHouse(GoT[i], i);
    }
};
//abc szerint csökkenő sorrend
function sortZa() {
    allData.innerHTML = "";
    GoT.sort(function (b, a) {
        return a.name.localeCompare(b.name);
    });
    for (var i = 0; i < GoT.length; i++) {
        createHouse(GoT[i], i);
    }
};

//keresgél minden szerint (name, region, coatofarms)
function searchAll() {
    var searching = searchText.value.toLowerCase();
    allData.innerHTML = "";
    if (searching == "") {
        alert("Írj be legalább egy betűt!");
    } else {
        for (var i = 0; i < GoT.length; i++) {
            if ((GoT[i].name.toLowerCase().indexOf(searching) > -1) || (GoT[i].region.toLowerCase().indexOf(searching) > -1) ||
                (GoT[i].coatOfArms.toLowerCase().indexOf(searching) > -1)) {
                createHouse(GoT[i], i);
            }
        }
    }
}





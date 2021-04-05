let datadiv = document.getElementById('datadiv')

activateGeburt = document.getElementById('activateGeburt')
activatePerson = document.getElementById('activatePerson')
activateOrt = document.getElementById('activateOrt')
activateGemeinde = document.getElementById('activateGemeinde')
activateSitz = document.getElementById('activateSitz')
activateSitzPerson = document.getElementById('activateSitzPerson')
activateArbeitsplatz = document.getElementById('activateArbeitsplatz')
activatePersonArbeitsplatz = document.getElementById('activatePersonArbeitsplatz')
activateBankkonto = document.getElementById('activateBankkonto')
activatePersonBankkonto = document.getElementById('activatePersonBankkonto')
activateHobby = document.getElementById('activateHobby')
activatePersonHobby = document.getElementById('activatePersonHobby')
activateFreund = document.getElementById('activateFreund')

activatePersonArbeitsplatz.onclick = function () {
    createDataTable()
    getData('getTPersonArbeitsplatz.php')
}

activateFreund.onclick = function () {
    createDataTable()
    getData('getTFreund.php')
}

activatePersonHobby.onclick = function () {
    createDataTable()
    getData('getTPersonHobby.php')
}

activateHobby.onclick = function () {
    createDataTable()
    getData('getTHobby.php')
}

activatePersonBankkonto.onclick = function () {
    createDataTable()
    getData('getTPersonBankkonto.php')
}

activateBankkonto.onclick = function () {
    createDataTable()
    getData('getTBankkonto.php')
}

activateGeburt.onclick = function () {
    createDataTable()
    getData('getTGeburt.php')
}
activatePerson.onclick = function () {
    createDataTable()
    getData('getTPerson.php')
}

activateOrt.onclick = function () {
    createDataTable()
    getData('getTOrt.php')
}

activateGemeinde.onclick = function () {
    createDataTable()
    getData('getTGemeinde.php')
}

activateSitz.onclick = function () {
    createDataTable()
    getData('getTSitz.php')
}

activateSitzPerson.onclick = function () {
    createDataTable()
    getData('getTSitzPerson.php')
}

activateArbeitsplatz.onclick = function () {
    createDataTable()
    getData('getTArbeitsplatz.php')
}

function createDataTable() {
    datadiv.innerHTML = ''

    let datatable = document.createElement('table')
    datatable.id = 'datatable'
    datatable.className = 'cell-border'
    datatable.style.width = '100%'

    datadiv.appendChild(datatable)
}

function getData(path) {
    $.ajax({
        type: "POST",
        url: "../php/DBAccess/" + path,
        dataType: "html",
        success: function (data) {
            $("#datatable").html(data);
            $('#datatable').DataTable({});
        }
    });
}

let datadiv = document.getElementById('datadiv')

activateGeburt = activate = document.getElementById('activateGeburt')
activatePerson = activate = document.getElementById('activatePerson')
activateOrt = activate = document.getElementById('activateOrt')
activateGemeinde = activate = document.getElementById('activateGemeinde')
activateSitz = activate = document.getElementById('activateSitz')
activateSitzPerson = activate = document.getElementById('activateSitzPerson')

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

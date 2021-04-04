activateperson = document.getElementById('activatePerson')
activateperson.onclick = function () {
    datadiv = document.getElementById('datadiv')
    datadiv.innerHTML = ''

    datatable = document.createElement('table')
    datatable.id = 'person'
    datatable.className = 'cell-border'
    datatable.style.width='100%'

    datadiv.appendChild(datatable)

    $.ajax({
        type: "POST",
        url: "../php/DBAccess/getTPerson.php",
        dataType: "html",
        success: function (data) {
            $("#person").html(data);
            $('#person').DataTable({
                "autoWidth": true
            });
        }
    });
}

//                    <table id="person" class="cell-border" style="width: 100%">
//
//                     </table>





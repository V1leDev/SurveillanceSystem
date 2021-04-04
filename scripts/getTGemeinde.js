activate = document.getElementById('activateGemeinde')
activate.onclick = function () {
    let datadiv = document.getElementById('datadiv')
    datadiv.innerHTML = ''

    let datatable = document.createElement('table')
    datatable.id = 'gemeinde'
    datatable.className = 'cell-border'
    datatable.style.width='100%'

    datadiv.appendChild(datatable)

    $.ajax({
        type: "POST",
        url: "../php/DBAccess/getTGemeinde.php",
        dataType: "html",
        success: function (data) {
            $("#gemeinde").html(data);
            $('#gemeinde').DataTable({

            });
        }
    });
}

//                    <table id="person" class="cell-border" style="width: 100%">
//
//                     </table>





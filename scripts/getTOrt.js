activate = document.getElementById('activateOrt')
activate.onclick = function () {
    let datadiv = document.getElementById('datadiv')
    datadiv.innerHTML = ''

    let datatable = document.createElement('table')
    datatable.id = 'ort'
    datatable.className = 'cell-border'
    datatable.style.width='100%'

    datadiv.appendChild(datatable)

    $.ajax({
        type: "POST",
        url: "../php/DBAccess/getTOrt.php",
        dataType: "html",
        success: function (data) {
            $("#ort").html(data);
            $('#ort').DataTable({

            });
        }
    });
}

//                    <table id="person" class="cell-border" style="width: 100%">
//
//                     </table>





activate = document.getElementById('activateSitzPerson')
activate.onclick = function () {
    let datadiv = document.getElementById('datadiv')
    datadiv.innerHTML = ''

    let datatable = document.createElement('table')
    datatable.id = 'sitzperson'
    datatable.className = 'cell-border'
    datatable.style.width='100%'

    datadiv.appendChild(datatable)

    $.ajax({
        type: "POST",
        url: "../php/DBAccess/getTSitzPerson.php",
        dataType: "html",
        success: function (data) {
            $("#sitzperson").html(data);
            $('#sitzperson').DataTable({

            });
        }
    });
}

//                    <table id="person" class="cell-border" style="width: 100%">
//
//                     </table>





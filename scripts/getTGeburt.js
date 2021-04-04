activate = document.getElementById('activateGeburt')
activate.onclick = function () {
    let datadiv = document.getElementById('datadiv')
    datadiv.innerHTML = ''

    let datatable = document.createElement('table')
    datatable.id = 'geburt'
    datatable.className = 'cell-border'
    datatable.style.width='100%'

    datadiv.appendChild(datatable)

    $.ajax({
        type: "POST",
        url: "../php/DBAccess/getTGeburt.php",
        dataType: "html",
        success: function (data) {
            $("#geburt").html(data);
            $('#geburt').DataTable({

            });
        }
    });
}

//                    <table id="person" class="cell-border" style="width: 100%">
//
//                     </table>





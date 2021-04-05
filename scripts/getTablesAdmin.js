let datadiv = document.getElementById('datadivAdmin')
activatePersonAdmin = document.getElementById('activatePersonAdmin')
activateGeburtAdmin = document.getElementById('activateGeburtAdmin')

activatePersonAdmin.onclick = function () {
    createDataTable(['Ausweisnummer', 'Vorname', 'Nachname', 'Status', 'Steuernummer', 'Email', 'Telefonnummer', 'Geschlecht', 'Ausweisnummer Vater', 'Ausweisnummer Mutter', 'GeburtsID'])


    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TPersonAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'Ausweisnummer', name: 'Ausweisnummer'},
            {label: 'Vorname', name: 'Vorname'},
            {label: 'Nachname', name: 'Nachname'},
            {label: 'Status', name: 'Status'},
            {label: 'Steuernummer', name: 'Steuernummer'},
            {label: 'Email', name: 'Email'},
            {label: 'Telefonnummer', name: 'Telefonnummer'},
            {label: 'Geschlecht', name: 'Geschlecht'},
            {label: 'VaterAusweisnummerForeign', name: 'VaterAusweisnummerForeign'},
            {label: 'MutterAusweisnummerForeign', name: 'MutterAusweisnummerForeign'},
            {label: 'GeburtsIDForeign', name: 'GeburtsIDForeign'}
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TPersonAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'Ausweisnummer'},
            {data: 'Vorname'},
            {data: 'Nachname'},
            {data: 'Status'},
            {data: 'Steuernummer'},
            {data: 'Email'},
            {data: 'Telefonnummer'},
            {data: 'Geschlecht'},
            {data: 'VaterAusweisnummerForeign'},
            {data: 'MutterAusweisnummerForeign'},
            {data: 'GeburtsIDForeign'}
        ],
        select: true,
        buttons: [
            {extend: 'create', editor: editor},
            {extend: 'edit', editor: editor},
            {extend: 'remove', editor: editor}
        ]
    });
}


activateGeburtAdmin.onclick = function () {
    createDataTable(['GeburtsID', 'Geburtsdatum', 'OrtID'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TGeburtAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'GeburtsID', name: 'GeburtsID'},
            {label: 'Geburtsdatum', name: 'Geburtsdatum'},
            {label: 'OrtIDForeign', name: 'OrtIDForeign'},
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TGeburtAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'GeburtsID'},
            {data: 'Geburtsdatum'},
            {data: 'OrtIDForeign'},
        ],
        select: true,
        buttons: [
            {extend: 'create', editor: editor},
            {extend: 'edit', editor: editor},
            {extend: 'remove', editor: editor}
        ]
    });
}


function createDataTable(columns) {
    datadiv.innerHTML = ''

    let datatable = document.createElement('table')
    datatable.id = 'datatableAdmin'
    datatable.className = 'cell-border'
    datatable.style.width = '100%'

    let thead = document.createElement('thead')
    let trow = document.createElement('tr')

    let theader;
    columns.forEach(function (item) {
        theader = document.createElement('th')
        theader.innerHTML = item
        trow.appendChild(theader)
    })

    thead.appendChild(trow)
    datatable.appendChild(thead)
    datadiv.appendChild(datatable)

}





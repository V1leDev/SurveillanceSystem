let datadiv = document.getElementById('datadivAdmin')
activatePersonAdmin = document.getElementById('activatePersonAdmin')
activateGeburtAdmin = document.getElementById('activateGeburtAdmin')
activateOrtAdmin = document.getElementById('activateOrtAdmin')
activateGemeindeAdmin = document.getElementById('activateGemeindeAdmin')
activateSitzAdmin = document.getElementById('activateSitzAdmin')
activateSitzPersonAdmin = document.getElementById('activateSitzPersonAdmin')
activateArbeitsplatzAdmin = document.getElementById('activateArbeitsplatzAdmin')

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

activateSitzPersonAdmin.onclick = function () {
    createDataTable(['WohnsitzID', 'Ausweisnummer', 'SitzID', 'Startdatum', 'Enddatum'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TWohnsitzAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'SitzPersonID', name: 'SitzPersonID'},
            {label: 'AusweisnummerForeign', name: 'AusweisnummerForeign'},
            {label: 'SitzIDForeign', name: 'SitzIDForeign'},
            {label: 'StartDatum', name: 'StartDatum'},
            {label: 'EndDatum', name: 'EndDatum'},
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TWohnsitzAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'SitzPersonID'},
            {data: 'AusweisnummerForeign'},
            {data: 'SitzIDForeign'},
            {data: 'StartDatum'},
            {data: 'EndDatum'},
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

// TODO: Fix bug
activateSitzAdmin.onclick = function () {
    createDataTable(['SitzID', 'Straße', 'Straßennummer', 'OrtID'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TSitzAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'SitzID', name: 'SitzID'},
            {label: 'Straße', name: 'Straße'},
            {label: 'Straßennummer', name: 'Straßennummer'},
            {label: 'OrtIDForeign', name: 'OrtIDForeign'}
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TSitzAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'SitzID'},
            {data: 'Straße'},
            {data: 'Straßennummer'},
            {data: 'OrtIDForeign'}
        ],
        select: true,
        buttons: [
            {extend: 'create', editor: editor},
            {extend: 'edit', editor: editor},
            {extend: 'remove', editor: editor}
        ]
    });
}


activateOrtAdmin.onclick = function () {
    createDataTable(['OrtID', 'Name', 'GemeindenID'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TOrtAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'OrtID', name: 'OrtID'},
            {label: 'Name', name: 'Name'},
            {label: 'GemeindenIDForeign', name: 'GemeindenIDForeign'},
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TOrtAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'OrtID'},
            {data: 'Name'},
            {data: 'GemeindenIDForeign'},
        ],
        select: true,
        buttons: [
            {extend: 'create', editor: editor},
            {extend: 'edit', editor: editor},
            {extend: 'remove', editor: editor}
        ]
    });
}

activateGemeindeAdmin.onclick = function () {
    createDataTable(['GemeindenID', 'Name', 'Postleitzahl', 'Land'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TGemeindeAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'GemeindenID', name: 'GemeindenID'},
            {label: 'Name', name: 'Name'},
            {label: 'Postleitzahl', name: 'Postleitzahl'},
            {label: 'Land', name: 'Land'}
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TGemeindeAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'GemeindenID'},
            {data: 'Name'},
            {data: 'Postleitzahl'},
            {data: 'Land'}
        ],
        select: true,
        buttons: [
            {extend: 'create', editor: editor},
            {extend: 'edit', editor: editor},
            {extend: 'remove', editor: editor}
        ]
    });
}

activateArbeitsplatzAdmin.onclick = function () {
    createDataTable(['ArbeitsplatzID', 'Beruf', 'Firmenname', 'SitzID'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TArbeitsplatzAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'ArbeitsplatzID', name: 'ArbeitsplatzID'},
            {label: 'Beruf', name: 'Beruf'},
            {label: 'Firmenname', name: 'Firmenname'},
            {label: 'SitzIDForeign', name: 'SitzIDForeign'},
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TArbeitsplatzAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'ArbeitsplatzID'},
            {data: 'Beruf'},
            {data: 'Firmenname'},
            {data: 'SitzIDForeign'},
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





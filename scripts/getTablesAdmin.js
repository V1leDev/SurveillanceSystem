let datadiv = document.getElementById('datadivAdmin')
activatePersonAdmin = document.getElementById('activatePersonAdmin')
activateGeburtAdmin = document.getElementById('activateGeburtAdmin')
activateOrtAdmin = document.getElementById('activateOrtAdmin')
activateGemeindeAdmin = document.getElementById('activateGemeindeAdmin')
activateSitzAdmin = document.getElementById('activateSitzAdmin')
activateSitzPersonAdmin = document.getElementById('activateSitzPersonAdmin')
activateArbeitsplatzAdmin = document.getElementById('activateArbeitsplatzAdmin')
activatePersonArbeitsplatzAdmin = document.getElementById('activatePersonArbeitsplatzAdmin')
activateBankkontoAdmin = document.getElementById('activateBankkontoAdmin')
activatePersonBankkontoAdmin = document.getElementById('activatePersonBankkontoAdmin')
activateHobbyAdmin = document.getElementById('activateHobbyAdmin')
activateHobbyPersonAdmin = document.getElementById('activatePersonHobbyAdmin')
activateFreundAdmin = document.getElementById('activateFreundAdmin')
activatePartnerAdmin = document.getElementById('activatePartnerAdmin')

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

activateHobbyPersonAdmin.onclick = function () {
    createDataTable(['HobbyPersonID', 'Ausweisnummer', 'HobbyID', 'Startdatum', 'Enddatum'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/THobbyPersonAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'HobbyPersonID', name: 'HobbyPersonID'},
            {label: 'AusweisnummerForeign', name: 'AusweisnummerForeign'},
            {label: 'HobbyIDForeign', name: 'HobbyIDForeign'},
            {label: 'StartDatum', name: 'StartDatum'},
            {label: 'EndDatum', name: 'EndDatum'},
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/THobbyPersonAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'HobbyPersonID'},
            {data: 'AusweisnummerForeign'},
            {data: 'HobbyIDForeign'},
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

activatePartnerAdmin.onclick = function () {
    createDataTable(['PartnerID', 'Ausweisnummer', 'Ausweisnummer', 'Liebeslevel', 'Startdatum', 'Enddatum'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TPartnerAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'PartnerID', name: 'PartnerID'},
            {label: 'Ausweisnummer1Foreign', name: 'Ausweisnummer1Foreign'},
            {label: 'Ausweisnummer2Foreign', name: 'Ausweisnummer2Foreign'},
            {label: 'Liebeslevel', name: 'Liebeslevel'},
            {label: 'StartDatum', name: 'StartDatum'},
            {label: 'EndDatum', name: 'EndDatum'},
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TPartnerAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'PartnerID'},
            {data: 'Ausweisnummer1Foreign'},
            {data: 'Ausweisnummer2Foreign'},
            {data: 'Liebeslevel'},
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

activateFreundAdmin.onclick = function () {
    createDataTable(['FreundID', 'Ausweisnummer', 'Ausweisnummer', 'Startdatum', 'Enddatum'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TFreundAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'FreundID', name: 'FreundID'},
            {label: 'Ausweisnummer1Foreign', name: 'Ausweisnummer1Foreign'},
            {label: 'Ausweisnummer2Foreign', name: 'Ausweisnummer2Foreign'},
            {label: 'StartDatum', name: 'StartDatum'},
            {label: 'EndDatum', name: 'EndDatum'},
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TFreundAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'FreundID'},
            {data: 'Ausweisnummer1Foreign'},
            {data: 'Ausweisnummer2Foreign'},
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

activateHobbyAdmin.onclick = function () {
    createDataTable(['HobbyID', 'Name'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/THobbyAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'HobbyID', name: 'HobbyID'},
            {label: 'Name', name: 'Name'},
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/THobbyAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'HobbyID'},
            {data: 'Name'},
        ],
        select: true,
        buttons: [
            {extend: 'create', editor: editor},
            {extend: 'edit', editor: editor},
            {extend: 'remove', editor: editor}
        ]
    });
}


activatePersonBankkontoAdmin.onclick = function () {
    createDataTable(['PersonBankkontoID', 'Ausweisnummer', 'KontoID'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TPersonBankkontoAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'PersonBankkontoID', name: 'PersonBankkontoID'},
            {label: 'AusweisnummerForeign', name: 'AusweisnummerForeign'},
            {label: 'KontoIDForeign', name: 'KontoIDForeign'},
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TPersonBankkontoAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'PersonBankkontoID'},
            {data: 'AusweisnummerForeign'},
            {data: 'KontoIDForeign'},
        ],
        select: true,
        buttons: [
            {extend: 'create', editor: editor},
            {extend: 'edit', editor: editor},
            {extend: 'remove', editor: editor}
        ]
    });
}


activateBankkontoAdmin.onclick = function () {
    createDataTable(['KontoID', 'Bank', 'Kontostand'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TBankkontoAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'KontoID', name: 'KontoID'},
            {label: 'Bank', name: 'Bank'},
            {label: 'Kontostand', name: 'Kontostand'},
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TBankkontoAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'KontoID'},
            {data: 'Bank'},
            {data: 'Kontostand'},
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


activatePersonArbeitsplatzAdmin.onclick = function () {
    createDataTable(['BerufID', 'Ausweisnummer', 'ArbeitsplatzID', 'Startdatum', 'Enddatum'])

    let editor = new $.fn.dataTable.Editor({
        ajax: '../Editor/TPersonArbeitsplatzAdminHandler.php',
        table: '#datatableAdmin',
        fields: [
            {label: 'PersonArbeitsplatzID', name: 'PersonArbeitsplatzID'},
            {label: 'AusweisnummerForeign', name: 'AusweisnummerForeign'},
            {label: 'ArbeitsplatzIDForeign', name: 'ArbeitsplatzIDForeign'},
            {label: 'StartDatum', name: 'StartDatum'},
            {label: 'EndDatum', name: 'EndDatum'}
        ]
    })
    $('#datatableAdmin').DataTable({
        ajax: '../Editor/TPersonArbeitsplatzAdminHandler.php',
        dom: 'Bfrtip',
        columns: [
            {data: 'PersonArbeitsplatzID'},
            {data: 'AusweisnummerForeign'},
            {data: 'ArbeitsplatzIDForeign'},
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





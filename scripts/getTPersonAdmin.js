var editor = new $.fn.dataTable.Editor({
    ajax: '../Editor/TPersonAdminHandler.php',
    table: '#personadmin',
    fields:[
        {label: 'Ausweisnummer', name:'Ausweisnummer'},
        {label: 'Vorname', name:'Vorname'},
        {label: 'Nachname', name:'Nachname'},
        {label: 'Status', name:'Status'},
        {label: 'Steuernummer', name:'Steuernummer'},
        {label: 'Email', name:'Email'},
        {label: 'Telefonnummer', name:'Telefonnummer'},
        {label: 'Geschlecht', name:'Geschlecht'},
        {label: 'VaterAusweisnummerForeign', name:'VaterAusweisnummerForeign'},
        {label: 'MutterAusweisnummerForeign', name:'MutterAusweisnummerForeign'},
        {label: 'GeburtsIDForeign', name:'GeburtsIDForeign'}
    ]
})

$('#personadmin').DataTable( {
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
        { extend: 'create', editor: editor },
        { extend: 'edit',   editor: editor },
        { extend: 'remove', editor: editor }
    ]
} );

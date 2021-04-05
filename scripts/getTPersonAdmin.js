
let datadiv = document.getElementById('datadivAdmin')
 activatePersonAdmin = document.getElementById('activatePersonAdmin')

 activatePersonAdmin.onclick = function () {
     createDataTable()

     var editor = new $.fn.dataTable.Editor({
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


 function createDataTable() {
     datadiv.innerHTML = ''

     let datatable = document.createElement('table')
     datatable.id = 'datatableAdmin'
     datatable.className = 'cell-border'
     datatable.style.width = '100%'

     thead = document.createElement('thead')
     trow = document.createElement('tr')
     theader1 = document.createElement('th')
     theader1.innerHTML = "Ausweisnummer"

     theader2 = document.createElement('th')
     theader2.innerHTML = "Vorname"

     theader3 = document.createElement('th')
     theader3.innerHTML = "Nachname"

     theader4 = document.createElement('th')
     theader4.innerHTML = "Status"

     theader5 = document.createElement('th')
     theader5.innerHTML = "Steuernummer"

     theader6 = document.createElement('th')
     theader6.innerHTML = "Email"

     theader7 = document.createElement('th')
     theader7.innerHTML = "Telefonnummer"

     theader8 = document.createElement('th')
     theader8.innerHTML = "Geschlecht"

     theader9 = document.createElement('th')
     theader9.innerHTML = "Ausweisnummer Vater"

     theader10 = document.createElement('th')
     theader10.innerHTML = "Ausweisnummer Mutter"

     theader11 = document.createElement('th')
     theader11.innerHTML = "GeburtsID"


     trow.append(theader1, theader2, theader3, theader4, theader5, theader6, theader7, theader8, theader9, theader10, theader11)
     thead.appendChild(trow)
     datatable.appendChild(thead)

     datadiv.appendChild(datatable)

 }

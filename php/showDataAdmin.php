<?php
# start session
session_start();

if (!isset($_SESSION['username'])) {
    header("location:login.php#login");
} elseif ($_SESSION['dbusername'] == 'guest') {
    header("location:showData.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Visionary</title>
    <link rel="stylesheet" type="text/css"
          href="https://cdn.datatables.net/v/dt/dt-1.10.24/b-1.7.0/sl-1.3.3/datatables.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../Editor/css/editor.dataTables.css">
</head>
<body id="body" class="d-flex flex-column align-items-center">
<h2>Person</h2>
<table id="personadmin" class="cell-border" style="width: 100%">
    <thead>
    <tr>
        <th>Ausweisnummer</th>
        <th>Vorname</th>
        <th>Nachname</th>
        <th>Status</th>
        <th>Steuernummer</th>
        <th>Email</th>
        <th>Telefonnummer</th>
        <th>Geschlecht</th>
        <th>Ausweisnummer Vater</th>
        <th>Ausweisnummer Mutter</th>
        <th>GeburtID</th>
    </tr>
    </thead>
</table>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript"
        src="https://cdn.datatables.net/v/dt/dt-1.10.24/b-1.7.0/sl-1.3.3/datatables.min.js"></script>
<script src="../Editor/js/dataTables.editor.js"></script>

<!-- Person -->
<script src="../scripts/getTPersonAdmin.js" type="text/javascript"></script>


</body>
</html>



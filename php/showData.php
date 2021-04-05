<?php
# start session
session_start();

if (!isset($_SESSION['username'])) {
    header("location:login.php#login");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Visionary</title>
    <link rel="stylesheet" href="../assets/sidebar/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/sidebar/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="../assets/sidebar/css/Sidebar-Menu-1.css">
    <link rel="stylesheet" href="../assets/sidebar/css/Sidebar-Menu.css">
    <link rel="stylesheet" href="../assets/sidebar/css/styles.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>

<body>
<div id="wrapper">
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand"><a id="activateHome" href="#">Home </a></li>
            <li><a href="#" id="activatePerson" ">Personen</a></li>
            <li><a href="#" id="activateGeburt">Geburten</a></li>
            <li><a href="#" id="activateOrt">Orte</a></li>
            <li><a href="#" id="activateGemeinde">Gemeinden</a></li>
            <li><a href="#" id="activateSitz">Sitze</a></li>
            <li><a href="#" id="activateSitzPerson">Wohnsitze</a></li>
            <li><a href="#" id="activateArbeitsplatz">Arbeitsplätze</a></li>
            <li><a href="#" id="activatePersonArbeitsplatz">Berufe</a></li>
            <li><a href="#" id="activateBankkonto">Bankkonten & Banken</a></li>
            <li><a href="#" id="activatePersonBankkonto">Bankkonten & Kunden</a></li>
            <li><a href="#" id="activateHobby">Hobbys</a></li>
            <li><a href="#" id="activatePersonHobby">Hobbys & Personen</a></li>
            <li><a href="#" id="activateFreund">Freunde</a></li>
            <li><a href="#" id="activatePartner">Partner</a></li>
            <li><a href="#" id="activateFeindlicheKommentare">Feindliche Kommentare</a></li>
            <li><a href="#" id="activateStraftat">Straftaten</a></li>
            <li><a href="#" id="activatePersonStraftat">Strafregister</a></li>
        </ul>
    </div>
    <div class="page-content-wrapper">
        <div class="container-fluid"><a class="btn btn-link" role="button" id="menu-toggle" href="#menu-toggle"><i
                        class="fa fa-bars"></i></a>
            <div class="row">
                <div id="datadiv" class="col-md-12">
                    <h1>Hello there Admin!</h1>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="../assets/sidebar/js/jquery.min.js"></script>
<script src="../assets/sidebar/bootstrap/js/bootstrap.min.js"></script>
<script src="../assets/sidebar/js/Sidebar-Menu.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
<script src="../scripts/getTables.js" type="text/javascript"></script>
<script src="../scripts/dataHome.js" type="text/javascript"></script>
</body>

</html>

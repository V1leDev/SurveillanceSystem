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
    <title>Visionary</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <link rel="stylesheet" href="../assets/sidebar/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/sidebar/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="../assets/sidebar/css/Sidebar-Menu-1.css">
    <link rel="stylesheet" href="../assets/sidebar/css/Sidebar-Menu.css">
    <link rel="stylesheet" href="../assets/sidebar/css/styles.css">
    <link rel="stylesheet" type="text/css"
          href="https://cdn.datatables.net/v/dt/dt-1.10.24/b-1.7.0/sl-1.3.3/datatables.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../Editor/css/editor.dataTables.css">
</head>
<body>
<div id="wrapper">
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand"><a id="activateHomeAdmin" href="#">Settings</a></li>
            <li class="sidebar-brand"><a href="logout.php">Logout</a></li>
            <li><a href="#" id="activatePersonAdmin">Personen</a></li>
            <li><a href="#" id="activateGeburtAdmin">Geburten</a></li>
            <li><a href="#" id="activateOrtAdmin">Orte</a></li>
            <li><a href="#" id="activateGemeindeAdmin">Gemeinden</a></li>
            <li><a href="#" id="activateSitzAdmin">Sitze</a></li>
            <li><a href="#" id="activateSitzPersonAdmin">Wohnsitze</a></li>
            <li><a href="#" id="activateArbeitsplatzAdmin">Arbeitsplätze</a></li>
            <li><a href="#" id="activatePersonArbeitsplatzAdmin">Berufe</a></li>
            <li><a href="#" id="activateBankkontoAdmin">Bankkonten & Banken</a></li>
            <li><a href="#" id="activatePersonBankkontoAdmin">Bankkonten & Kunden</a></li>
            <li><a href="#" id="activateHobbyAdmin">Hobbys</a></li>
            <li><a href="#" id="activatePersonHobbyAdmin">Hobbys & Personen</a></li>
            <li><a href="#" id="activateFreundAdmin">Freunde</a></li>
            <li><a href="#" id="activatePartnerAdmin">Partner</a></li>
            <li><a href="#" id="activateFeindlicheKommentareAdmin">Feindliche Kommentare</a></li>
            <li><a href="#" id="activateStraftatAdmin">Straftaten</a></li>
            <li><a href="#" id="activatePersonStraftatAdmin">Strafregister</a></li>
        </ul>
    </div>
    <div class="page-content-wrapper">
        <div class="container-fluid"><a class="btn btn-link" role="button" id="menu-toggle" href="#menu-toggle"><i
                        class="fa fa-bars"></i></a>
            <div class="row">
                <div id="datadivAdmin" class="col-md-12">
                    <h1 style="text-align: center;margin-bottom: 5%;" id="settingsHeaderAdmin">Hello
                        there <?php echo $_SESSION['username'] ?>, this is your settings page</h1>
                    <div id="settingsAdmin" class="form-group" style="text-align: center;">
                        <form style="text-align: center;">
                            <h4 style="text-align: center;">Change password</h4>
                            <input class="form-control" id="changepwAdmin" type="password"
                                   style="text-align: center;width: 50%; margin-left: 25%">
                            <button class="btn btn-primary" id="buttonchangepwAdmin" type="button"
                                    style="text-align: center;width: 50%;background: #62079a;">Change it!
                            </button>
                        </form>
                    </div>
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
<script type="text/javascript"
        src="https://cdn.datatables.net/v/dt/dt-1.10.24/b-1.7.0/sl-1.3.3/datatables.min.js"></script>
<script src="../Editor/js/dataTables.editor.js"></script>

<script src="../scripts/getTablesAdmin.js" type="text/javascript"></script>
<script src="../scripts/dataHomeAdmin.js" type="text/javascript"></script>


</body>
</html>



<?php
// DataTables PHP library
include("lib/DataTables.php");

// Alias Editor classes so they are easy to use
use
    DataTables\Editor,
    DataTables\Editor\Field,
    DataTables\Editor\Format,
    DataTables\Editor\Mjoin,
    DataTables\Editor\Options,
    DataTables\Editor\Upload,
    DataTables\Editor\Validate;

$editor = Editor::inst($db, 'TGemeinde', 'GemeindenID')
    ->fields(
        Field::inst('GemeindenID'),
        Field::inst('Name'),
        Field::inst('Postleitzahl'),
        Field::inst('Land')
    )
    ->process($_POST)
    ->json();

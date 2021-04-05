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

$editor = Editor::inst($db, 'TSitz', 'SitzID')
    ->fields(
        Field::inst('SitzID'),
        Field::inst('Straße'),
        Field::inst('Straßennummer'),
        Field::inst('OrtIDForeign')
    )
    ->process($_POST)
    ->json();

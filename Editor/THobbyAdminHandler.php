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

$editor = Editor::inst($db, 'THobby', 'HobbyID')
    ->fields(
        Field::inst('HobbyID')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Name')
            ->setFormatter(Format::ifEmpty(null))
    )
    ->process($_POST)
    ->json();

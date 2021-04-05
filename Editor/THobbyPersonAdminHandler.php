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

$editor = Editor::inst($db, 'THobbyPerson', 'HobbyPersonID')
    ->fields(
        Field::inst('HobbyPersonID')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('AusweisnummerForeign')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('HobbyIDForeign')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('StartDatum')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('EndDatum')
            ->setFormatter(Format::ifEmpty(null))
    )
    ->process($_POST)
    ->json();

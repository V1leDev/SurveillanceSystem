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

$editor = Editor::inst($db, 'TSitzPerson', 'SitzPersonID')
    ->fields(
        Field::inst('SitzPersonID')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('AusweisnummerForeign')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('SitzIDForeign')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('StartDatum')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('EndDatum')
            ->setFormatter(Format::ifEmpty(null))
    )
    ->process($_POST)
    ->json();

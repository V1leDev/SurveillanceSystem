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

$editor = Editor::inst($db, 'TPersonStraftat', 'PersonStraftatID')
    ->fields(
        Field::inst('PersonStraftatID')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('AusweisnummerForeign')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('StraftatIDForeign')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Datum')
            ->setFormatter(Format::ifEmpty(null))
    )
    ->process($_POST)
    ->json();

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

$editor = Editor::inst($db, 'TArbeitsplatz', 'ArbeitsplatzID')
    ->fields(
        Field::inst('ArbeitsplatzID')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Beruf')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Firmenname')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('SitzIDForeign')
            ->setFormatter(Format::ifEmpty(null))
    )
    ->process($_POST)
    ->json();

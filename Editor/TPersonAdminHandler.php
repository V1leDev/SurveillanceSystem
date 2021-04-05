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

$editor = Editor::inst($db, 'TPerson', 'Ausweisnummer')
    ->fields(
        Field::inst('Ausweisnummer')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Vorname')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Nachname')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Status')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Steuernummer')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Email')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Telefonnummer')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Geschlecht')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('VaterAusweisnummerForeign')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('MutterAusweisnummerForeign')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('GeburtsIDForeign')
            ->setFormatter(Format::ifEmpty(null))
    )
    ->process($_POST)
    ->json();

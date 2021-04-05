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

$editor = Editor::inst($db, 'TPartner', 'PartnerID')
    ->fields(
        Field::inst('PartnerID')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Ausweisnummer1Foreign')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Ausweisnummer2Foreign')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('Liebeslevel')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('StartDatum')
            ->setFormatter(Format::ifEmpty(null)),
        Field::inst('EndDatum')
            ->setFormatter(Format::ifEmpty(null))
    )
    ->process($_POST)
    ->json();

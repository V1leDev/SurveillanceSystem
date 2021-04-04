<?php
// DataTables PHP library
include( "lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use
    DataTables\Editor,
    DataTables\Editor\Field,
    DataTables\Editor\Format,
    DataTables\Editor\Mjoin,
    DataTables\Editor\Options,
    DataTables\Editor\Upload,
    DataTables\Editor\Validate;

$editor = Editor::inst( $db, 'TPerson', 'Ausweisnummer' )
    ->fields(
        Field::inst( 'Ausweisnummer' ),
        Field::inst( 'Vorname' ),
        Field::inst( 'Nachname' ),
        Field::inst( 'Status' ),
        Field::inst( 'Steuernummer' ),
        Field::inst( 'Email' ),
        Field::inst( 'Telefonnummer' ),
        Field::inst( 'Geschlecht' ),
        Field::inst( 'VaterAusweisnummerForeign' ),
        Field::inst( 'MutterAusweisnummerForeign' ),
        Field::inst( 'GeburtsIDForeign' )
    )
    ->process( $_POST )
    ->json();

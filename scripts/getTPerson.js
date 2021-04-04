$.ajax({
    type: "POST",
    url: "../php/DBAccess/getTPerson.php",
    dataType: "html",
    success: function (data) {
        $("#person").html(data);
        $('#person').DataTable({
            "autoWidth": true
        });
    }
});



var stationID;
var time;

$(document).ready(function() {
    
    $("#show-map").click(function() {
        $("#options").slideToggle("fast", function() {
            //
        });
        $("#map-wrapper").slideToggle("fast", function() {
            //
        });
        
        window.stationID = $("#niceride-location").val();
        window.time = $("#time").val();
    });

    $("#show-options").click(function() {
        $("#options").slideToggle("fast", function() {
            //
        });
        $("#map-wrapper").slideToggle("fast", function() {
            //
        });
        
    });

});

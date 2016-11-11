$(document).ready(function(){
    
    $("#lookup").on('click', function(){
        search($("#country").val());
    });
});

function search(query){
    var link = 'https://info2180-lab7-jasonhinds13.c9users.io/world.php?country='+query;
    $.ajax(link,{
        method: 'GET',
    }).done(function(res){
        alert($(res).text());
        $("#result").html(res);
    }).fail(function(fail){
        $("#result").html('<b>EPIC FAIL 500 - AJAX ERROR!</b>');
    });
}
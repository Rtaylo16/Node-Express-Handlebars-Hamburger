$(document).ready(function(){

    $("#addburg").on("submit", function (event){
        event.preventDefault();

        var newBurger = {
            newBurger: $("#addburg [name = burgerinput]").val().trim()
        };

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger,
        }).then(function(){
            location.reload();
        })

    });
    $(".eatBurg").on("click", function (event){
        event.preventDefault();

        var id = $(this).attr('id');

        $.ajax(`/api/burgers/` + id,{
            type: "PUT",
         
        }).then(function(){
            location.reload()
        });
            
        
    });


});
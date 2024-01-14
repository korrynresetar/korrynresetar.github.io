$(document).ready(function(){ 
    $("#data-tab").click(function(){
    


            if ($("#ml-tab").hasClass("active")) {
                $("#ml-tab").removeClass("active");
                $("#ml-content").removeClass("active");
                $("#ml-content").addClass("inactive");

                
            }

            else {
                $("#validate-tab").removeClass("active");
                $("#validate-content").removeClass("active");
                $("#validate-content").addClass("inactive");

            }

            $("#data-tab").addClass("active");
                $("#data-content").removeClass("inactive");
                $("#data-content").addClass("active");
});


$("#validate-tab").click(function(){
    


    if ($("#ml-tab").hasClass("active")) {
        $("#ml-tab").removeClass("active");
        $("#ml-content").removeClass("active");
        $("#ml-content").addClass("inactive");

        
    }

    else {
        $("#data-tab").removeClass("active");
        $("#data-content").removeClass("active");
        $("#data-content").addClass("inactive");

    }

    $("#validate-tab").addClass("active");
        $("#validate-content").removeClass("inactive");
        $("#validate-content").addClass("active");
});

$("#ml-tab").click(function(){


    if ($("#data-tab").hasClass("active")) {
        $("#data-tab").removeClass("active");
        $("#data-content").removeClass("active");
        $("#data-content").addClass("inactive");

        
    }

    else {
        $("#validate-tab").removeClass("active");
        $("#validate-content").removeClass("active");
        $("#validate-content").addClass("inactive");

    }

    $("#ml-tab").addClass("active");
        $("#ml-content").removeClass("inactive");
        $("#ml-content").addClass("active");
});

});
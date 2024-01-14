$(document).ready(function(){ 
    $("#uxr-tab").click(function(){
    


            if ($("#lab-tab").hasClass("active")) {
                $("#lab-tab").removeClass("active");
                $("#lab-content").removeClass("active");
                $("#lab-content").addClass("inactive");

                
            }

            else {
                $("#studio-tab").removeClass("active");
                $("#studio-content").removeClass("active");
                $("#studio-content").addClass("inactive");

            }

            $("#uxr-tab").addClass("active");
                $("#uxr-content").removeClass("inactive");
                $("#uxr-content").addClass("active");
});


$("#studio-tab").click(function(){
    


    if ($("#lab-tab").hasClass("active")) {
        $("#lab-tab").removeClass("active");
        $("#lab-content").removeClass("active");
        $("#lab-content").addClass("inactive");

        
    }

    else {
        $("#uxr-tab").removeClass("active");
        $("#uxr-content").removeClass("active");
        $("#uxr-content").addClass("inactive");

    }

    $("#studio-tab").addClass("active");
        $("#studio-content").removeClass("inactive");
        $("#studio-content").addClass("active");
});

$("#lab-tab").click(function(){


    if ($("#uxr-tab").hasClass("active")) {
        $("#uxr-tab").removeClass("active");
        $("#uxr-content").removeClass("active");
        $("#uxr-content").addClass("inactive");

        
    }

    else {
        $("#studio-tab").removeClass("active");
        $("#studio-content").removeClass("active");
        $("#studio-content").addClass("inactive");

    }

    $("#lab-tab").addClass("active");
        $("#lab-content").removeClass("inactive");
        $("#lab-content").addClass("active");
});

});
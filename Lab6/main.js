
//   bookAppointment pr to pay

$(function() {
    $("#date").datepicker({
        dateFormat: setDateFormat,
        minDate: new Date('06/01/2021'),
        maxDate: '+3M',
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    });
    
});


var unavailableDates = ["06/29/2020", "07/07/2020", "06/28/2021", "07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {

    var getexpert = document.getElementById("expert").value

    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0) {
        return [false];
    }
    if (date.getDay() == 6) {
        return [false];
    }
    
    if (getexpert == "elonmusk" ) {
        if(date.getDay() == 3){
            return [false];
        }
        
    }
    if (getexpert == "jamessmith") {
        if(date.getDay() == 5){
            return [false];
        }
        
    }
    if (getexpert == "sarahlinden") {
         if(date.getDay() == 2){
            return [false];
         }
        
    }

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [unavailableDates.indexOf(string) == -1]
}


var phoneVerified = false;

$("#phone").keyup(function(){
        var filter = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        var numEntered = $(this).val();
        let phoneVerified = false;
        if (!((filter.test(numEntered) == true) || numEntered.length == 10)) {
            $(this).css("background-color", "pink");
            $(".validation_error").show();
            phoneVerified = false;
        }
        else{
            $(this).css("background-color", "white");
            phoneVerified = true;
            $(".validation_error").hide();
        }
    });


$("#confirm").click(function() {
    var cardRegex = /^[0-9]{16}?$/;
    var val = $("#card-num").val();
    if(cardRegex.test(val) == true && val != ""){
        $("#invalid-card").hide();
        $(".modal-body").hide();
        $("#confirm").hide();
        $(".modal-body.confirmation").show();  
    }
    else{
        $("#invalid-card").show();
    }
});


var nameVerified = false;   
$("#firstname").keyup(function(){
    var nameEntered = $(this).val();
    var firstName = document.getElementById("firstname").value;
    if (firstName.length == 0){
        var nameVerified = false;
        $(".fname_error").show();
    }
    
    else{
        $(".fname_error").hide();
    }
    
});





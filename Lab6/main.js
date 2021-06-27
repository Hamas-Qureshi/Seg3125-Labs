

// $('#time').timepicker({
//     timeFormat: 'hh:mm p',
//     interval: 60,
//     minTime: '9:00am',
//     maxTime: '6:00pm',
//     startTime: '09:00',
//     dynamic: false,
//     dropdown: true,
//     scrollbar: true
// });


$(function() {
    $("#date").datepicker({
        dateFormat: setDateFormat,
        minDate: new Date('06/01/2021'),
        // maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    });
    // $("#date").prop('disabled', true);
});



var unavailableDates = ["06/29/2020", "07/07/2020", "06/28/2021", "07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {

    var getexpert = document.getElementById("service").value

    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0) {
        return [false];
    }
    if (date.getDay() == 6) {
        return [false];
    }

    if (getexpert == "elonmusk" && date.getDay() == 3) {
        return [false];
    }
    else if (expert == "jamessmith" && date.getDay() == 5) {
        return [false];
    }
    else if (expert == "sarahlinden" && date.getDay() == 4) {
        return [false];
    }
    else{
        alert("select a service first please")
    }

    var string = jQuery.datepicker.setDateFormat(setDateFormat, date);
    return [unavailableDates.indexOf(string) == -1]
}


var phoneVerified = false;


$("#phone").keyup(function(){
    var filter = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    var numEntered = $(this).val();
    let phoneVerified = false;
    if (!((filter.test(numEntered) == true) || numEntered.length == 10)) {
        $(this).css("background-color", "pink");
        phoneVerified = false;  
    }
    else{
        $(this).css("background-color", "white");
        phoneVerified = true;
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
  



$('#time').timepicker({
    timeFormat: 'hh:mm p',
    interval: 60,
    minTime: '9:00am',
    maxTime: '6:00pm',
    startTime: '09:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});


$(function() {
    $("#date").datepicker({
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2021'),
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    });
    // $("#date").prop('disabled', true);
});


var expert;
 $("select#service").change(function(){
    var text = $(this).children("option:selected").val().toLowerCase();
    expert = text.replace("dr. ", "").replace(" ", "-");

});

var unavailableDates = ["06/29/2021", "06/2/2021", "06/28/2021", "06//2021"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0) {
        return [false];
    }
    if (date.getDay() == 6) {
        return [false];
    }
    if (expert == "Sarah-Linden" && date.getDay() == 3) {
        return [false];
    }
    if (expert == "Elon-Musk" && date.getDay() == 5) {
        return [false];
    }
    if (expert == "James-Smith" && date.getDay() == 4) {
        return [false];
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
  

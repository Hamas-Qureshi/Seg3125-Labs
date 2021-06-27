
// $( function() {
//     $( "#date" ).datepicker()({
//         changeYear: false,
//         dateFormat: 'dd/mm/yy',
//         // minDate: new Date('06/23/2021'),
//         beforeShowDay: DisableDates
//     });
// });

// // var dates = ["20/01/2021", "21/06/2021", "22/06/2021", "23/06/2021"];
// var dates = ["06/20/2021", "06/21/2021", "06/22/2021", "06/23/2021"];
// function DisableDates(date) {
//     var string = jQuery.datepicker.formatDate('dd/mm/yy', date);
//     return [dates.indexOf(string) == -1];
// }

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



var expert;
 $("select#service").change(function(){
    var text = $(this).children("option:selected").val().toLowerCase();
    expert = text.replace("dr. ", "").replace(" ", "-");

});


 var expert;
var phoneVerified = false;

$("#phone").keyup(function(){
    var filter = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    var numEntered = $(this).val();

    if (!((filter.test(numEntered) == true) || numEntered.length == 10)) {
        $(this).css("background-color", "pink");
        phoneVerified = false;
        alert("Please make sure to enter the correct amount of Digits");
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
  

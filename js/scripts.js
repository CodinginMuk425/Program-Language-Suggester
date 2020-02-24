$(document).ready(function () {
    //all responses will equal a cumulitive score and will create a score. The score will determine the language picker.

    //first question
    var green = parseInt("1");
    var blue = parseInt("2");
    var red = parseInt("3");
    var yellow = parseInt("4");
    var orange = parseInt("5");

    $("button#green").click(function () {
        $("body").removeClass();
        $("body").addClass("green-background");
        $("green").parseInt("1");
    });

    $("button#blue").click(function () {
        $("body").removeClass();
        $("body").addClass("blue-background");
        $("blue").parseInt("2");
    });

    $("button#red").click(function () {
        $("body").removeClass();
        $("body").addClass("red-background");
        $("red").parseInt("3");
    });

    $("button#yellow").click(function () {
        $("body").removeClass();
        $("body").addClass("yellow-background");
        $("yellow").parseInt("4");
    });

    $("button#orange").click(function () {
        $("body").removeClass();
        $("body").addClass("orange-background");
        $("orange").parseInt("5");
    });

    //Sports quesiton
    var base = parseInt("5");
    var foot = parseInt("4");
    var socc = parseInt("3");
    var basket = parseInt("2");
    var other = parseInt("1");
    var sport = $("input:radio[name=sport]:checked").val();

    $("#different").click(function () {
        prompt("What's your favorite sport?");
    });

    //Puzzles quesiton 

    var yes = parseInt("10");
    var no = parseInt("5");

    $("#click1").click(function () {
        $("#nay").toggle();
    });
    $("#click2").click(function () {
        $("#yay").toggle();
    });

    $("#nay").click(function () {
        alert("Yeah, puzzles suck!");
    })

    $("#yay").click(function () {
        alert("Yeah, puzzles are great!");
    })
    //question 4 airplane
$("form#airplane").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
})

//question 5 age
$("form#age").submit(function() {
    event.preventDefault();
    var number2 = parseInt($("#input2").val());
});

//Final score formula



});




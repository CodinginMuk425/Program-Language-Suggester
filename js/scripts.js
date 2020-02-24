$(document).ready(function () {
    //all responses will equal a cumulitive score and will create a score. The score will determine the language picker.
    
    //first question
    var green = 1
    var blue = 2
    var red = 3
    var yellow = 4
    var orange = 5

    $("button#green").click(function () {
        $("body").removeClass();
        $("body").addClass("green-background");
    });

    $("button#blue").click(function () {
        $("body").removeClass();
        $("body").addClass("blue-background");
    });

    $("button#red").click(function () {
        $("body").removeClass();
        $("body").addClass("red-background");
    });

    $("button#yellow").click(function () {
        $("body").removeClass();
        $("body").addClass("yellow-background");
    });

    $("button#orange").click(function () {
        $("body").removeClass();
        $("body").addClass("orange-background");
    });

    //Sports quesiton
    var base = 5
    var foot = 4
    var socc = 3
    var basket = 2
    var other = 1
    var sport = $("input:radio[name=sport]:checked").val();

    $("#different").click(function () {
        prompt("What's your favorite sport?");
    });

    //Puzzles quesiton will be 10 points for yes and 20 for no

    var yes = 10
    var no = 5

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
});




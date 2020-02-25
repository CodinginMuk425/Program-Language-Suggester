$(document).ready(function () {
    //all responses will equal a cumulitive score and will create a score. The score will determine the language picker.

    //first question
    var green = 1;
    var blue = 2;
    var red = 3;
    var yellow = 4;
    var orange = 5;
    var score = 0
    var result = ""

    $("button#green").click(function () {
        $("body").removeClass();
        $("body").addClass("green-background");
        score = score + 1;
    });

    $("button#blue").click(function () {
        $("body").removeClass();
        $("body").addClass("blue-background");
        score = score + 2;
    });

    $("button#red").click(function () {
        $("body").removeClass();
        $("body").addClass("red-background");
        score = score + 3;
    });

    $("button#yellow").click(function () {
        $("body").removeClass();
        $("body").addClass("yellow-background");
        score = score + 4;
    });

    $("button#orange").click(function () {
        $("body").removeClass();
        $("body").addClass("orange-background");
        score = score + 5;
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
        $("yes").parseInt("10")
    });

    $("#nay").click(function () {
        alert("Yeah, puzzles suck!");
        $("no").parseInt("5");
    })

    $("#yay").click(function () {
        alert("Yeah, puzzles are great!");
    })
    //question 4 airplane
    $("form").submit(function () {
        event.preventDefault();
        var airplaneinput = parseInt($("#airplane").val());
        var age = parseInt($("#age").val());
        score = score + airplaneinput + age;
        if (score > 10) {
            result = "c#";
            alert(result);
        } else {
            result = "javascript";
            alert(result);
        };
    });

    //question 5 age
    
    //Final score formula

});




$(document).ready(function () {
    //all responses will equal a cumulitive score and will create a score. The score will determine the language picker.

    //first question
    var score = 0
    var result = ""

    $(".survey").hide();

    $("#click1").click(function () {
        $(".survey").show();
    });

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

    var baseball = $("#baseball").click(function () {
        $(baseball = 10);
    });

    var football = $("#football").click(function () {
        $(football = 9);
    });

    var soccer = $("#soccer").click(function () {
        $(soccer = 8);
    });

    var basketball = $("#basketball").click(function () {
        $(basketball = 7);
    });

    var other = $("#other").click(function () {
        $(other = 6);
        prompt("What's your favoirte sport?")
    });

    var sport = $("input:radio[name=sport]:checked").val();


    //Puzzles quesiton 

    var yes = $("#yes").click(function () {
        $(yes = 10);
    });

    var no = $("#no").click(function () {
        $(no = 5);
    });

    //question 4 airplane & 5 age

    $("form").submit(function () {
        event.preventDefault();
        var airplaneinput = parseInt($("#airplane").val());
        var age = parseInt($("#age").val());
        score = score + (yes | no) + (baseball | football | soccer | basketball | other) + airplaneinput + age;
        if (score > 24) {
            result = "You're ready for C#!";
            alert(result);
        } else if (score <= 23 && score >= 5); {
            result = "You should study Python!";
            alert(result);
        }
    });

    //hide survey once complete

    $("#finalscore").click(function () {
        $(".survey").hide();
    });

});




$(document).ready(function () {
    //all responses will equal a cumulitive score and will create a score. The score will determine the language picker.

    //first question
    var score = 0
    var result = ""

    $(".survey").hide();

    $("#click1").click(function () {
        $(".survey").fadeIn();
    });

    $("button#green").click(function () {
        $("body").removeClass();
        $("body").addClass("green-background");
        $("#colors").fadeOut();
        score = score + 1;
    });

    $("button#blue").click(function () {
        $("body").removeClass();
        $("body").addClass("blue-background");
        $("#colors").fadeOut();
        score = score + 2;
    });

    $("button#red").click(function () {
        $("body").removeClass();
        $("body").addClass("red-background");
        $("#colors").fadeOut();
        score = score + 3;
    });

    $("button#yellow").click(function () {
        $("body").removeClass();
        $("body").addClass("yellow-background");
        $("#colors").fadeOut();
        score = score + 4;
    });

    $("button#orange").click(function () {
        $("body").removeClass();
        $("body").addClass("orange-background");
        $("#colors").fadeOut();
        score = score + 5;
    });

    //Sports quesiton

    var baseball = $("#baseball").click(function () {
        $(baseball = 10);
        $("#sports").fadeOut();
    });

    var football = $("#football").click(function () {
        $(football = 9);
        $("#sports").fadeOut();
    });

    var soccer = $("#soccer").click(function () {
        $(soccer = 8);
        $("#sports").fadeOut();
    });

    var basketball = $("#basketball").click(function () {
        $(basketball = 7);
        $("#sports").fadeOut();
    });

    var other = $("#other").click(function () {
        $(other = 6);
        prompt("What's your favoirte sport?")
        $("#sports").fadeOut();
    });

    var sport = $("input:radio[name=sport]:checked").val();

    //Puzzles quesiton 

    var yes = $("#yes").click(function () {
        $(yes = 10);
        alert("Yeah puzzles are cool, I guess.")
        $("#puzzles").fadeOut();
    });

    var no = $("#no").click(function () {
        $(no = 5);
        alert("Yeah! Puzzles suck!")
        $("#puzzles").fadeOut();
    });

    //question 4 airplane & 5 age

    $("form").submit(function () {
        event.preventDefault();
        var airplaneinput = parseInt($("#airplane").val());
        var age = parseInt($("#age").val());
        score = score + (yes | no) + (baseball | football | soccer | basketball | other) + airplaneinput + age;
        if (score > 85) {
            result = "You're ready for C#!";
            alert(result);
        } else if (score <= 84 && score >= 55) {
            result = "You should study Python!";
            alert(result);
        } else {
            result = "You should study JavaScript!";
            alert(result);
        }
    });

    //hide survey once complete

    $("#finalscore").click(function () {
        $(".survey").fadeOut();
    });

});




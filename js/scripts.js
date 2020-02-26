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

    var baseball = $("#sportsgroup").click(function () {
        $(baseball = 1);
    });

    var football = $("#sportsgroup").click(function () {
        $(football = 2);
    });

    var soccer = $("#sportsgroup").click(function () {
        $(soccer = 3);
    });

    var basketball = $("#sportsgroup").click(function () {
        $(basketball = 4);
    });

    var other = $("#sportsgroup").click(function () {
        $(other = 5);
    });

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
        score = score + (yes | no) + airplaneinput + age;
        if (score > 65) {
            result = "You're ready for C#!";
            alert(result);
        } else if (score <=64 && score >= 41); {
            result = "You should study Python!";
            alert(result);
      //  } else {
        //    result = "You should study JavaScript!";
        };
    });

});




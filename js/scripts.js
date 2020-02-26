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

    var yes = $("#yes").click(function() {
        $(yes = 10);
    });

    var no = $("#no").click(function() {
       $(no = 5);
   });

    //Puzzles quesiton 

    
   
   
    //$("#click1").click(function () {
    //$("#nay").toggle();
    // });
    //$("#click2").click(function () {
    // $("#yay").toggle();
    //});

    //$("#nay").click(function () {
    // alert("Yeah, puzzles suck!");
    // $("no").parseInt("5");
    // })

    //$("#yay").click(function () {
    // alert("Yeah, puzzles are great!");
    // })
    //question 4 airplane
    $("form").submit(function () {
        event.preventDefault();
        var airplaneinput = parseInt($("#airplane").val());
        var age = parseInt($("#age").val());
        score = score + (yes | no) + airplaneinput + age;
        if (score > 10) {
            result = "You're ready for c#!";
            alert(result);
        } else {
            result = "You should study JavaScript!";
            alert(result);
        };
    });

    //question 5 age

    //Final score formula

});




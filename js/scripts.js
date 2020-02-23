$(document).ready(function() {
    //first question
    $("button#green").click(function() {
        $("body").removeClass();
        $("body").addClass("green-background");
    });

    $("button#blue").click(function() {
        $("body").removeClass();
        $("body").addClass("blue-background");
    });

    $("button#red").click(function() {
        $("body").removeClass();
        $("body").addClass("red-background");
    });

    $("button#yellow").click(function() {
        $("body").removeClass();
        $("body").addClass("yellow-background");
    });

    $("button#orange").click(function() {
        $("body").removeClass();
        $("body").addClass("orange-background");
    });

    //Sports quesiton
    var sport = $("input:radio[name=sport]:checked").val();
    

    //Puzzles quesiton will be 10 points for yes and 20 for no
});




//Beowulf, a young warrior
//The horse had the plain entirely to himself. A stag intruded into his domain and shared his pasture. The horse wanted to drive off the stranger from his land. What would you think if I sang out of tune would you stand up and walk out on me? Lend me your ears and I'll sing you a song.

$(".placeholder").text("");
$("#typing-box").on("click", function(){
    $(".placeholder").text("The horse had the plain entirely to himself. A stag intruded into his domain and shared his pasture. The horse wanted to drive off the stranger from his land. What would you think if I sang out of tune would you stand up and walk out on me? Lend me your ears and I'll sing you a song.");
});
var timeLeft = 59;

$("#typing-box").one("keypress", function(){
    var timerId = setInterval(timer, 1000);
    function timer(){
    $("#span-time").text(timeLeft);
        if(timeLeft == 0){
            clearInterval(timerId);
            $("#typing-box").attr('disabled','disabled');
            var char = $('#typing-box').val();
            $("#chars-span").text(char.length);
            var words = $('#typing-box').val().split(' ');
            $("#words-span").text(words.length);
            checkAccuarcy();
        } else{
            $("#span-time").text(timeLeft--);
        }
    }
});

$("button").click(function(){
    $("input").removeAttr('disabled');
    $("input").val("");
    $("#chars-span").text("0");
    $("#words-span").text("0");
    $("#span-time").text("60");
    $("#accuracy-span").text("0");
});

function checkAccuarcy(){
    var words = $('#typing-box').val();
    var texts = $('.placeholder').text();
    var wordsLength = words.length;
    var textsLength = texts.length;
    var unequalChars = checkChars();
    console.log(unequalChars);
    if(words === texts){
        console.log("equal");
        var maths = ((wordsLength/textsLength) * 100);
        $("#accuracy-span").text(maths);
    }
    else if(wordsLength < textsLength){
        var maths1 = ((wordsLength/textsLength) * 100);
        $("#accuracy-span").text(Math.round(maths1));
    }
    else if(wordsLength > textsLength){
        var maths2 = ((textsLength/wordsLength) * 100);
        $("#accuracy-span").text(Math.round(maths2));
    }
    else if(words !== texts){
        var maths3 = ((unequalChars / 158) * 100);
        $("#accuracy-span").text(Math.round(maths3));
    }
}

function checkChars(){
    var words = $('#typing-box').val();
    var texts = $('.placeholder').text();
    var wordsSplit = words.split("");
    console.log(wordsSplit);
    var textSplit = texts.split("");
    console.log(textSplit);
    var compareNum = 0;
    var l = Math.min(words.length, texts.length);
    for(var i = 0; i < l; i++){
        if(words.charAt(i) == texts.charAt(i)) {
            compareNum++;
        }
    }
    return compareNum;
}

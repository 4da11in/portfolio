var mb = document.getElementsByClassName("menuBackground");
function menuClicked(index) {
    //alert("clicked");
    
}
var s = 100;
var a = 200;
var p = 300;
var c = 440;
$(".menu").click(function() {
    var a = $(this);
    $(".menuBackground").animate( {
        left: a.offset(),
        width: '120px'
    });
});
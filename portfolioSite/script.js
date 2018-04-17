var mb = document.getElementsByClassName("menuBackground");
var i = 0;
function menuClicked(index) {
    i = index;  
}
var offsets = [28.75, 36.5, 51.75, 61.75];


$(".menu").click(function() {
    var a = $(this);
    $(".menuBackground").animate( {
        left: offsets[i] + 'vw',
        width: a.width()+20
    });
});
var mb = document.getElementsByClassName("menuBackground");
var i = 0;
function menuClicked(index) {
    i = index;
    switch (index) {
        case 0:
            break;
                 }
}
var offsets = [-275, -175, 20, 153];
function onresize() {    
    var screenWidth = document.documentElement.clientWidth;    
    document.getElementById('menuBackground').style.color = "red";//screenWidth/2 + offsets[i] + "px";
    alert("left");
}

$(".menu").click(function() {
    var a = $(this);
    var screenWidth = document.documentElement.clientWidth;
    $(".menuBackground").animate( {
        left: screenWidth/2 + offsets[i] + "px",
        width: a.width()+20
    });
    
});
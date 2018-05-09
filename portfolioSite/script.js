
var i = 0;
var subPages = document.getElementsByClassName("subPage");
var menus = document.getElementsByClassName("menu");
function menuClicked(index) {
    for (var j = 0; j < 4; j++) {
        subPages[i].style["display"] = "none";
    }
    i = index;
    subPages[i].style["display"] = "block";
    //alert(menus[i].offsetLeft);
}
//var offsets = [-275, -175, 20, 153];
document.getElementById('menuBackground').style.left = menus[i].offsetLeft + 'px';
document.getElementById('menuBackground').style.width = $(menus[i]).width() + 20 + 'px';
function onresize() {    
    var screenWidth = document.documentElement.clientWidth;    
    document.getElementById('menuBackground').style.left = menus[i].offsetLeft + 'px';
    document.getElementById('menuBackground').style.width = $(menus[i]).width() + 20 + 'px';
    //alert($(menus[i]).width());
}

$(".menu").click(function() {
    var a = $(this);
    var screenWidth = document.documentElement.clientWidth;
    
    $("#menuBackground").animate( {
        left: menus[i].offsetLeft,
        width: a.width()+20
    }, 300);
    
});

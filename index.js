const bigNavBar = $("#nav-big");
const smallNavBar = $("#nav-small");
window.onscroll = ()=>{
    if($(window).scrollTop() > bigNavBar.height()){
        smallNavBar.attr("style","display:block");
    }
    else{
        smallNavBar.attr("style","display:none"); 
    }
    
}
$(document).ready(function () {
    if($(window).scrollTop() > bigNavBar.height()){
        smallNavBar.attr("style","display:block");
    }
});

$(".card").on("swipe",()=>{
    console.log("swiped");
    $(this).addClass("hover");
}) 

$(".card").on("touch",()=>{
    $(this).addClass("hover");
})
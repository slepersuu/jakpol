const bigNavBar = $("#nav-big");
const smallNavBar = $("#nav-small");
const aboutDesc = $(".about-desc");
let height = 0;
$(".about-desc p").map(function(){
    height+=$(this).height();
    console.log(height);
})
$(".services-col").map(function(){
    $(this).height(height);
})
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


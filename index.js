const bigNavBar = $("#nav-big");
const smallNavBar = $("#nav-small");
window.onscroll = ()=>{
    scrollValue = $(window).scrollTop();
    if(scrollValue > bigNavBar.height()){
        smallNavBar.attr("style","display:block");
    }
    else{
        smallNavBar.attr("style","display:none"); 
    }
    
}

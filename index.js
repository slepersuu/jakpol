const bigNavBar = $("#nav-big");
const smallNavBar = $("#nav-small");
window.onscroll = ()=>{
    scrollValue = $(window).scrollTop();
    console.log(scrollValue);
    console.log(bigNavBar.height());
    if(scrollValue > bigNavBar.height()){
       // bigNavBar.attr("style","display:none");
        smallNavBar.attr("style","display:block");
        //window.scrollTo(0,51);
    }
    else{
        //bigNavBar.attr("style","display:static");
        smallNavBar.attr("style","display:none");
        //window.scrollTo(0,0);
    }
    
}

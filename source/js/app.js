
// JavaScript
 

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px' 
// });

function showNav(){
    console.log("this is working");
    var x = document.getElementById("responsive-nav");
    if (x.className === "responsive-nav") {
        x.className += " unfold";
    } else {
        x.className = "responsive-nav";
    }

}

window.sr = ScrollReveal();

sr.reveal('#header img.phone',{
    duration: 1000,
    origin: 'bottom',
    distance: '200px'    
});
sr.reveal('#features div.package',{
    delay: 200,
    duration: 1000,
    origin: 'bottom',
    distance: '100px'    
});
sr.reveal('#features div.delivery',{
    delay: 400,
    duration: 1000,
    origin: 'bottom',
    distance: '100px'    
});
sr.reveal('#features div.return',{
    delay: 600,
    duration: 1000,
    origin: 'bottom',
    distance: '100px'    
});
sr.reveal('#discount .offer',{
    delay: 600,
    duration: 500,
    origin: 'right',
    distance: '200px'    
});
sr.reveal('#discount img.double-phone',{
    delay: 600,
    duration: 500,
    origin: 'left',
    distance: '200px'    
});


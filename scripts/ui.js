function openNav() {
  document.getElementById("side_nav").style.width = "250px";
  document.getElementById("root").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("side_nav").style.width = "0";
    document.getElementById("root").style.marginLeft = "0";
}

function CheckSize()
{
    // Calculate the percentage width of the window
    var windowWidthPercentage = (window.innerWidth / window.screen.width) * 100;

    // Define the threshold percentage
    var thresholdPercentage = 80;
  
    if (windowWidthPercentage <= thresholdPercentage) {
        closeNav();
    }else{
        openNav();
    }

}

window.onload = function() {
    openNav();
    CheckSize();
};



window.onresize = CheckSize;
  
var _getcountDown = document.getElementById("_countdown");

_getcountDown.onclick = function Open_CountDown()
{
    document.getElementById("_state").innerHTML = "State: CD"
    document.getElementById("Timer_Container").style.height = "330px";
    document.getElementsByClassName("CountDown")[0].style.visibility = "visible";
    document.getElementsByClassName("CountDown")[0].style.opacity = 1;

}
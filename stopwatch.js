// var _getStopwatch = document.getElementById("_stopwatch");
// var _startStopwatch = document.getElementById("Start");
// var _roundStopwatch = document.getElementById("Round");
// var _stopStopwatch = document.getElementById("Stop");

// var hour = 0;
// var minute = 0;
// var second = 0;
// var millisecond = 0;

// var thour = hour.toString();
// var tminute = minute.toString();
// var tsecond = second.toString();
// var tmsecond = millisecond.toString();


// _getStopwatch.onclick = function Open_StopWatch()
// {
//     document.getElementById("_state").innerHTML = "State: SW"
//     document.getElementById("Timer_Container").style.height = "300px";
//     document.getElementsByClassName("StopWatch")[0].style.visibility = "visible";
//     document.getElementsByClassName("StopWatch")[0].style.opacity = 1;
// }

// _startStopwatch.onclick = function Start_Stopwatch()
// {
//     //_startStopwatch.disabled = true;
//     _interval = setInterval(StopWatch_Run_Start,1);
// }

// function StopWatch_Run_Start()
// {   
//     millisecond++; 

//     if (millisecond === 1000)
//     {
//         millisecond=0;
//         second++;
//     }
    
//     if(second == 60)
//     {
//         second=0;
//         minute++;
//     }

//     if(minute == 60)
//     {
//         minute=0;
//         hour++;
//     }

//     if(parseInt(tmsecond)<100)
//     {
//         if(parseInt(tmsecond)<10)
//         {
//             tmsecond="00"+millisecond.toString();
//         }
//         else
//         {
//             tmsecond="0"+millisecond.toString();
//         }
//     }

//     if(parseInt(tsecond)<10)
//     {
//         tsecond="0"+second.toString();
//     }
//     if(parseInt(tminute)<10)
//     {
//         tminute="0"+minute.toString();
//     }
//     if(parseInt(thour)<10)
//     {
//         thour="0"+hour.toString();
//     }
    
//     document.getElementById("Hour_1").innerHTML = thour[0];
//     document.getElementById("Hour_2").innerHTML = thour[1];
//     document.getElementById("Minute_1").innerHTML = tminute[0];
//     document.getElementById("Minute_2").innerHTML = tminute[1];
//     document.getElementById("Second_1").innerHTML = tsecond[0];
//     document.getElementById("Second_2").innerHTML = tsecond[1];
    
//     document.getElementById("M_second_1").innerHTML = tmsecond[0];
//     document.getElementById("M_second_2").innerHTML = tmsecond[1];
//     document.getElementById("M_second_3").innerHTML = tmsecond[2];
// }
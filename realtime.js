var _getRealTime = document.getElementById("_realtime");
var _resetSetTime = document.getElementById("_reset");
var _interval;
var checkpoint = false;
_resetSetTime.disabled = true;
_resetSetTime.style.backgroundColor = "grey";
_resetSetTime.style.borderColor = "white";


_getRealTime.onclick = function Set_Time()
{
    document.getElementById("_state").innerHTML = "State: RT"
    checkpoint= true;
    if(checkpoint == true)
    {
        _getRealTime.disabled = true;
        _resetSetTime.disabled = false;

        _getRealTime.style.backgroundColor = "grey";
        _getRealTime.style.borderColor = "white";
        _resetSetTime.style.backgroundColor = "white";
        _resetSetTime.style.borderColor = "grey";

        Real_Time();
        _interval = setInterval(Real_Time,1);
    }
}

function Real_Time()
{
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var millisecond = time.getMilliseconds();
    
    if(hour<10)
    {
        hour="0"+hour;
    }
        
    if(minute<10)
    {
        minute="0"+minute;
    }
    
    if(second<10)
    {
        second="0"+second;
    }

    if(millisecond<100)
    {
        if(millisecond<10)
        {
            millisecond="00"+millisecond;
        }
        else
        {
            millisecond="0"+millisecond;
        }
    }
    
    var thour = hour.toString();
    var tminute = minute.toString();
    var tsecond = second.toString();
    var tmsecond = millisecond.toString();

    document.getElementById("Hour_1").innerHTML = thour[0];
    document.getElementById("Hour_2").innerHTML = thour[1];
    document.getElementById("Minute_1").innerHTML = tminute[0];
    document.getElementById("Minute_2").innerHTML = tminute[1];
    document.getElementById("Second_1").innerHTML = tsecond[0];
    document.getElementById("Second_2").innerHTML = tsecond[1];
    
    document.getElementById("M_second_1").innerHTML = tmsecond[0];
    document.getElementById("M_second_2").innerHTML = tmsecond[1];
    document.getElementById("M_second_3").innerHTML = tmsecond[2];

}

_resetSetTime.onclick = function Reset_Time()
{
    checkpoint = false;
    if(checkpoint == false)
    {
        _getRealTime.disabled = false;
        _resetSetTime.disabled = true;

        _getRealTime.style.backgroundColor = "white";
        _getRealTime.style.borderColor = "grey";
        _resetSetTime.style.backgroundColor = "grey";
        _resetSetTime.style.borderColor = "white";

        clearInterval(_interval);
        document.getElementById("Hour_1").innerHTML = "0";
        document.getElementById("Hour_2").innerHTML = "0";
        document.getElementById("Minute_1").innerHTML = "0";
        document.getElementById("Minute_2").innerHTML = "0";
        document.getElementById("Second_1").innerHTML = "0";
        document.getElementById("Second_2").innerHTML = "0";

        document.getElementById("M_second_1").innerHTML = "0";
        document.getElementById("M_second_2").innerHTML = "0";
        document.getElementById("M_second_3").innerHTML = "0";
    }
}


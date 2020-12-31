var ID=0
var seconds=0
function start()
{
 ID=window.setInterval(msg,1000)
}
function stop()
{
 window.clearInterval(ID);
}
function msg()
{
 document.getElementById('heading2').innerHTML="seconds"+seconds
 seconds=seconds+1
}

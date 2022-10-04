

var count = 0
var interval;
var start = ()=>{
    interval = setInterval(inc, 1000);
}
var stop = ()=>{
    clearInterval(interval,0)
}
var reset = ()=>{
    clearInterval(interval)
    count = 0
    document.getElementById('digit').innerText = 0;
}
var inc = ()=>{
    count++;
    document.getElementById('digit').innerText = count;
} 
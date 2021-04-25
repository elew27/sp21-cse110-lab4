function printEverySecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
var intervalID = setInterval(printEverySecond, 1000);
let time=document.getElementById("time");
let sec=10;
function count(){
    time.innerHTML=sec;
    if(sec<1){
        time.innerHTML="<h1>Happy developers day</h1>"
    }
    sec--;
    setTimeout(count,1000)
}
count()

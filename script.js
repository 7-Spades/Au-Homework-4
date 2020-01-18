var Q= document.querySelector("#Question");
var title= document.querySelector("#TemH1");
var paragraph= document.querySelector("#TemP");
var startup= document.querySelector("#TemB");
var position= document.querySelector("#choice");
var Timer= document.querySelector("#timer");
var Questionare= ["Who was the first president of the United States?", "When was the Louisiana Purchase bought?", "In what year did U.S Civil War start?"];
var DataA=["James Adam", "George Washinton", "Benjamin Franklin", "Thomas Jefferson", "1776", "1803", "1812", "1789", "1847", "1851", "1861", "1862"];

function begin(){
    event.preventDefault();
    title.remove();
    paragraph.remove();
    startup.remove();
    setup();
};

function setup(){
    Q.setAttribute("data-Q1", Questionare[0]);
    Q.setAttribute("data-Q2", Questionare[1]);
    Q.setAttribute("data-Q3", Questionare[3]);
    Q.setAttribute("data-Number", "first");
    for ( var i= 0; i<4; i++){
        var Ans= document.createElement("button");
        Ans.setAttribute("class", "btn btn-outline-primary col-6 mr-3 p-4 mb-4");
        Ans.setAttribute("data-A1", DataA[i]);
        Ans.setAttribute("data-A2", DataA[4+i]);
        Ans.setAttribute("data-A3", DataA[8+i]);
        position.appendChild(Ans);
       };
       counter();
       text();
};

function text(){
    var Qstate= Q.getAttribute("data-Number");
    if(Qstate=== "first"){
        Q.textContent= Q.getAttribute("data-Q1");
        for(var i= 0; i<4; i++){
            var btn= document.getElementsByClassName("btn");
            btn[i].textContent= btn[i].getAttribute("data-A1");
        };
    };
};

secondsLeft= 10

function counter(){
    var timeIn= setInterval(function(){
        secondsLeft--;
    Timer.textContent= secondsLeft + " seconds left until quiz is over";
    },1000);

    if(secondsLeft=== 0){
        Q.textContent= "Better luck Next time.";
       var tryA= document.createElement("button");
       tryA.setAttribute("class", "btn btn-outline-primary col-6 mr-3 p-4 mb-4");
       position.appendChild(tryA);
    };
};

startup.addEventListener("click", begin);
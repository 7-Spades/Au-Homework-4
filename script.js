var Q= document.querySelector("#Question");
var title= document.querySelector("#TemH1");
var paragraph= document.querySelector("#TemP");
var startup= document.querySelector("#TemB");
var position= document.querySelector("#choice");
var options= document.querySelector("button");
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
    for ( var i= 0; i<4; i++){
        var Ans= document.createElement("button");
        Ans.setAttribute("class", "btn btn-outline-primary col-6 mr-3 p-4 mb-4");
        Ans.setAttribute("id", i);
        Ans.setAttribute("data-A1", DataA[i]);
        Ans.setAttribute("data-A2", DataA[4+i]);
        Ans.setAttribute("data-A3", DataA[8+i]);
        position.appendChild(Ans);
   };
};

startup.addEventListener("click", begin);

var Q= document.querySelector("#Question");
var title= document.querySelector("#TemH1");
var paragraph= document.querySelector("#TemP");
var startup= document.querySelector("#TemB");
var position= document.querySelector("#choice");
var Questionare= ["Who was the Second president of the United States?", "When was the Louisiana Purchase bought?", "When did U.S Civil War start?"];

function begin(){
    event.preventDefault();
    title.remove();
    paragraph.remove();
    startup.remove();
    setup();
};

function setup(){
    for ( var i= 0; i<4; i++){
        var Ans= document.createElement("button");
        Ans.setAttribute("class", "btn btn-outline-primary col p-4 mb-4");
        Ans.setAttribute("id", i);
        position.appendChild(Ans);
   };
};

startup.addEventListener("click", begin);
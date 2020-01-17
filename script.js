var Q= document.querySelector("#Question");
var A= document.querySelector("#Answer");
var title= document.querySelector("#TemH1");
var paragraph= document.querySelector("#TemP");
var starup= document.querySelector("#TemB");

function begin(){
    event.preventDefault();
    title.remove();
    paragraph.remove();
    starup.remove();
    Quest();
};

starup.addEventListener("click", begin);
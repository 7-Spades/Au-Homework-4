var Q= document.querySelector("#Question");
var title= document.querySelector("#TemH1");
var paragraph= document.querySelector("#TemP");
var startup= document.querySelector("#TemB");
var position= document.querySelector("#choice");
var Timer= document.querySelector("#timer");
var Contain= document.querySelector("#jumbo");
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
    Q.setAttribute("data-Q3", Questionare[2]);
    Q.setAttribute("data-Number", "first");
    Contain.setAttribute("class", "container jumbotron");
    for ( var i= 0; i<4; i++){
        var Ans= document.createElement("button");
        Ans.addEventListener("click", text);
        Ans.setAttribute("class", "btn btn-outline-primary col-4 mr-3 p-3 mb-4");
        Ans.setAttribute("id", i);
        Ans.setAttribute("data-A1", DataA[i]);
        Ans.setAttribute("data-A2", DataA[4+i]);
        Ans.setAttribute("data-A3", DataA[8+i]);
        position.appendChild(Ans);
       };

       let Qstate= Q.getAttribute("data-Number");

       if(Qstate=== "first"){
           Q.textContent= Q.getAttribute("data-Q1");
           Q.setAttribute("data-Number", "second");
           let btn= document.getElementsByClassName("btn");
           let i= 0;
   
           for( i= 0; i<4; i++){
               btn[i].textContent= btn[i].getAttribute("data-A1");
           };
        };
       counter();
};

function text(){

    let Qstate= Q.getAttribute("data-Number");
    let btn= document.getElementsByClassName("btn");
    let i= 0;

     if(Qstate==="second"){
            Q.textContent= Q.getAttribute("data-Q2");
            Q.setAttribute("data-Number", "third");
            for( i= 0; i<4; i++){ 
                btn[i].textContent= btn[i].getAttribute("data-A2");
            };

    } else if(Qstate=== "third"){
            Q.textContent= Q.getAttribute("data-Q3");
            Q.setAttribute("data-Number", "Forth")
            
            for( i=0; i<4; i++ ){
                btn[i].textContent= btn[i].getAttribute("data-A3");
            };

    } else if(Qstate=== "Forth"){
             Q.textContent= "Good Job!"

        };
};

secondsLeft= 60

function counter(){
    let timeIn= setInterval(function(){
        secondsLeft--;
    Timer.textContent= secondsLeft + " seconds left until quiz is over";
    },1000);

    if(secondsLeft=== 0){
        Q.textContent= "";
         document.querySelector(".btn").remove();
         let tryA= document.createElement("button");
         tryA.textContent="Try Again";
         position.appendChild(tryA);
     
     };
};



startup.addEventListener("click", begin);
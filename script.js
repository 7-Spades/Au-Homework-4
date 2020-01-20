var Q= document.querySelector("#Question");
var title= document.querySelector("#TemH1");
var paragraph= document.querySelector("#TemP");
var startup= document.querySelector("#TemB");
var position= document.querySelector("#choice");
var Timer= document.querySelector("#timer");
var Contain= document.querySelector("#jumbo");
var Fun= document.querySelector("#point");
var Questionare= ["Who was the first president of the United States?", "When was the Louisiana Purchase bought?", "In what year did U.S Civil War start?", "When did Texas declare its independence?"];
var DataA=["James Adam", "George Washinton", "Benjamin Franklin", "Thomas Jefferson", "1776", "1803", "1812", "1789", "1847", "1851", "1861", "1862", "1799", "1822", "1812", "1836"];

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
    Q.setAttribute("data-Q4", Questionare[3]);
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
        Ans.setAttribute("data-A4", DataA[12+i]);
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

    Astate();

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

        } else if(Qstate === "Forth"){
            Q.textContent= Q.getAttribute("data-Q4");
            Q.setAttribute("data-Number", "Fifth");
            for( i=0; i<4; i++ ){
                btn[i].textContent= btn[i].getAttribute("data-A4");
            };

        } else if(Qstate=== "Fifth"){
             var Rec= document.querySelector("#Real");
             Q.textContent="Congradulations your current score is " + x;
             position.remove();
             document.querySelector("#point").remove();
             var Tag= document.createElement("form");
             var Name= document.createElement("input");
             var Comitter= document.createElement("input")
             Name.setAttribute("type", "text");
             Name.setAttribute("placeholder", "First and Last Name");
             Comitter.setAttribute("type", "submit");
             Comitter.setAttribute("id", "bun");
             Comitter.textContent="submit name";
             Rec.appendChild(Name);
             Rec.appendChild(Comitter);
             var sumb= document.querySelector("#bun");
             sumb.addEventListener("click", function(event){
                localStorage.setItem("Name", Name.value);
                localStorage.setItem("Score", x.value);
                document.reload();
             });
             

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

var x= 0;

function Astate(){
    let Check= event.target

    if(Check.textContent === "George Washinton"){
        console.log("Correct");
        Fun.textContent="Correct!";
        x= 25;
    } else if(Check.textContent === "1803"){
        console.log("Correct");
        Fun.textContent="Correct!";
        x= 50;
    }else if(Check.textContent === "1861"){
        console.log("Correct");
        Fun.textContent="Correct!";
        x=75;
    } else if(Check.textContent === "1836"){
        console.log("Correct");
        Fun.textContent="Correct";
        x= 100;
    } else{
        console.log("wrong");
        Fun.textContent="Wrong!";
        
    };
    console.log(x);

};

startup.addEventListener("click", begin);
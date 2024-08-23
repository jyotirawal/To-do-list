let search = document.getElementById("input-box");
let btn = document.getElementsByClassName("add");
let list = document.getElementById("list-container");

function addtask(){
    if(search.value == " "){
alert("please write here")
    }
    else{
        let li = document.createElement("li");
        li.innerText = search.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerText="Delete";
        li.appendChild(span);
    }
    search.value = " "
};

list.addEventListener("click", (e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
   
 else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
});



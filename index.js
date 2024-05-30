/* 新增代辦事項的按鈕*/
let addtaskbtn = document.getElementById("addtaskbtn");
/* 欲新增代辦事項的div 待辦事項增加的地方*/
let todotask=document.getElementById("todotask");
/* 欲新增代辦事項的input值*/
let newTask=document.getElementById("newtask");


addtaskbtn.addEventListener('click',function(){


    var paragraph = document.createElement("p")

    paragraph.innerText = newtask.value;

if (newtask.value===""){
 alert(" You need to type something ")
}


else{

   /* 透過 appendChild() 方法，可以將指定的 childNode節點，
   加入到 Node 父容器節點的末端*/

    todotask.appendChild(paragraph);
    /*幫新增的newtask增加class*/
    paragraph.classList.add("paragraphstyling");
    newtask.value="";

    }

    paragraph.addEventListener('click',function(){

        paragraph.style.textDecoration ="line-through"
        paragraph.style.color ="red"

    })


    paragraph.addEventListener('dblclick',function(){
        todotask.removeChild(paragraph);

    }
    )

    
})




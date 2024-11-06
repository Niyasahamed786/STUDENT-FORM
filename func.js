var names=document.getElementById("name")
var maincontainer=document.getElementById("main-container")
var ages=document.getElementById("age")
var genders=document.getElementById("gender")
var courses=document.getElementById("course")
var emails=document.getElementById("email")
var savebtn=document.querySelector(".save")
var topcontainer=document.querySelector(".top")

savebtn.addEventListener("click",function(event){
    event.preventDefault()
 
   var trow=document.createElement("tr")
   trow.innerHTML=`<td><h3>${names.value}</h3></td>
                <td><h3>${ages.value}</h3></td>
                <td><h3>${courses.value}</h3></td>
                <td><h3>${genders.value}</h3></td>
                
              <td>  <button id="stom" class="deletebtn" onclick="stoms(event)"><i class="fa-solid fa-trash"></i></button></td>`
                maincontainer.append(trow)
                emails.value='';
                names.value='';
                ages.value='';
                genders.value='';
                courses.value='';
              
              
})


function stoms(event){
    event.preventDefault()
    if(!event.target.classList.contains("deletebtn")){
        return;
    }
  
    const btn = event.target;
    btn.closest("tr").remove();
}



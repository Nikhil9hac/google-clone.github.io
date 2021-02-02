let container2=document.querySelector('.container2');
let textarea=document.getElementById('newtextarea');
let textarea1=document.getElementById('textarea1');
const btn=document.getElementById('mybtn1');
// let card=document.createElement('div');


function show(){
    let title=localStorage.getItem('Title');
        if (title==null) {
            titleObj=[];
        } else {
            titleObj=JSON.parse(title)
        }
    let notes=localStorage.getItem('Notes');
        if (notes==null) {
            notesObj=[];
        } else {
            notesObj=JSON.parse(notes);
        }
        let card=""
    notesObj.forEach((element,index) => {
        card+=`
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title target text-center"></h5>
          <div id="Icon" onclick="deleteNote(this.id)"><i class="fa fa-trash " aria-hidden="true"></i></div>
          <p class="card-text">${element}</p>
          <button id=${index} class="btn btn-primary" onclick="deleteNote(this.id)">Delete</button>
        </div>
      </div>
        `
    });
    if (notesObj.length!=0) {
        container2.innerHTML=card;
    } else {
        container2.innerHTML=`<b>Noting to show here`;
    }
    let cardHeader=document.getElementsByClassName('target');
    titleObj.forEach((element,index)=>{
        cardHeader[index].innerHTML=`<u>${element}</u>`
    })
}


function deleteNote(index){
    console.log(index);
    let title=localStorage.getItem('Title');
        if (title==null) {
            titleObj=[];
        } else {
            titleObj=JSON.parse(title)
        }
    titleObj.splice(index,1)
    localStorage.setItem('Title',JSON.stringify(titleObj));
    let notes=localStorage.getItem('Notes');
        if (notes==null) {
            notesObj=[];
        } else {
            notesObj=JSON.parse(notes);
        }
    notesObj.splice(index,1);
    localStorage.setItem('Notes',JSON.stringify(notesObj));
    show();
}


btn.addEventListener("click",()=>{
    if (textarea.value==""||textarea1.value=="") {
        alert('Please fill title and notes correctly');
    } else {
        let title=localStorage.getItem('Title');
        let notes=localStorage.getItem('Notes');
        if (title==null) {
            titleObj=[];
        } else {
            titleObj=JSON.parse(title)
        }
        titleObj.push(textarea.value);
        localStorage.setItem("Title",JSON.stringify(titleObj));
        if (notes==null) {
            notesObj=[];
        } else {
            notesObj=JSON.parse(notes);
        }
        notesObj.push(textarea1.value);
        localStorage.setItem('Notes',JSON.stringify(notesObj));
    }
    textarea.value="";
    textarea1.value="";
    show();
})

show();
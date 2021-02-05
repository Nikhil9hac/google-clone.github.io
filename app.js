// obtaining Element
const noteTargetArea=document.querySelector('.container2');
const btn=document.getElementById('mybtn1');
let deleteBtn=document.getElementById('btn');
const titleArea=document.getElementById('textarea1');
const noteArea=document.getElementById('textarea2');
const userName=document.querySelector('.userName')


// #defining function
const getItemStorage=(type)=>{
    if (type=='T') {
        let title=localStorage.getItem('Title');
        if (title==null) {
            titleObj=[];
            return titleObj
        } else {
            titleObj=JSON.parse(title);
            return titleObj   
        }
    } else {
        let note=localStorage.getItem('Note');
        if (note==null) {
            noteObj=[];
            return noteObj;
        } else {
            noteObj=JSON.parse(note);
            return noteObj;   
        }
    }
}

const setItemStorage=(text,type)=>{
    if (type=="T") {
        const titleArray=getItemStorage(type);
        titleArray.push(text);
        localStorage.setItem('Title',JSON.stringify(titleArray));
    } 
    else if(type=='N'){
        const noteArray=getItemStorage(type);
        noteArray.push(text)
        localStorage.setItem('Note',JSON.stringify(noteArray));
    }
}

const deleteCard=(index)=>{
    let titleArray=getItemStorage('T');
    let noteArray=getItemStorage('N');
    titleArray.splice(index,1);
    noteArray.splice(index,1);
    localStorage.setItem('Title',JSON.stringify(titleArray));
    localStorage.setItem('Note',JSON.stringify(noteArray));
    show();

}

const show=()=>{
    // const htmlEle=document.createElement('div');
    let htmlEle="";
        // htmlEle.setAttribute('style','display:inline-block;');
        let noteMaterial=getItemStorage('N');
        if (noteMaterial.length) {
            noteMaterial.forEach((element,index) => {
                htmlEle+=`<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">card1</h5>
                  <div id=icon>
                  <i class="fa fa-pencil text-center" aria-hidden="true"></i>
                  <i class="fa fa-trash text-center" aria-hidden="true" onclick="deleteCard(this.id)"></i>
                  </div>
                  <p class="card-text">${element}</p>
                  <button id="${index}" class="btn btn-primary secondarybtn" onclick="deleteCard(this.id)">Delete</button>
                </div>
              </div>`
            noteTargetArea.innerHTML=htmlEle;
});
    let titleMaterial=getItemStorage('T');
    let cardTitle=document.getElementsByClassName('card-title');
    titleMaterial.forEach((element,index)=>{
        cardTitle[index].innerHTML=element;
    })
}
else{
    noteTargetArea.innerHTML=`<b>Nothing to show here`;
}
}
    

show();
// Event addEventListener
let storageUser=localStorage.getItem('Name');
console.log(storageUser);
if (storageUser==null) {
    let name=prompt('Enter your name');
    localStorage.setItem('Name',name);
    userName.innerHTML=`<b><u>${storageUser}</u><b>`
}
else{
    userName.innerHTML=`<b><u>${storageUser}</u><b>`
}


btn.addEventListener('click',()=>{
    if (titleArea.value==""||noteArea.value=="") {
        alert('Please Fill Title and Area correctly');
    } else {
          setItemStorage(titleArea.value,"T");
          setItemStorage(noteArea.value,"N");
          show();
            }
});
         // }
// })

let DragArea=document.querySelector(".appbody");
 let Dragtext=DragArea.querySelector("h3");
let myButton=DragArea.querySelector("button");
let input=DragArea.querySelector("input");


let myFile;

myButton.onclick=()=>{
    input.click()
}
input.addEventListener("change",function(){
    myFile=this.files[0];
    DragArea.classList.add("active");
    Showme();

})
DragArea.addEventListener("dragover",(event)=>{

    event.preventDefault();
    DragArea.classList.add("active");
   Dragtext.textContent="Relase to upload file ";
})

DragArea.addEventListener("dragleave", ()=>{
    DragArea.classList.remove("active");
    Dragtext.textContent="Drag & Drop ";
});
DragArea.addEventListener("drop",(event)=>{
    event.preventDefault();
    myFile=event.dataTransfer.files[0];
    Showme();


})



function Showme(){
    let filetype=myFile.type;
    let ValidEx= ["image/jpeg","image/jpg","image/png"];
    if(ValidEx.includes(filetype)){
        let fileReader= new FileReader();
        fileReader.onload=() =>{
            let imageUrl= fileReader.result;
            let img=`<img src="${imageUrl}" alt="">`
            DragArea.innerHTML= img
        }
        fileReader.readAsDataURL(myFile);

    }else{
        alert("this file is not valid ");
        DragArea.classList.remove("active");
        Dragtext.textContent="Drag & Drop ";
    }
}
   
let menuIcon= document.querySelector(".toggle-menu");
let menu=document.querySelector(".links");

menuIcon.addEventListener("click",function(){
 if(menu.style.display==="flex"){
menu.style.display="none";
 menu.classList.remove("menu_down");
 menu.classList.add("menu_up");
}
else {
 menu.classList.remove("menu_up");
 menu.classList.add("menu_down");
 menu.style.display="flex";
}

} )
if(localStorage.getItem("backgroundOnOff")===null){
localStorage.setItem("backgroundOnOff",`
      <div class="on change-off-on-btn active">on</div>
      <div class="off change-off-on-btn">off</div>\n      `);}



// start save colors data
let saveColorData=function(){
  localStorage.setItem("colorsData",document.querySelector(".color-box").innerHTML);
}
let loadColorData=function(){
  if((localStorage.getItem("local-color")===null) || (localStorage.getItem("local-back-color")===null)){
  document.documentElement.style.setProperty("--second_color","#1e3888");
     document.documentElement.style.setProperty("--back-color","#91a7ec");      
  }
  else{
  document.documentElement.style.setProperty("--second_color",localStorage.getItem("local-color"));
   document.documentElement.style.setProperty("--back-color",localStorage.getItem("local-back-color"))
  document.querySelector(".color-box").innerHTML=localStorage.getItem("colorsData");
}}

// end save colors data

// start load backroung changing data 
loadColorData();
// end load backroung changing data

// start save backroung changing data 

let saveBackgroundData=function(){
  localStorage.setItem("backgroundOnOff",document.querySelector(".change-off-on-inside").innerHTML);
}
let loadBackgroundData=function(){
 document.querySelector(".change-off-on-inside").innerHTML = localStorage.getItem("backgroundOnOff");
}

// end save backroung changing data 

// start load backroung changing data 
loadBackgroundData();
// end load backroung changing data 





// start cahnging the backgroung
let localBackgroundImage;
 if(localBackgroundImage===null){
  localBackgroundImage=localStorage.setItem("localBackgroundImage",`url("../images/le-louvi.jpg")`);
 }
let landing=document.querySelector(".landing");
let myImages=["billiard-table.jpg","football-game.jpg","le-louvi.jpg","old-door.jpg","rose.jpg"];

 let changingBackground=setInterval(()=>{
 let random=Math.floor(Math.random() * 5);
 landing.style.background= `url("../images/${myImages[random]}")`;
 if(localBackgroundImage===null){
  localBackgroundImage=localStorage.setItem("localBackgroundImage",`url("../images/le-louvi.jpg")`);
 }
 else{
 localBackgroundImage=localStorage.setItem("localBackgroundImage",`url("../images/${myImages[random]}")`);}
 landing.style.backgroundSize="cover";
  landing.style.backgroundPosition="cetner";

}

,8000)


//  if(localBackgroundImage===null){
//   localBackgroundImage=localStorage.setItem("localBackgroundImage",`url("../images/le-louvi.jpg")`);
//  }
 
//  else{
//  localBackgroundImage=localStorage.setItem("localBackgroundImage",`url("../images/${myImages[random]}")`);}
 
// end cahnging the backgroung


// start check on or off
let checkOnOff=function(){
  if(localStorage.getItem("backgroundOnOff").split("").join("") ===`
      <div class="on change-off-on-btn">on</div>
      <div class="off change-off-on-btn active">off</div>\n      `.split("").join("")){
        clearInterval(changingBackground);
      }
}
checkOnOff();

// end check on or off


// start the setting menu

let settingIcon=document.querySelector(".setting-box .fa-gear");
let settingBox=document.querySelector(".setting-box");
let faGear=document.querySelector(".fa-gear");

// settingIcon.addEventListener("click",()=>{
//  if(settingBox.classList.contains("show")){
// settingBox.classList.remove("show");
// settingBox.classList.add("hide");
// faGear.classList.remove("fa-spin")  
//  }
// else if(!(settingBox.classList.contains("show"))){
// settingBox.classList.remove("hide");
// settingBox.classList.add("show");  
// faGear.classList.add("fa-spin")  
//  }
// // settingBox.classList.toggle("show");
// })

settingIcon.addEventListener("click",()=>{
settingBox.classList.toggle("show");
faGear.classList.toggle("fa-spin");
// settingBox.classList.toggle("show");
})

// end the setting menu

// start change-off-on-btns

let changeOffOnBtns=document.querySelectorAll(".change-off-on-btn");


changeOffOnBtns.forEach(e=>{

e.addEventListener("click",e=>{
  if(e.target.classList.contains("off")){
  clearInterval(changingBackground);
 }
 else if(e.target.classList.contains("on")){
 changingBackground=setInterval(()=>{
 random=Math.floor(Math.random() * 5);
 landing.style.background= `url("../images/${myImages[random]}")`;
 landing.style.backgroundSize="cover";
 landing.style.backgroundPosition="cetner";
}
,8000)
setInterval(changingBackground);
 }
 e.target.parentElement.querySelectorAll(".change-off-on-btn").forEach(ele =>{
  ele.classList.remove("active");
 })
 
 e.target.classList.add("active");

saveBackgroundData();});

})

// end change-off-on-btns


// start change colors

// let localColor;
// let localBackColor;
// if(localColor===null || localBackColor===null){
// localColor=localStorage.setItem("local-color","#1e3888");
// localBackColor=localStorage.setItem("local-back-color","#91a7ec");
// }

let localColor=localStorage.setItem("local-color",localStorage.getItem("local-color"));
let localBackColor=localStorage.setItem("local-back-color",localStorage.getItem("local-back-color"));


let colorBox=document.querySelector(".color-box");
let colorList=document.querySelector(".color-list");
let colors=document.querySelectorAll(".color");

colors.forEach(e=>{
  e.addEventListener("click",e=>{
    e.target.parentElement.querySelectorAll(".color").forEach(e=>{e.classList.remove("active");
    saveColorData();
  });
  e.target.classList.add("active");
  document.documentElement.style.setProperty("--second_color",e.target.dataset.color);
    document.documentElement.style.setProperty("--back-color",e.target.querySelector(".color-in").dataset.color);

document.documentElement.style.setProperty("--second_color",e.target.dataset.color);
document.documentElement.style.setProperty("--back-color",e.target.querySelector(".color-in").dataset.color);    

localColor=localStorage.setItem("local-color",document.documentElement.style.getPropertyValue("--second_color"));
localBackColor=localStorage.setItem("local-back-color",document.documentElement.style.getPropertyValue("--back-color"));

saveColorData();})
localColor=localStorage.setItem("local-color",localStorage.getItem("local-color"));
localBackColor=localStorage.setItem("local-back-color",localStorage.getItem("local-back-color"));
})


// end change colors

// start backgroung save in local storage

// let stoppedBackground=document.querySelector(".landing");
// console.log(stoppedBackground.style.width);
// let stoppedBackgroundValue=window.getComputedStyle(stoppedBackground,null).getPropertyValue("background-image");
// console.log(stoppedBackgroundValue);
// end backgroung save in local storage



 landing.style.background=localStorage.getItem("localBackgroundImage");
  landing.style.backgroundSize="cover";


// start fill bar on scroll

window.onscroll=function(){
let bars=document.querySelectorAll(".bar");
let skillsSection=document.querySelector(".skills"); 
let skillsSectionHeight=skillsSection.offsetHeight;
let skillsSectionTop=skillsSection.offsetTop;
let windowHeight=this.innerHeight;
let windowScrollTop=this.pageYOffset;
  // console.log("skillsSectionhegiht "+skillsSectionHeight);
  // console.log("skillsSectionTop "+skillsSectionTop);
  // console.log(skillsSectionTop-windowHeight);
  // console.log(windowHeight);
  // console.log("windowScrollTop"+windowScrollTop);

  if(windowScrollTop>(skillsSectionTop-windowHeight)){
    let progressBar=document.querySelectorAll(".progress-bar");
    progressBar.forEach(ele =>{
      ele.style.width=ele.dataset.progress;
      // ele.setAttribute('data-before', 'anything');
    })
  }

}
// let after =document.querySelectorAll(".skills .container .full-bar .progress-bar::after");
// console.log(progressBar);
// progressBar.setAttribute('data-before', 'anything');



// end fill bar on scroll


// start pop up
let allImages=document.querySelectorAll(".gallery .container img");

allImages.forEach(e=>{
  e.addEventListener("click",function(e){
    
    let overlayImg=document.createElement("div");
    overlayImg.className = "overlayImg";
    document.body.append(overlayImg);

    let overlayPop=document.createElement("div");
    overlayPop.className = "overlayPop";

    let popImg=document.createElement("img");
    popImg.className="popImg";

    popImg.src=e.target.src;

    overlayPop.appendChild(popImg);

    document.body.appendChild(overlayPop);

    let X =document.createElement("span");
    X.className="X";

    let XText=document.createTextNode("X");
    X.appendChild(XText)
    overlayImg.appendChild(X);

   X.addEventListener("click",function(){
  overlayImg.remove();
  overlayPop.remove();
 })

  })

})



// end pop up


// start finalize menu toggle
// menu.stopPropagation();
 window.addEventListener("click",function(e){
  if(e.target !== menuIcon && e.target !== menu){
  if(menu.classList.contains("menu_down")){

    menu.classList.remove("menu_down");
    menu.classList.add("menu_up");
        menu.style.display="none";
    // console.log("yes");
  }
  }
 })

// end finalize menu toggle
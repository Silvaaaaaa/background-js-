// const canvas = document.getElementById("canvas1"); 
// const ctx =  canvas.getContext("2d")  

// const canvas_width = canvas.width = 600   ; 
// const canvas_height = canvas.height = 600  ;

// const platerImage = new Image()
// platerImage.src = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png';
// const spritwidth = 575 ; 
// const spritHeight = 523 ; 
// let gameframe = 0 ;
// let staggerframes =5 ; 
// const spritiinmation = [
//     "idle" = {loc:[
//         {x : 0 , y : 0 } ,
//         {x : 575 , y : 0} ,
//         {x : 1150  , y : 0} ,
//         {x : 1725 , y : 0} ,
//         {x : 2300 , y : 0} ,
//         {x : 2875 , y : 0} ,
//         {x : 3450 , y : 0} ,
//     ]},
//     "run" = {loc:
//         [
//         {x : 0 , y : 0 } ,
//         {x : 575 , y : 0} ,
//         {x : 1150  , y : 0} ,
//         {x : 1725 , y : 0} ,
//         {x : 2300 , y : 0} ,
//         {x : 2875 , y : 0} ,
//         {x : 3450 , y : 0} ,
//     ]} , 
//     "jump" = {loc:[
//         {x : 0 , y : 0 } ,
//         {x : 575 , y : 0} ,
//         {x : 1150  , y : 0} ,
//         {x : 1725 , y : 0} ,
//         {x : 2300 , y : 0} ,
//         {x : 2875 , y : 0} ,
//         {x : 3450 , y : 0} ,
//     ]}

// ];
// const animationstates = [
//     {
//         name : 'idle' , 
//         frames : 7 , 
//     } ,
//     {
//         name : 'jump' , 
//         frames : 7 , 
//     }
// ];
// animationstates.forEach((state , index) =>{
//     let frames = [
//         loc = [],
//     ]
//     for(let j = 0 ; j < animationstates.frames ; j++ ){
//      let  positionx = j * spritwidth; 
//      let positionY = index * spritHeight ;
//      frames.loc.push({x : positionx , y : positionY});
//     }   
//     spritiinmation[state.name] = frames ;
// })  

// function animate(){
//     ctx.clearRect(0 , 0 , canvas_width , canvas_height );   // position x ,y 
//     let position = Math.floor(gameframe / staggerframes) % spritiinmation["idle"].loc.length ; // 1 
//    let framex = position * spritwidth ; 
//    let framey = spritiinmation["idle"].loc[position].y
//     ctx.drawImage(platerImage , framex ,framey,spritwidth , spritHeight , 0, 0 , spritwidth , spritHeight)
   
    
//     gameframe++ ; 
//     requestAnimationFrame(animate); 
// }
// animate();




 const canvas = document.getElementById("canvas1"); 
 const ctx =  canvas.getContext("2d")
 
const canvas_width = canvas.width = 800   ; 
const canvas_height = canvas.height = 700  ;
let gamespeed = 5 ; 

let slider = document.querySelector("#slider");
slider.value  = gamespeed ; 
let showGamespeed = document.querySelector("#showGamespeed");
slider.addEventListener("change" , function(e){
    gamespeed = e.target.value ;
    showGamespeed.innerHTML = e.target.value;
})

const backgroundlayer1 = new Image();
backgroundlayer1.src ="layer-1.png" ;

const backgroundlayer2 = new Image();
backgroundlayer2.src ="layer-2.png" ;

const backgroundlayer3= new Image();
backgroundlayer3.src ="layer-3.png" ;

const backgroundlayer4 = new Image();
backgroundlayer4.src ="layer-4.png" ;

const backgroundlayer5 = new Image();
backgroundlayer5.src ="layer-5.png" ;
 

class layer{
   constructor(image , speedmodifier){
       this.x = 0  ;  
       this.y = 0  ;  
       this.width = 2400  ;
       this.height = 700 ; 
       this.x2 = this.width ; 
       this.image = image ; 
       this.speedmodifier = speedmodifier ; 
       this.speed = gamespeed * this.speedmodifier; 
   }
   update(){
    this.speed = gamespeed * this.speedmodifier; 
    if(this.x <= -this.width){
        this.x = this.width + this.x2 - this.speed ; 
    }
    if(this.x2 <= -this.width){
        this.x2 = this.width + this.x - this.speed ; 
    }
    this.x = Math.floor(this.x - this.speed)
    this.x2 = Math.floor(this.x2 - this.speed)
   }
   draw(){
    ctx.drawImage(this.image , this.x, this.y , this.width , this.height);
    ctx.drawImage(this.image , this.x2, this.y , this.width , this.height);
   }
}   
const layer1 = new layer(backgroundlayer1 , .2)
const layer2 = new layer(backgroundlayer2 , .4)
const layer3 = new layer(backgroundlayer3 , .6)
const layer4 = new layer(backgroundlayer4 , .8)
const layer5 = new layer(backgroundlayer5 ,  1)

const gameobject = [layer1 , layer2 , layer3, layer4 , layer5]; 
function animate(){
    ctx.clearRect(0 , 0 , canvas_width , canvas_height)
   gameobject.forEach(object =>{
    object.update();
    object.draw();
   }) 
  
 
    requestAnimationFrame(animate);
}
animate();























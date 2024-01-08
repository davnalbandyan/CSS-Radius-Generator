"use strict"


let topLeftAngle = document.getElementById("tlAngle");
let topLeftAngleValue = document.getElementById("tlAngleText");

let topRightAngle = document.getElementById("trAngle");
let topRighttAngleValue = document.getElementById("trAngleText");

let bottomRightAngle = document.getElementById("brAngle");
let bottomRightAnglValue = document.getElementById("brAngleText")

let bottomLeftAngle = document.getElementById("blAngle");
let bottomLeftAngleValue = document.getElementById("blAngleText")

let block = document.getElementById("block")


 topLeftAngle.addEventListener("input",()=>{
    topLeftAngleValue.value = topLeftAngle.value + "px";
    block.style.cssText = `border-top-left-radius: ${topLeftAngle.value}px;`;
    
    updateBorderRadius();
    
});

topRightAngle.addEventListener("input",()=>{
    topRighttAngleValue.value = topRightAngle.value + "px";
    block.style.cssText = `border-top-right-radius: ${topRightAngle.value}px`
    updateBorderRadius();
})

bottomRightAngle.addEventListener("input",()=>{
    bottomRightAnglValue.value = bottomRightAngle.value + "px";
    block.style.cssText = `border-bottom-left-radius: ${bottomRightAngle.value}px;`;
    updateBorderRadius();
    
});

bottomLeftAngle.addEventListener("input",()=>{
    bottomLeftAngleValue.value = bottomLeftAngle.value + "px";
    block.style.cssText = `border-bottom-right-radius: ${bottomLeftAngle.value}px;`;
    updateBorderRadius();
    
});

topLeftAngleValue.addEventListener("input",()=>{
    let value = parseInt(topLeftAngleValue.value)
    if(value >= 0 && value <= 100){
        topLeftAngle.value  = value
    }
    updateBorderRadius()
})

topRighttAngleValue.addEventListener("input",()=>{
    let value = parseInt(topRighttAngleValue.value);
    if(value >= 0 && value <=  100){
        topRightAngle.value = value
    }
    updateBorderRadius()
})


bottomRightAnglValue.addEventListener("input",()=>{
    let value = parseInt(bottomRightAnglValue.value)
    if(value >= 0 && value <= 100){
        bottomRightAngle.value  = value
    }
    updateBorderRadius()
})

bottomLeftAngleValue.addEventListener("input",()=>{
    let value = parseInt(bottomLeftAngleValue.value)
    if(value >= 0 && value <= 100){
        bottomLeftAngle.value  = value
    }
    updateBorderRadius()
})






function updateBorderRadius() {
    block.style.cssText = `border-top-left-radius: ${topLeftAngle.value}px;
                          border-top-right-radius: ${topRightAngle.value}px;
                          border-bottom-left-radius: ${bottomLeftAngle.value}px;
                          border-bottom-right-radius: ${bottomRightAngle.value}px;`;
}




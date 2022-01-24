let stop= document.getElementById('stop')
stop.onclick=()=>{
    
    alert('bhag bsdk! \n stop lika hai fir bhi daba raha hai')
}

let look= document.getElementById('look')
let h2= document.getElementById('h2')
look.onclick=()=>{
    h2.style.color= 'black'
}

let go= document.getElementById('go')
go.onclick=()=>{
    
    h2.style.transform= 'rotate(210deg)'
    PageTransitionEvent.transform= '2s ease'
}

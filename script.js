const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () =>{
    //console.log(currentActive)
    currentActive++
    if (currentActive>circles.length){
        currentActive = circles.length
    }

    update()
})
prev.addEventListener('click', () =>{
    currentActive--
    if (currentActive < 1){
        currentActive = 1
    }
    update()
})

function update(){
    console.log(currentActive)
    circles.forEach((circle, index) =>{
        if (index<currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    //console.log((actives.length/circles.length)*100)
    progress.style.width = ((actives.length -1)/(circles.length-1)*100) +'%'
    //console.log(currentActive)
    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive === 4){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}
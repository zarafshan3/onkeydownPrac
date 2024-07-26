function chCharacter(){
       let value = document.getElementById('select_characters').value
       console.log(value)

       document.getElementById('imagech').src = `gifs/${value}`
}


var top_side = 10
var left_side = 10
var pic = document.getElementById('pic')


onkeydown = (e) => {
    
    if (e.key =="ArrowDown"){
        pic.style.top = top_side+"px"
        top_side += 10
    }
    if (e.key == "ArrowUp") {
        pic.style.top = left_side + "px"
        top_side -= 10
    }
    
    if (e.key == "ArrowLeft") {
        pic.style.left = left_side + "px"
        left_side -= 10

    }

    if (e.key == "ArrowRight") {
        pic.style.left = left_side + "px"
        left_side += 10

    }

}


 // ArrowUp
    // ArrowDown
    // ArrowRight
    // ArrowLeft
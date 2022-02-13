function setup(){
canvas=createCanvas(640,480)
canvas.center()
video= createCapture(VIDEO)
video.hide()
}

function draw(){
    image(video,45,45,560,400)
    fill("#99BF1D")
    stroke("#99BF1D")
    rect(45, 420, 560, 40)
    rect(45, 25, 560, 40)
    rect(580, 40, 40, 400)
    rect(25, 40, 40, 400)
    fill("#37C49F")
    stroke("#37C49F")
    circle(45, 45, 80)
    circle(600, 45, 80)
    circle(600, 440, 80)
    circle(45, 440, 80)
   
}

function take_snapshot(){
    save("photo.png")
}


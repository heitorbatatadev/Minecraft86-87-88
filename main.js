var canvas=new fabric.Canvas("myCanvas")
var blockImg_W=30;
var blockImg_H=30;
var playerX=10;
var playerY=10;
var playerOBJ= ""

function playerUPD () {
    fabric.Image.fromURL ("player.png",function (Img) {
        playerOBJ=Img;
        playerOBJ.scaleToWidth(150);
        playerOBJ.scaleToHeight(140);     
        playerOBJ.set({
            top:playerY,
            left:playerX
        })   
        canvas.add(playerOBJ)
    })
}

function NewImg (getImage) {
    fabric.Image.fromURL (getImage,function (Img) {
        blockOBJ=Img;
        blockOBJ.scaleToWidth(blockImg_W);
        blockOBJ.scaleToHeight(blockImg_H);     
        blockOBJ.set({
            top:playerY,
            left:playerX
        })   
        canvas.add(blockOBJ)
    })
}
window.addEventListener("keydown",myKeydown)

function myKeydown(e) {
    keyPressed=e.keyCode;
    if (e.shiftKey==true && keyPressed=="80") {
        blockImg_W=blockImg_W-10
        blockImg_H=blockImg_H-10
        document.getElementById("largura_batata").innerHTML=blockImg_W
        document.getElementById("Altura_batata").innerHTML=blockImg_H
    }

    if (e.shiftKey==true && keyPressed=="77") {
        blockImg_W=blockImg_W+10
        blockImg_H=blockImg_H+10
        document.getElementById("largura_batata").innerHTML=blockImg_W
        document.getElementById("Altura_batata").innerHTML=blockImg_H
    }
    if (keyPressed=="38") {
        up()
    }
    if (keyPressed=="40") {
        down()
    }
    if (keyPressed=="37") {
        left()
    }
    if (keyPressed=="39") {
        right()
    }
    if (keyPressed=="67") {
        NewImg("cloud.jpg")
    }
    if (keyPressed=="68") {
        NewImg("dark_green.png")
    }
    if (keyPressed=="71") {
        NewImg("ground.png")
    }
    if (keyPressed=="76") {
        NewImg("light_green.png")
    }
    if (keyPressed=="82") {
        NewImg("roof.jpg")
    }
    if (keyPressed=="84") {
        NewImg("trunk.jpg")
    }
    if (keyPressed=="85") {
        NewImg("unique.png")
    }
    if (keyPressed=="87") {
        NewImg("wall.jpg")
    }
    if (keyPressed=="89") {
        NewImg("yellow_wall.png")
    }
}
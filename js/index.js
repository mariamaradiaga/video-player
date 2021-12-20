   const $video = document.querySelector("#video") 
   const $play = document.querySelector("#play") 
   const $pause = document.querySelector("#pause") 
   const $backward= document.querySelector("#backward")
   const $forward= document.querySelector("#forward")


   $play.addEventListener('click',handleplay)
   $pause.addEventListener('click',handlepause)

   function handleplay(){
       $video.play()
       $play.hidden=true 
       $pause.hidden=false
   }

   function handlepause(){
       $video.pause()
       $play.hidden=false
       $pause.hidden=true
   }
   $backward.addEventListener('click', handlebackward)
   $forward.addEventListener('click', handleforward)

   function handlebackward(){
       $video.currentTime=$video.currentTime-10
       //$video.currentTime-=10 es lo mismo que lo de arriba, diferente modo de escribirlo
       
   }
   function handleforward(){
    $video.currentTime=$video.currentTime+10
}

const $progress=document.querySelector('#progress')
$video.addEventListener('loadedmetadata',handleloaded)
$video.addEventListener('timeupdate',handletimeupdate)


function handleloaded(){
$progress.max=$video.duration
}

function handletimeupdate(){
    $progress.value=$video.currentTime
}

$progress.addEventListener('input',handleinput)

function handleinput(){
    $video.currentTime=$progress.value
}

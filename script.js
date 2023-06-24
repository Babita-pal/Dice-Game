game =() =>{
    makesound();
    let player1=Math.floor(Math.random()*6)+1;
    let p2=Math.floor(Math.random()*6)+1;
    document.getElementById("player1").src=`asset/${player1}.png`;
    document.getElementById("p2").src = `asset/${p2}.png`;
    if(player1>p2){
        document.querySelector("h1").textContent="🥳🏆Player 1 wins🏆🥳"
    }
    else if (player1<p2){
        document.querySelector("h1").textContent="🎉🏆Player 2 wins🏆🎉"
    }
    else{
        document.querySelector("h1").textContent="🎈Ohh 🤭!It's Draw🎈"
    }
}

function makesound(){
    let audio =new Audio("asset/sound.mp3");
    audio.play();
}
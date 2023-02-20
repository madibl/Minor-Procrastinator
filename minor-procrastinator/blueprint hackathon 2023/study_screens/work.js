//countdown

let startingMinutes = prompt("Enter how long you want to work for(in minutes): ");
let time = startingMinutes * 60;

let countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);


function updateCountdown() {
    
    if(time>=0){
        document.getElementById('yes').style.opacity = 0.0;
        document.getElementById('no').style.opacity = 0.0;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? '0' + seconds : seconds; 
    
        countdownEl.innerHTML = `${minutes} : ${seconds}`;
        time--;
        
    }
    else {
        
        stopStudy();
    }
     
}


// }
 function stopStudy() {
//     //switch elementbyid countdown to different screen
       countdownEl.innerHTML = "<p>Time's up! Did you do anything? </p>";
       document.getElementById('yes').style.opacity = 1.0;
       document.getElementById('no').style.opacity = 1.0;
       document.getElementById('yes').innerHTML = "YES 😤";
       document.getElementById('no').innerHTML = "NO 😪";
    
}

function yes() {
    countdownEl.innerHTML = "FANTASTIC😫";
    window.location.href='c:\\Users\\ltstr\\Desktop\\blueprint hackathon 2023\\study_screens\\options.html'

}

function no() {
    countdownEl.innerHTML = "please restart your study session";
    window.location.href='c:\\Users\\ltstr\\Desktop\\blueprint hackathon 2023\\themeselection.html'
}
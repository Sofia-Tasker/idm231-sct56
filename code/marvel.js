// Sofia Tasker
// Functional code for Marvel Character Horoscope 

function horoscope(day, month){ // for each set of dates, the cooresponding horoscope will be displayed
    if((month == 1 && day <= 19) || (month == 12 && day >=22)) {
        return "ironman";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "captainAmerica";
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "blackWidow";
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "thor";
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "hawkeye";
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "hulk";
    } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "vision";
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "spiderman";
    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "drStrange";
    } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "blackPanther";
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "loki";
    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "winterSoldier";
    }
}

function openModal(name){ //this function will open the model based off of the derived character name from the date input
    const audioPlayer = document.querySelector("#speakers");
    const modal = document.querySelector(`#${name}Modal`);
    modal.style.display = "block";
    audioPlayer.src = `./sounds/${name}.mp3`
    audioPlayer.play();

}

function main(name, date){ // this is the main function which handles the input logic
    const dt = new Date(date);
    const month = dt.getMonth() + 1;
    const day = dt.getDate();// ^^ this will get the correct date type

    const character = horoscope(day, month);
    openModal(character);
}

window.onload=function(){

    const soundButtons = document.querySelectorAll(".js-sound-button"); //this code is from lecture but manipulated to play sound AND display the modal
    const audioPlayer = document.querySelector("#speakers");

    soundButtons.forEach(function (individualButtonElement) {
        const audioTrackSource = individualButtonElement.getAttribute("data-audio-file");
        const modalSource = individualButtonElement.getAttribute('data-modal');
        const modal = document.getElementById(modalSource);

        const closeBtn = modal.getElementsByClassName('closeModal')[0];
        
        individualButtonElement.addEventListener("click", function () {
            modal.style.display = "block";
            audioPlayer.src = `./sounds/${audioTrackSource}`
            audioPlayer.play();
        });
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
            audioPlayer.pause();
        });
    });
};

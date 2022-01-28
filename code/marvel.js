// Sofia Tasker
// Functional code for Marvel Character Horoscope 

function horoscope(day, month){
    if((month == 1 && day >= 19) || (month == 12 && day >=22)) {
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

function page(character){
    if(character == "ironman") { 
        window.location.replace("./ironman.html"); 
    } 
    else if (character == "captainAmerica"){
        window.location.replace("./captainAmerica.html"); 
    }
    else if (character == "blackWidow"){
        window.location.replace("./blackWidow.html"); 
    }
    else if (character == "thor"){
        window.location.replace("./thor.html"); 
    }
    else if (character == "hawkeye"){
        window.location.replace("./hawkeye.html"); 
    }
    else if (character == "vision"){
        window.location.replace("./vision.html"); 
    }
    else if (character == "spiderman"){
        window.location.replace("./spiderman.html"); 
    }
    else if (character == "drStrange"){
        window.location.replace("./drStrange.html"); 
    }
    else if (character == "blackPanther"){
        window.location.replace("./blackPanther.html"); 
    }
    else if (character == "loki"){
        window.location.replace("./loki.html"); 
    }
    else if (character == "winterSoldier"){
        window.location.replace("./winterSoldier.html"); 
    }
}

function main(name, date){
    const dt = new Date(date);
    const month = dt.getMonth() + 1;
    const day = dt.getDate();

    const character = horoscope(day, month);

    console.log(name);
    console.log(character);

    page(character);
}
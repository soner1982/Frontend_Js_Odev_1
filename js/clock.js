let userSearch = prompt("Lütfen kullanıcı adınızı giriniz");
let userName = document.querySelector("#myName");

userName.innerHTML = `${userSearch}`;

if (userSearch.length>0) {
    userName.innerHTML = `${userSearch}`
} else {
    prompt("Kullanıcı adınızı girmediniz")
    location.reload();
};

let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

function clockDay () {
    let dateTime = new Date();
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    hrs = checkTime (hrs);
    min = checkTime (min);
    sec = checkTime (sec);

    document.querySelector("#myClock").innerHTML = `${hrs}: ${min}: ${sec}  ${day}`    
}

function checkTime(i) {
    if (i<10) {i="0" + i;} 
    return i;
}

setInterval(clockDay, 1000);
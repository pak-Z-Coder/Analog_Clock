let hour = document.getElementById("hour");
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let body = document.body
setInterval(() => {
    //Get date()
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    //converting current time
    hr_rotation = 30 * hr + min / 2;
    console.log(hr_rotation)
    min_rotation = 6 * min;
    console.log(min_rotation)
    sec_rotation = 6 * sec;
    console.log(sec_rotation)
    //change sec Color
    second.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    //Rotate needles
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
    // console.clear()
}, 1000);
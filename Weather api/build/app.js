// let url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=98e283ab75058424e358de906bbfe05d`

fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=11.0168445&lon=76.9558321&exclude={part}&appid=98e283ab75058424e358de906bbfe05d`)
.then(res => res.json())
.then(data => console.log(data))

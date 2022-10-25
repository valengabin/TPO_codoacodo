var button= document.querySelector('.button')
var inputValue= document.querySelector('.inputValue')
var name= document.querySelector('.name');
var description= document.querySelector('.description');
var temp= document.querySelector('.temp');

button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=797fed1193d485af22f90c544a09260d')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
    
      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - "+descValue;
      temp.innerHTML = "Temp - "+tempValue;
      input.value ="";
    
    })
    
    .catch(err => alert("Wrong city name!"));
    })

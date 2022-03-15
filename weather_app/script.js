var textSearch=document.getElementById("txtSearch");
var city=textSearch.value;
let res_city="";
let res_time="";
let res_temp="";
let res_state="";
let res_temp2="";
textSearch.addEventListener("keypress", (event)=>{
    if(event.key==="Enter"){
        city=textSearch.value;
        getData()
    }
});

// xhr.open('GET', 'http://api.icndb.com/jokes/random/', true);

// Arrow Function

function getData() {
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b6d56c633bbeeeea8c8d8466f7b49c38`)
        .then(res => res.json())
        .then(data => { 
            
            res_city=data.name+','+data.sys.country
            res_time=new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear();
            res_temp=(parseInt(data.main.temp)-273)+"°C";
            res_state=data.weather[0].description;
            res_temp2=(parseInt(data.main.temp)-273)+"°C/"+(parseInt(data.main.temp)-273)+"°C";
            // console.log(res_city+","+res_time+","+res_temp+","+res_state+","+res_temp2);           
            document.getElementById("city").innerText=res_city;
            document.getElementById("time").innerText=res_time;
            document.getElementById("temp").innerText=res_temp;
            document.getElementById("sta").innerText=res_state;
            document.getElementById("temp2").innerText=res_temp2;
         })
        .catch(err => {
            console.log(err); 
            alert("You have entered an unknown City name. Please try another one")
    })   
}
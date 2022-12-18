body =document.getElementsByClassName("card-body")[0];
 document.getElementsByClassName('txt0')[0].innerHTML='';
 document.getElementsByClassName('txt1')[0].innerHTML='';
 body.style.display = 'none';
 function validate() {


    getLocation()

    function getLocation() {

            navigator.geolocation.getCurrentPosition(positionResolve,positionReject);
            function positionResolve(position) {

                console.log( "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);

            btn = document.getElementById('submit');
            body.style.display = 'block';       
            btn.style.display = 'none'
      map = document.getElementsByClassName('image')[0];
      map.innerHTML = `<iframe src="https://maps.google.com?q=+${position.coords.latitude},+${position.coords.longitude}&amp;output=embed" class="w-100" height="200" allow="geolocation" loading="lazy"></iframe>`
     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=09fb2959afa26c264954d38f7af40f67`                          

async function getData(url) {

const response = await fetch(url);
areaData = await response.json();
console.log(areaData);
let degC = Math.round(areaData.main.feels_like-273.15);
 document.getElementsByClassName('txt0')[0].innerHTML=`Lat : ${areaData.coord.lat}`;
 document.getElementsByClassName('txt1')[0].innerHTML=`Long : ${areaData.coord.lon}`;
 document.getElementsByClassName('txt2')[0].innerHTML=`Location : ${(areaData.name)}`;       
 document.getElementsByClassName('txt3')[0].innerHTML=`Lat : ${areaData.coord.lat}`;
 document.getElementsByClassName('txt4')[0].innerHTML=`Long : ${areaData.coord.lon}`;
 document.getElementsByClassName('txt5')[0].innerText=`TimeZone : ${areaData.timezone}`;
 document.getElementsByClassName('txt6')[0].innerText=`Wind Speed : ${areaData.wind.speed}`;
 document.getElementsByClassName('txt7')[0].innerText=`Pressure : ${areaData.main.pressure}`;
 document.getElementsByClassName('txt8')[0].innerText=`Humidity : ${areaData.main.humidity}`;
 document.getElementsByClassName('txt9')[0].innerText=`Wind Direction : ${areaData.wind.deg}`;
 document.getElementsByClassName('txt10')[0].innerText=`UV Index : ${areaData.clouds.all}`;
 document.getElementsByClassName('txt11')[0].innerText=`Feels Like : ${degC}`;

     }

  getData(url);

     }
      function positionReject(position) {
      console.log("Geolocation is not supported by this browser.");
       }

    }    

 }
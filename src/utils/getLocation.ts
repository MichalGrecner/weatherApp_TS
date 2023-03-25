
const getCoordinates = new Promise<object>((res, rej)=>{
  navigator.geolocation.getCurrentPosition(res, rej)
})

export const getLocation = getCoordinates.then(actualLocation, defaultLocation)

function actualLocation(data:object){
      const position:any = data;
      const latitude =  position.coords.latitude;
      const longitude = position.coords.longitude;
      const coordinates:number[] = [latitude, longitude]
      return coordinates
  }
function defaultLocation(){
  return [50.088,14.4208]
}





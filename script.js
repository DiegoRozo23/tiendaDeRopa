function startMap(){
    let coord = {lat: 41.154251752185054 ,lng: -74.575618043459};
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
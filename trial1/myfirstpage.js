var myleafletEncapsulation = new function () {
    this.localCoordinates = {
        latitude: 47.64876,
        longitude: -122.1446
    };

    this.map = L.map('map').setView([this.localCoordinates.latitude, this.localCoordinates.longitude], 13);

    this.renderMap = function () {
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(this.map);
    };


    //L.marker([localCoordinates.latitude, localCoordinates.longitude + 0.15]).addTo(map)
    //    .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

    //L.circle([localCoordinates.latitude, localCoordinates.longitude + 0.11], 500, {
    //    color: 'red',
    //    fillColor: '#f03',
    //    fillOpacity: 0.5
    //}).addTo(map).bindPopup("I am a circle.");

    //L.polygon([
    //[localCoordinates.latitude - 0.5, localCoordinates.longitude - 0.11],
    //[localCoordinates.latitude - 0.3, localCoordinates.longitude - 0.8],
    //[localCoordinates.latitude - 0.8, localCoordinates.longitude - 0.7]
    //]).addTo(map).bindPopup("I am a polygon.");

    //L.polygon([
    //    [51.509, -0.08],
    //    [51.503, -0.06],
    //    [51.51, -0.047]
    //]).addTo(map).bindPopup("I am a polygon.");


    //var popup = L.popup();

    //function onMapClick(e) {
    //    popup
    //        .setLatLng(e.latlng)
    //        .setContent("You clicked the map at " + e.latlng.toString())
    //        .openOn(map);
    //}

    //map.on('click', onMapClick);
};

var myfirstpage = new function () {
    myleafletEncapsulation.renderMap();
};

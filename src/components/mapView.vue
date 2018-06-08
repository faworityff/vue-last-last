<template>
    <div class="google-map" :id="mapName"></div>
</template>

<script>

  import axios from 'axios';
  export default {
    props: ['name', 'city', 'coord_lat', 'coord_lng'],
    data: function () {
      return {
        mapName: this.name,
      }
    },
    mounted: function () {
      var key = '&key=AIzaSyCKFztHzVA7_L75JrTwyrzhk2asYAWUL7I'
      var _city = this.city;
      var coord_lat, coord_lng;
      var adressGeo = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
        if(_city != null) {
          axios.post(adressGeo + _city + key)
            .then(resp => {
              coord_lat = resp.data.results[0].geometry.location.lat
              coord_lng = resp.data.results[0].geometry.location.lng
              this.createMap(coord_lat,coord_lng)
            })
        }else{
          this.createMap(this.coord_lat,this.coord_lng)
        }

    },
    methods: {
      createMap: function (coord_lat,coord_lng) {
        const element = document.getElementById(this.mapName)
        const options = {
          zoom: 14,
          center: new google.maps.LatLng(coord_lat, coord_lng)
        }
        const map = new google.maps.Map(element, options);
        setTimeout(function () {
          hMap();
        },50)
      }
    }
  }
</script>

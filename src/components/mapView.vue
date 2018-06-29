<template>
    <div class="google-map" :id="mapName"></div>
</template>
//todo километры в попапе

<script>

  import axios from 'axios';

  export default {
    props: ['name', 'city', 'coord_lat', 'coord_lng', 'objctsAll'],
    data: function () {
      return {
        mapName: this.name,
        map: null,
        markers: [],
        curObj:''
      }
    },
    watch: {
      objctsAll(val, oldval) { this.changeMarkers()  }
    },
    mounted: function () {
        this.beforeCreateMap()
    },
    methods: {
      beforeCreateMap: function () {
        var key = '&key=AIzaSyCKFztHzVA7_L75JrTwyrzhk2asYAWUL7I'
        var _city = this.city;
        var coord_lat, coord_lng;
        var adressGeo = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
        if (_city != null) {
          axios.post(adressGeo + _city + key)
            .then(resp => {
              coord_lat = resp.data.results[0].geometry.location.lat
              coord_lng = resp.data.results[0].geometry.location.lng
              this.createMap(coord_lat, coord_lng)
            })
        } else {
          this.createMap(this.coord_lat, this.coord_lng)
        }

      },
      changeMarkers: function () {
        for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
        }
        this.markers = [];
        this.map.setCenter({lat: this.objctsAll[0].lat, lng: this.objctsAll[0].lng})
        var drugMap = {
          url: '/assets/img/drugstore_map/main/location-map2.svg',
          scaledSize: new google.maps.Size(50, 50),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 40)
        };
        if (this.objctsAll != null) {
          for (var k in this.objctsAll) {
            var _obj = this.objctsAll[k]

            const marker = new google.maps.Marker({
              position: {lat: this.objctsAll[k].lat, lng: this.objctsAll[k].lng},
              map: this.map,
              icon: drugMap,
            });
            this.markers.push(marker)
            var infowindow = new google.maps.InfoWindow({
              pixelOffset: new google.maps.Size(200, 150),
            });
            google.maps.event.addListener(infowindow, 'domready', function () {
              var iwOuter = $('.gm-style-iw');
              var iwBackground = iwOuter.prev();
              iwBackground.children(':nth-child(2)').css({'display': 'none'});
              iwBackground.children(':nth-child(4)').css({'display': 'none'});
              iwBackground.children(':nth-child(1)').attr('style', function (i, s) {
                return s + 'display:none'
              });
              iwBackground.children(':nth-child(3)').find('div').children().css({
                'display': 'none',
                'background': 'transparent'
              });
            });

            google.maps.event.addListener(marker, 'click', function () {
              infowindow.close(); // Close previously opened infowindow
              infowindow.setContent('<div id="infowindow">\n' +
                '<div class="club-img"><img src="' + _obj.gallery[0].path  + '"></div>\n' +
                '<div class="club-info">\n' +
                '<div class="club-info-top">\n' +
                '<div class="name-add">\n' +
                '<div class="name">' + _obj.name + '</div>\n' +
                '<div class="address">' + _obj.city + ' ' + _obj.street + ' ' +  _obj.flat + '</div>\n' +
                '</div>\n' +
                '<div class="km">1.7km</div>\n' +
                '</div>\n' +
                '<div class="club-info-bottom">\n' +
                '<div class="rating">' + _obj.rating + '</div>\n' +
                '<div class="review"><span>' + _obj.reviews.length + '</span>'+ 222+'</div>\n' +
                '<router-link :href="_obj.slug +\'/\'+_obj.alias" class="go-club"></router-link>\n' +
                '</div>\n' +
                '</div>\n' +
                '</div>');
              infowindow.open(this.map, marker);
            });
          }
        }
      },
      createMap: function (coord_lat, coord_lng) {
        var st = [
          {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
              {
                "saturation": "-100"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "lightness": 65
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "lightness": "50"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
                "saturation": "-100"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
              {
                "lightness": "30"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
              {
                "lightness": "40"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "hue": "#ffff00"
              },
              {
                "lightness": -25
              },
              {
                "saturation": -97
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
              {
                "lightness": -25
              },
              {
                "saturation": -100
              }
            ]
          }
        ]
        var element = document.getElementById(this.mapName)
        this.map = new google.maps.Map(element, {
          zoom: 10,
          center: {lat: coord_lat, lng: coord_lng},
          region: 'RU',
          styles:st,
        });

        var drugMap = {
          url: 'http://45.j2landing.com/DrugStoreMap/img/main/location-map2.svg',
          scaledSize: new google.maps.Size(50, 50),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 40)
        };
        if (this.objctsAll != null) {
          for (var k in this.objctsAll) {
            var _obj = this.objctsAll[k]

            const marker = new google.maps.Marker({
              position: {lat: this.objctsAll[k].lat, lng: this.objctsAll[k].lng},
              map: this.map,
              icon: drugMap,
            });
            this.markers.push(marker)
            var infowindow = new google.maps.InfoWindow({
              pixelOffset: new google.maps.Size(200, 150),
            });
            google.maps.event.addListener(infowindow, 'domready', function () {
              var iwOuter = $('.gm-style-iw');
              var iwBackground = iwOuter.prev();
              iwBackground.children(':nth-child(2)').css({'display': 'none'});
              iwBackground.children(':nth-child(4)').css({'display': 'none'});
              iwBackground.children(':nth-child(1)').attr('style', function (i, s) {
                return s + 'display:none'
              });
              iwBackground.children(':nth-child(3)').find('div').children().css({
                'display': 'none',
                'background': 'transparent'
              });
            });
            google.maps.event.addListener(marker, 'click', function () {
              infowindow.close(); // Close previously opened infowindow
              infowindow.setContent('<div id="infowindow">\n' +
                '<div class="club-img"><img src="' + _obj.gallery[0].path  + '"></div>\n' +
                '<div class="club-info">\n' +
                '<div class="club-info-top">\n' +
                '<div class="name-add">\n' +
                '<div class="name">' + _obj.name + '</div>\n' +
                '<div class="address">' + _obj.city + ' ' + _obj.street + ' ' +  _obj.flat + '</div>\n' +
                '</div>\n' +
                '</div>\n' +
                '<div class="club-info-bottom">\n' +
                '<div class="rating">' + _obj.rating + '</div>\n' +
                '<div class="review"><span>' + _obj.reviews.length + '</span>'+ 2223 +'</div>\n' +
                '<a href="'+_obj.category_slug +'/'+_obj.slug+'"  class="go-club"></a>\n' +
                '</div>\n' +
                '</div>\n' +
                '</div>');
              infowindow.open(this.map, marker);
            });


          }
        }
        setTimeout(function () {
          hMap();
        }, 50)
      },
      clickTo:function (n) {
        router.go(n)
      }

    }
  }
</script>

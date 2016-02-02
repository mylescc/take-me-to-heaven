(function() {
  'use strict';

  function HeavenController($timeout) {
    this.views = ['splash', 'geoquery', 'postcode', 'loadingAPI', 'result'];
    this.currentViewIndex = 0;
    this.currentView = this.views[this.currentViewIndex];
    this.soundEnabled = false;
    var directionService;

    function init() {
      if ("geolocation" in navigator) {
        console.log('init');
      } else {
        alert('fuck you and your old ass browser, site will not work m8');
        location.href = 'http://bfy.tw/C9E';
      }
    };

    this.queryGeoLocation = function() {
      this.nextView(1);
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        this.queryAPI(position.coords.latitude, position.coords.longitude, null);
      }.bind(this));
    };

    this.queryAPI = function(lat, lng, postcode) {
      if (directionService === undefined) {
        directionService = new google.maps.DirectionsService();
      }
      var origin = new google.maps.LatLng(lat, lng);
      var request = {
        origin: origin,
        destination: 'Wetherspoons',
        travelMode: google.map.TravelMode.TRANSIT,
        provideRouteAlternatives: false,
        region: GB
      }
      directionService.route(request, function(results, status) {
        console.log(results);
        console.log(status);
      });

      $timeout(this.apiCallback, 3000);
      this.nextView(3);
    };

    this.apiCallback = function(result) {
      this.nextView(4);
    }.bind(this);

    this.getLocationFromPostCode = function() {
      var zipCode = 'mocklol'
      this.queryAPI(null, null, zipCode)
    };

    this.nextView = function(viewIndex) {
      this.currentViewIndex = !!viewIndex ? viewIndex : this.currentViewIndex + 1;
      this.currentView = this.views[this.currentViewIndex];
    }

    init();
  };

  HeavenController.$inject = ['$timeout'];
  angular.module('spoons').controller('HeavenController', HeavenController);
})();

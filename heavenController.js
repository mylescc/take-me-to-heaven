(function() {
  'use strict';

  function HeavenController($timeout, $scope) {
    this.views = ['splash', 'geoquery', 'loadingAPI', 'result'];
    this.currentViewIndex = 0;
    this.currentView = this.views[this.currentViewIndex];
    this.soundEnabled = false;
    this.spoonsName = 'Wetherspoons';
    var directionService, placesService;
    var lol;

    function init() {
      lol = {"geocoded_waypoints":[{"geocoder_status":"OK","place_id":"ChIJPbZIej0DdkgRz3_mdhAAfS8","types":["street_address"]},{"geocoder_status":"OK","place_id":"ChIJuZ9ASFQDdkgRrowZeAv6tWE","types":["premise"]}],"routes":[{"bounds":{"south":51.494600000000005,"west":-0.08992000000000001,"north":51.511520000000004,"east":-0.06114000000000001},"copyrights":"Map data ©2016 Google","legs":[{"arrival_time":{"text":"8:41pm","time_zone":"Europe/London","value":"2016-02-02T20:41:54.000Z"},"departure_time":{"text":"8:17pm","time_zone":"Europe/London","value":"2016-02-02T20:17:07.000Z"},"distance":{"text":"3.3 km","value":3332},"duration":{"text":"25 mins","value":1487},"end_address":"London EC4N 6AP, UK","end_location":{"lat":51.5114339,"lng":-0.089918799999964},"start_address":"100 Drummond Rd, London SE16 4DG, UK","start_location":{"lat":51.4945993,"lng":-0.06114389999993364},"steps":[{"distance":{"text":"0.5 km","value":460},"duration":{"text":"6 mins","value":332},"end_location":{"lat":51.498394,"lng":-0.061707000000069456},"polyline":{"points":"gphyHb}JgBn@A@]JWHmJxAgDf@YD_@FMcBFA"},"start_location":{"lat":51.4945993,"lng":-0.06114389999993364},"steps":[{"distance":{"text":"0.4 km","value":425},"duration":{"text":"5 mins","value":306},"end_location":{"lat":51.498359,"lng":-0.06221559999994497},"polyline":{"points":"gphyHb}JgBn@A@]JWHmJxAgDf@YD_@F"},"start_location":{"lat":51.4945993,"lng":-0.06114389999993364},"travel_mode":"WALKING","encoded_lat_lngs":"gphyHb}JgBn@A@]JWHmJxAgDf@YD_@F","path":[{"lat":51.494600000000005,"lng":-0.06114000000000001},{"lat":51.49512000000001,"lng":-0.061380000000000004},{"lat":51.49513,"lng":-0.06139000000000001},{"lat":51.49528,"lng":-0.061450000000000005},{"lat":51.495400000000004,"lng":-0.061500000000000006},{"lat":51.49723,"lng":-0.061950000000000005},{"lat":51.498070000000006,"lng":-0.062150000000000004},{"lat":51.498200000000004,"lng":-0.062180000000000006},{"lat":51.498360000000005,"lng":-0.062220000000000004}],"lat_lngs":[{"lat":51.494600000000005,"lng":-0.06114000000000001},{"lat":51.49512000000001,"lng":-0.061380000000000004},{"lat":51.49513,"lng":-0.06139000000000001},{"lat":51.49528,"lng":-0.061450000000000005},{"lat":51.495400000000004,"lng":-0.061500000000000006},{"lat":51.49723,"lng":-0.061950000000000005},{"lat":51.498070000000006,"lng":-0.062150000000000004},{"lat":51.498200000000004,"lng":-0.062180000000000006},{"lat":51.498360000000005,"lng":-0.062220000000000004}],"instructions":"Head <b>north</b> on <b>Drummond Rd</b> toward <b>Clements Rd</b>","maneuver":""},{"distance":{"text":"35 m","value":35},"duration":{"text":"1 min","value":26},"end_location":{"lat":51.498394,"lng":-0.061707000000069456},"maneuver":"turn-right","polyline":{"points":"wgiyHzcKMcBFA"},"start_location":{"lat":51.498359,"lng":-0.06221559999994497},"travel_mode":"WALKING","encoded_lat_lngs":"wgiyHzcKMcBFA","path":[{"lat":51.498360000000005,"lng":-0.062220000000000004},{"lat":51.498430000000006,"lng":-0.061720000000000004},{"lat":51.49839000000001,"lng":-0.06171000000000001}],"lat_lngs":[{"lat":51.498360000000005,"lng":-0.062220000000000004},{"lat":51.498430000000006,"lng":-0.061720000000000004},{"lat":51.49839000000001,"lng":-0.06171000000000001}],"instructions":"Turn <b>right</b> onto <b>Jamaica Rd</b>/<b>A200</b><div style=\"font-size:0.9em\">Destination will be on the right</div>"}],"travel_mode":"WALKING","encoded_lat_lngs":"gphyHb}JgBn@A@]JWHmJxAgDf@YD_@FMcBFA","path":[{"lat":51.494600000000005,"lng":-0.06114000000000001},{"lat":51.49512000000001,"lng":-0.061380000000000004},{"lat":51.49513,"lng":-0.06139000000000001},{"lat":51.49528,"lng":-0.061450000000000005},{"lat":51.495400000000004,"lng":-0.061500000000000006},{"lat":51.49723,"lng":-0.061950000000000005},{"lat":51.498070000000006,"lng":-0.062150000000000004},{"lat":51.498200000000004,"lng":-0.062180000000000006},{"lat":51.498360000000005,"lng":-0.062220000000000004},{"lat":51.498430000000006,"lng":-0.061720000000000004},{"lat":51.49839000000001,"lng":-0.06171000000000001}],"lat_lngs":[{"lat":51.494600000000005,"lng":-0.06114000000000001},{"lat":51.49512000000001,"lng":-0.061380000000000004},{"lat":51.49513,"lng":-0.06139000000000001},{"lat":51.49528,"lng":-0.061450000000000005},{"lat":51.495400000000004,"lng":-0.061500000000000006},{"lat":51.49723,"lng":-0.061950000000000005},{"lat":51.498070000000006,"lng":-0.062150000000000004},{"lat":51.498200000000004,"lng":-0.062180000000000006},{"lat":51.498360000000005,"lng":-0.062220000000000004},{"lat":51.498430000000006,"lng":-0.061720000000000004},{"lat":51.49839000000001,"lng":-0.06171000000000001}],"instructions":"Walk to Drummond Road (Stop B)","maneuver":"","start_point":{"lat":51.4945993,"lng":-0.06114389999993364},"end_point":{"lat":51.498394,"lng":-0.061707000000069456}},{"distance":{"text":"2.5 km","value":2460},"duration":{"text":"12 mins","value":732},"end_location":{"lat":51.50946399999999,"lng":-0.08745099999998729},"polyline":{"points":"}giyHt`KbA~QXtPoElSqE`KeD`L}FrMyGpRsLjb@uEhMyOgD"},"start_location":{"lat":51.498394,"lng":-0.061707000000069456},"travel_mode":"TRANSIT","encoded_lat_lngs":"}giyHt`KbA~QXtPoElSqE`KeD`L}FrMyGpRsLjb@uEhMyOgD","path":[{"lat":51.49839000000001,"lng":-0.06171000000000001},{"lat":51.498050000000006,"lng":-0.06475},{"lat":51.49792000000001,"lng":-0.06758},{"lat":51.498960000000004,"lng":-0.07085000000000001},{"lat":51.50001,"lng":-0.07278000000000001},{"lat":51.500840000000004,"lng":-0.07487},{"lat":51.50211,"lng":-0.07721},{"lat":51.50352,"lng":-0.08034000000000001},{"lat":51.505700000000004,"lng":-0.08600000000000001},{"lat":51.50677,"lng":-0.08829000000000001},{"lat":51.509460000000004,"lng":-0.08745000000000001}],"lat_lngs":[{"lat":51.49839000000001,"lng":-0.06171000000000001},{"lat":51.498050000000006,"lng":-0.06475},{"lat":51.49792000000001,"lng":-0.06758},{"lat":51.498960000000004,"lng":-0.07085000000000001},{"lat":51.50001,"lng":-0.07278000000000001},{"lat":51.500840000000004,"lng":-0.07487},{"lat":51.50211,"lng":-0.07721},{"lat":51.50352,"lng":-0.08034000000000001},{"lat":51.505700000000004,"lng":-0.08600000000000001},{"lat":51.50677,"lng":-0.08829000000000001},{"lat":51.509460000000004,"lng":-0.08745000000000001}],"instructions":"Bus towards Shoreditch","maneuver":"","start_point":{"lat":51.498394,"lng":-0.061707000000069456},"end_point":{"lat":51.50946399999999,"lng":-0.08745099999998729},"transit":{"arrival_stop":{"location":{"lat":51.50946399999999,"lng":-0.08745099999998729},"name":"Monument (Stop Q)"},"arrival_time":{"text":"8:36pm","time_zone":"Europe/London","value":"2016-02-02T20:36:12.000Z"},"departure_stop":{"location":{"lat":51.498394,"lng":-0.061707000000069456},"name":"Drummond Road (Stop B)"},"departure_time":{"text":"8:24pm","time_zone":"Europe/London","value":"2016-02-02T20:24:00.000Z"},"headsign":"Shoreditch","line":{"agencies":[{"name":"Transport for London","url":"https://www.tfl.gov.uk/"}],"color":"#ce312d","name":"Bellingham - Shoreditch","short_name":"47","text_color":"#ffffff","vehicle":{"icon":"https://maps.gstatic.com/mapfiles/transit/iw2/6/bus.png","local_icon":"https://maps.gstatic.com/mapfiles/transit/iw2/6/uk-london-bus.png","name":"Bus","type":"BUS"}},"num_stops":10}},{"distance":{"text":"0.4 km","value":412},"duration":{"text":"6 mins","value":348},"end_location":{"lat":51.5114339,"lng":-0.089918799999964},"polyline":{"points":"cmkyHpaPAOOEBW[KG?[IQEuAc@WIgA]CNEJCNEPCPSlAIl@It@OrAGn@W|BCXIl@Gn@PF"},"start_location":{"lat":51.50946399999999,"lng":-0.08745099999998729},"steps":[{"distance":{"text":"18 m","value":18},"duration":{"text":"1 min","value":23},"end_location":{"lat":51.5095262,"lng":-0.0872173999999859},"polyline":{"points":"cmkyHpaPAOOEBW"},"start_location":{"lat":51.50946399999999,"lng":-0.08745099999998729},"travel_mode":"WALKING","encoded_lat_lngs":"cmkyHpaPAOOEBW","path":[{"lat":51.509460000000004,"lng":-0.08745000000000001},{"lat":51.50947000000001,"lng":-0.08737},{"lat":51.509550000000004,"lng":-0.08734},{"lat":51.509530000000005,"lng":-0.08722}],"lat_lngs":[{"lat":51.509460000000004,"lng":-0.08745000000000001},{"lat":51.50947000000001,"lng":-0.08737},{"lat":51.509550000000004,"lng":-0.08734},{"lat":51.509530000000005,"lng":-0.08722}],"instructions":"Head <b>northeast</b> toward <b>King William St</b>/<b>London Bridge</b>/<b>A3</b><div style=\"font-size:0.9em\">Take the stairs</div>","maneuver":""},{"distance":{"text":"0.2 km","value":151},"duration":{"text":"2 mins","value":132},"end_location":{"lat":51.5108469,"lng":-0.0867048000000068},"maneuver":"turn-left","polyline":{"points":"qmkyHb`P[KG?[IQEuAc@WIgA]"},"start_location":{"lat":51.5095262,"lng":-0.0872173999999859},"travel_mode":"WALKING","encoded_lat_lngs":"qmkyHb`P[KG?[IQEuAc@WIgA]","path":[{"lat":51.509530000000005,"lng":-0.08722},{"lat":51.50967000000001,"lng":-0.08716},{"lat":51.509710000000005,"lng":-0.08716},{"lat":51.50985000000001,"lng":-0.08711},{"lat":51.50994000000001,"lng":-0.08708},{"lat":51.51037,"lng":-0.0869},{"lat":51.510490000000004,"lng":-0.08685000000000001},{"lat":51.510850000000005,"lng":-0.08670000000000001}],"lat_lngs":[{"lat":51.509530000000005,"lng":-0.08722},{"lat":51.50967000000001,"lng":-0.08716},{"lat":51.509710000000005,"lng":-0.08716},{"lat":51.50985000000001,"lng":-0.08711},{"lat":51.50994000000001,"lng":-0.08708},{"lat":51.51037,"lng":-0.0869},{"lat":51.510490000000004,"lng":-0.08685000000000001},{"lat":51.510850000000005,"lng":-0.08670000000000001}],"instructions":"Turn <b>left</b> onto <b>King William St</b>/<b>A3</b>"},{"distance":{"text":"11 m","value":11},"duration":{"text":"1 min","value":13},"end_location":{"lat":51.5108968,"lng":-0.08683789999997771},"maneuver":"turn-left","polyline":{"points":"yukyHz|OCNEJ"},"start_location":{"lat":51.5108469,"lng":-0.0867048000000068},"travel_mode":"WALKING","encoded_lat_lngs":"yukyHz|OCNEJ","path":[{"lat":51.510850000000005,"lng":-0.08670000000000001},{"lat":51.510870000000004,"lng":-0.08678000000000001},{"lat":51.51090000000001,"lng":-0.08684}],"lat_lngs":[{"lat":51.510850000000005,"lng":-0.08670000000000001},{"lat":51.510870000000004,"lng":-0.08678000000000001},{"lat":51.51090000000001,"lng":-0.08684}],"instructions":"Turn <b>left</b> onto <b>King William St</b>"},{"distance":{"text":"0.2 km","value":222},"duration":{"text":"3 mins","value":168},"end_location":{"lat":51.5115193,"lng":-0.0898799000000281},"polyline":{"points":"cvkyHv}OCNEPCPSlAIl@It@OrAGn@W|BCXIl@Gn@"},"start_location":{"lat":51.5108968,"lng":-0.08683789999997771},"travel_mode":"WALKING","encoded_lat_lngs":"cvkyHv}OCNEPCPSlAIl@It@OrAGn@W|BCXIl@Gn@","path":[{"lat":51.51090000000001,"lng":-0.08684},{"lat":51.510920000000006,"lng":-0.08692000000000001},{"lat":51.51095,"lng":-0.08701},{"lat":51.51097000000001,"lng":-0.08710000000000001},{"lat":51.511070000000004,"lng":-0.08749000000000001},{"lat":51.511120000000005,"lng":-0.08772},{"lat":51.51117000000001,"lng":-0.08799000000000001},{"lat":51.511250000000004,"lng":-0.08841},{"lat":51.51129,"lng":-0.08865},{"lat":51.511410000000005,"lng":-0.08928000000000001},{"lat":51.511430000000004,"lng":-0.08941},{"lat":51.511480000000006,"lng":-0.08964000000000001},{"lat":51.511520000000004,"lng":-0.08988}],"lat_lngs":[{"lat":51.51090000000001,"lng":-0.08684},{"lat":51.510920000000006,"lng":-0.08692000000000001},{"lat":51.51095,"lng":-0.08701},{"lat":51.51097000000001,"lng":-0.08710000000000001},{"lat":51.511070000000004,"lng":-0.08749000000000001},{"lat":51.511120000000005,"lng":-0.08772},{"lat":51.51117000000001,"lng":-0.08799000000000001},{"lat":51.511250000000004,"lng":-0.08841},{"lat":51.51129,"lng":-0.08865},{"lat":51.511410000000005,"lng":-0.08928000000000001},{"lat":51.511430000000004,"lng":-0.08941},{"lat":51.511480000000006,"lng":-0.08964000000000001},{"lat":51.511520000000004,"lng":-0.08988}],"instructions":"Continue onto <b>Cannon St</b>","maneuver":""},{"distance":{"text":"10 m","value":10},"duration":{"text":"1 min","value":12},"end_location":{"lat":51.5114339,"lng":-0.089918799999964},"maneuver":"turn-left","polyline":{"points":"_zkyHvpPPF"},"start_location":{"lat":51.5115193,"lng":-0.0898799000000281},"travel_mode":"WALKING","encoded_lat_lngs":"_zkyHvpPPF","path":[{"lat":51.511520000000004,"lng":-0.08988},{"lat":51.511430000000004,"lng":-0.08992000000000001}],"lat_lngs":[{"lat":51.511520000000004,"lng":-0.08988},{"lat":51.511430000000004,"lng":-0.08992000000000001}],"instructions":"Turn <b>left</b>"}],"travel_mode":"WALKING","encoded_lat_lngs":"cmkyHpaPAOOEBW[KG?[IQEuAc@WIgA]CNEJCNEPCPSlAIl@It@OrAGn@W|BCXIl@Gn@PF","path":[{"lat":51.509460000000004,"lng":-0.08745000000000001},{"lat":51.50947000000001,"lng":-0.08737},{"lat":51.509550000000004,"lng":-0.08734},{"lat":51.509530000000005,"lng":-0.08722},{"lat":51.50967000000001,"lng":-0.08716},{"lat":51.509710000000005,"lng":-0.08716},{"lat":51.50985000000001,"lng":-0.08711},{"lat":51.50994000000001,"lng":-0.08708},{"lat":51.51037,"lng":-0.0869},{"lat":51.510490000000004,"lng":-0.08685000000000001},{"lat":51.510850000000005,"lng":-0.08670000000000001},{"lat":51.510870000000004,"lng":-0.08678000000000001},{"lat":51.51090000000001,"lng":-0.08684},{"lat":51.510920000000006,"lng":-0.08692000000000001},{"lat":51.51095,"lng":-0.08701},{"lat":51.51097000000001,"lng":-0.08710000000000001},{"lat":51.511070000000004,"lng":-0.08749000000000001},{"lat":51.511120000000005,"lng":-0.08772},{"lat":51.51117000000001,"lng":-0.08799000000000001},{"lat":51.511250000000004,"lng":-0.08841},{"lat":51.51129,"lng":-0.08865},{"lat":51.511410000000005,"lng":-0.08928000000000001},{"lat":51.511430000000004,"lng":-0.08941},{"lat":51.511480000000006,"lng":-0.08964000000000001},{"lat":51.511520000000004,"lng":-0.08988},{"lat":51.511430000000004,"lng":-0.08992000000000001}],"lat_lngs":[{"lat":51.509460000000004,"lng":-0.08745000000000001},{"lat":51.50947000000001,"lng":-0.08737},{"lat":51.509550000000004,"lng":-0.08734},{"lat":51.509530000000005,"lng":-0.08722},{"lat":51.50967000000001,"lng":-0.08716},{"lat":51.509710000000005,"lng":-0.08716},{"lat":51.50985000000001,"lng":-0.08711},{"lat":51.50994000000001,"lng":-0.08708},{"lat":51.51037,"lng":-0.0869},{"lat":51.510490000000004,"lng":-0.08685000000000001},{"lat":51.510850000000005,"lng":-0.08670000000000001},{"lat":51.510870000000004,"lng":-0.08678000000000001},{"lat":51.51090000000001,"lng":-0.08684},{"lat":51.510920000000006,"lng":-0.08692000000000001},{"lat":51.51095,"lng":-0.08701},{"lat":51.51097000000001,"lng":-0.08710000000000001},{"lat":51.511070000000004,"lng":-0.08749000000000001},{"lat":51.511120000000005,"lng":-0.08772},{"lat":51.51117000000001,"lng":-0.08799000000000001},{"lat":51.511250000000004,"lng":-0.08841},{"lat":51.51129,"lng":-0.08865},{"lat":51.511410000000005,"lng":-0.08928000000000001},{"lat":51.511430000000004,"lng":-0.08941},{"lat":51.511480000000006,"lng":-0.08964000000000001},{"lat":51.511520000000004,"lng":-0.08988},{"lat":51.511430000000004,"lng":-0.08992000000000001}],"instructions":"Walk to London EC4N 6AP, UK","maneuver":"","start_point":{"lat":51.50946399999999,"lng":-0.08745099999998729},"end_point":{"lat":51.5114339,"lng":-0.089918799999964}}],"via_waypoint":[],"via_waypoints":[]}],"overview_polyline":"gphyHb}J_DfAoQnCMcBFAbA~QXtPoElSqE`KeD`L}FrMyGpRsLjb@uEhMyOgDAOOEBW[Kc@IgBi@_Bg@IZa@`Ck@fFm@tFPF","summary":"","warnings":["Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."],"waypoint_order":[],"overview_path":[{"lat":51.494600000000005,"lng":-0.06114000000000001},{"lat":51.495400000000004,"lng":-0.061500000000000006},{"lat":51.498360000000005,"lng":-0.062220000000000004},{"lat":51.498430000000006,"lng":-0.061720000000000004},{"lat":51.49839000000001,"lng":-0.06171000000000001},{"lat":51.498050000000006,"lng":-0.06475},{"lat":51.49792000000001,"lng":-0.06758},{"lat":51.498960000000004,"lng":-0.07085000000000001},{"lat":51.50001,"lng":-0.07278000000000001},{"lat":51.500840000000004,"lng":-0.07487},{"lat":51.50211,"lng":-0.07721},{"lat":51.50352,"lng":-0.08034000000000001},{"lat":51.505700000000004,"lng":-0.08600000000000001},{"lat":51.50677,"lng":-0.08829000000000001},{"lat":51.509460000000004,"lng":-0.08745000000000001},{"lat":51.50947000000001,"lng":-0.08737},{"lat":51.509550000000004,"lng":-0.08734},{"lat":51.509530000000005,"lng":-0.08722},{"lat":51.50967000000001,"lng":-0.08716},{"lat":51.50985000000001,"lng":-0.08711},{"lat":51.51037,"lng":-0.0869},{"lat":51.510850000000005,"lng":-0.08670000000000001},{"lat":51.51090000000001,"lng":-0.08684},{"lat":51.511070000000004,"lng":-0.08749000000000001},{"lat":51.51129,"lng":-0.08865},{"lat":51.511520000000004,"lng":-0.08988},{"lat":51.511430000000004,"lng":-0.08992000000000001}]}],"status":"OK","request":{"origin":{"lat":51.494521399999996,"lng":-0.06157870000004095},"destination":{"lat":51.5112046,"lng":-0.08988820000001851},"travelMode":"TRANSIT","provideRouteAlternatives":false,"region":"GB"}}

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
        var origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.queryPlacesAPI(origin);
        //this.handleRoutingCallback(lol, true);
      }.bind(this));
    };

    this.queryPlacesAPI = function(origin) {
      this.nextView(2);
      $scope.$apply();
      if (placesService === undefined) {
        placesService = new google.maps.places.PlacesService(document.getElementById('places'));
      }
      var request = {
        location: origin,
        keyword: 'Wetherspoons',
        rankBy: google.maps.places.RankBy.DISTANCE,
        types: ['bar'],
      };
      placesService.nearbySearch(request, function(results, status) {
        this.spoonsName = results[0].name;
        console.log(results);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          this.directionRouting(origin, results[0])
        } else {
          console.log('error')
        }
      }.bind(this))
    };

    this.directionRouting = function(latLng, spoons) {
      if (directionService === undefined) {
        directionService = new google.maps.DirectionsService();
      }
      var request = {
        origin: latLng,
        destination: spoons.geometry.location,
        travelMode: google.maps.TravelMode.TRANSIT,
        provideRouteAlternatives: false,
        region: 'GB'
      }
      directionService.route(request, this.handleRoutingCallback);
    }

    this.handleRoutingCallback = function(results, status) {
      this.spoonsRoute = this.mapRouteToSpoons(results);
      this.nextView(3);
      $scope.$apply();
    }.bind(this)

    this.mapRouteToSpoons = function(googleResults) {
      var steps = googleResults.routes[0].legs[0].steps.map(function(step) {
        switch(step.travel_mode) {
          case 'WALKING':
            return {
              instructions: step.instructions,
              type: step.travel_mode,
              lat_lngs: step.lat_lngs,
            }
          case 'TRANSIT':
            var mode = step.instructions.split(' ')[0].toLowerCase();
            var shortName = step.transit.line.short_name;
            var from = step.transit.departure_stop.name;
            var to = step.transit.arrival_stop.name;
            return {
              instructions: 'Take the '+ shortName + ' ' + step.instructions.toLowerCase() + ' from ' + from + '. Get off at ' + to + '.',
              type: step.travel_mode,
              lat_lngs: step.lat_lngs
            }
        }
      })
      steps.push({
        instructions: 'Step into Heaven (' + this.spoonsName + ')',
        type: 'WALKING'
      });
      return steps;
    }


    this.nextView = function(viewIndex) {
      this.currentViewIndex = !!viewIndex ? viewIndex : this.currentViewIndex + 1;
      this.currentView = this.views[this.currentViewIndex];
    }

    this.expandStep = function(step, index) {
      if (step.expanded) {
        return;
      }
      step.expanded = true;
      var element = document.getElementById('step-' + index);
      var map = new google.maps.Map(element, {
        mapTypeId: 'terrain',
        disableDefaultUI: true
      });
      var path = new google.maps.Polyline({
        path: step.lat_lngs,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      var bounds = new google.maps.LatLngBounds();
      _.each(step.lat_lngs, function(latLng) {
        bounds.extend(latLng);
      });

      path.setMap(map);
      map.fitBounds(bounds);
    }

    init();
  };

  HeavenController.$inject = ['$timeout','$scope'];
  angular.module('spoons').controller('HeavenController', HeavenController);
})();

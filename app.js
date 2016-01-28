
function Heaven() {
  this._init();
}

Heaven.prototype._init = function() {
  if ("geolocation" in navigator) {
      console.log('init');
  } else {
    alert('fuck you and your old ass browser, site will not work m8');
    location.href = 'http://bfy.tw/C9E';
  }
}

Heaven.prototype.getGeoLocation = function() {
  var proTip = document.getElementById('location-permission-protip');
  proTip.classList.remove('hidden');

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    this.swapToNextView('result', 'location-prompt');
    this._promptCityMapper(position.coords.latitude, position.coords.longitude, null);
  }.bind(this));
}

Heaven.prototype.swapToNextView = function(newID, prevID) {
  elNew = document.getElementById(newID);
  elPrev = document.getElementById(prevID);
  elNew.classList.remove("hidden");
  elPrev.classList.add("hidden");
}

Heaven.prototype.getLocationFromPostCode = function(event) {
  console.log(event);
  event.preventDefault();
  this.swapToNextView('result', 'postcode-prompt');
  var zipCode = 'mocklol'
  this._promptCityMapper(null, null, zipCode)
  return false;
};

Heaven.prototype._promptCityMapper = function(lat, long, postcode) {

};

var heaven = new Heaven();
var Map = React.createClass({

  componentDidMount: function () {

    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 40.731404, lng: -73.997880},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    BenchStore.addChangeListener(this._onChange);

    var that = this;

    this.map.addListener('idle', function() {

      var unformattedBounds = that.map.getBounds();
      var nE = unformattedBounds.getNorthEast();
      var sW = unformattedBounds.getSouthWest();

      var bounds = {'northEast': {'lat': nE.lat(), 'lng': nE.lng()}, 'southWest': {'lat': sW.lat(), 'lng': sW.lng()}};


      ApiUtil.fetchBenches(bounds);
    });
  },

  _onChange: function () {
    var markers = [];
    var pos;


    BenchStore.all().forEach(function (bench) {
      pos = {lat: bench.lat, lng: bench.lng};
      markers.push(new google.maps.Marker({ position: pos, title: bench.description }));
    });

    var that = this;

    markers.forEach(function (marker) {
      marker.setMap(that.map);
    });



  },

  render: function () {

    return (
      <div className="map" ref="map">
      </div>
    );

  }

});

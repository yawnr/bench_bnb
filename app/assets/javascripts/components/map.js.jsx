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

    this.map.addListener('click', function (e) {
      this.props.redirectFun(e);
    }.bind(this));
  },

  _onChange: function () {
    var markers = [];
    var pos;
    var newPositions = [];
    var that = this;
    var spliceIdx;


    if (this.markers) {

      BenchStore.all().forEach(function (bench) {
        pos = {lat: bench.lat, lng: bench.lng};

        newPositions.push(pos);


        if (!that.oldPositions.indexOf(pos)) {
          markers.push(new google.maps.Marker({ animation: google.maps.Animation.DROP, position: newPosition, title: bench.description }));
        }

      });

      this.markers.forEach(function (oldMarker) {
        if (!newPositions.indexOf(oldMarker.position)) {
          oldMarker.setMap(null);
          spliceIdx = that.markers.indexOf(oldMarker);
          markers = markers.splice(spliceIdx, 1);
        }
      });
    } else {
      BenchStore.all().forEach(function (bench) {
        pos = {lat: bench.lat, lng: bench.lng};
        markers.push(new google.maps.Marker({ animation: google.maps.Animation.DROP, position: pos, title: bench.description }));
      });
    }


    markers.forEach(function (marker) {
      marker.setMap(that.map);
    });

    this.markers = markers;

    this.oldPositions = markers.map(function (marker) {
        return marker.position;
    });


  },

  render: function () {

    return (
      <div className="map" ref="map">
      </div>
    );

  }

});

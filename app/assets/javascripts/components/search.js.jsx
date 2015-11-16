var Search = React.createClass({

  mixins: [ReactRouter.History],

  render: function () {
    return (
      <div>
        <Map redirectFun={this.clickMapHandler} />
        <Index />
      </div>
    );
  },

  clickMapHandler: function (e) {
    // e.preventDefault();
    var coords = {lat: e.latLng.lat(), lng:e.latLng.lng() };
    this.props.history.pushState(null, "/benches/new", coords);
  }

});

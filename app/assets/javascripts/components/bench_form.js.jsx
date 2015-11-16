var BenchForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    lat: '',
    lng: '',
    seating: '',
    description: ''
  },

  getInitialState: function () {
    return {
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng,
      seating: '',
      description: ''
    };
  },

  createBench: function (event) {
    var bench = {};

    Object.keys(this.state).forEach(function (key) {
       bench[key] = this.state[key];
    }.bind(this));

    ApiUtil.createBench(bench, function () {
      this.history.pushState(null, "/", {});
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  render: function () {

    return(
      <form className='new-bench' onSubmit={this.createBench}>
        <div>
          <label key="bench_lat_label" htmlFor='bench_lat'>Latitude:</label>
          <input
            key='bench_lat'
            type='text'
            id='bench_lat'
            valueLink={this.linkState("lat")}
          />
        </div>

        <div>
          <label key="bench_lng_label" htmlFor='bench_lng'>Longitude:</label>
          <input
            key='bench_lng'
            type='text'
            id='bench_lng'
            valueLink={this.linkState("lng")}
          />
        </div>

        <div>
          <label key="bench_seating_label" htmlFor='bench_seating'>Seating:</label>
          <input
            key='bench_seating'
            type='text'
            id='bench_seating'
            valueLink={this.linkState("seating")}
          />
        </div>

        <div>
          <label key="bench_des_label" htmlFor='bench_des'>Description:</label>
          <input
            key='bench_des'
            type='text'
            id='bench_des'
            valueLink={this.linkState("description")}
          />
        </div>

        <button>Create Bench</button>
        <br />
      </form>
    );
  }


});

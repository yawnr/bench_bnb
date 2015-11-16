var BenchForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    lat: '',
    lng: '',
    seating: '',
    description: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
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
    debugger
    var lat = this.props.location.query;
    var lng;

    return(
      <form className='new-bench' onSubmit={this.createBench}>
        <div>
          <label htmlFor='bench_lat'>Latitude:</label>
          <input
            type='text'
            id='bench_lat'
            valueLink={this.linkState("lat")}
          />
        </div>

        <div>
          <label htmlFor='bench_lng'>Longitude:</label>
          <input
            type='text'
            id='bench_lng'
            valueLink={this.linkState("lng")}
          />
        </div>

        <div>
          <label htmlFor='bench_seating'>Seating:</label>
          <input
            type='text'
            id='bench_seating'
            valueLink={this.linkState("seating")}
          />
        </div>

        <div>
          <label htmlFor='bench_des'>Description:</label>
          <input
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

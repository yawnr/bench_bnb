var Filter = React.createClass({

  getInitialState: function () {
    return {min: 0, max: 100};
  },

  componentDidMount: function () {
    // FilterStore.addChangeListener(this.setMinFilter);
    // FilterStore.addChangeListener(this.setMaxFilter);
    FilterStore.addChangeListener(this.onChange);

  },

  onChange: function () {
    this.setState(FilterStore.filterParams());
  },

  setMinFilter: function (e) {
    var min = e.currentTarget.value;
    var minParams = {min: min, max: this.state.max};
    FilterActions.setFilter(minParams);
  },

  setMaxFilter: function (e) {
    var max = e.currentTarget.value;
    var maxParams = {min: this.state.min, max: max};
    FilterActions.setFilter(maxParams);
  },

  render: function () {
      return (
        <div>
          <div>
            <label htmlFor='seating_min'>Min Seating:</label>
            <input
              type='text'
              id='seating_min'
              value={this.state.min}
              onChange={this.setMinFilter}
            />
          </div>

          <div>
            <label htmlFor='seating_max'>Max Seating:</label>
            <input
              type='text'
              id='seating_max'
              value={this.state.max}
              onChange={this.setMaxFilter}
            />
          </div>
        </div>

      );
  }
});

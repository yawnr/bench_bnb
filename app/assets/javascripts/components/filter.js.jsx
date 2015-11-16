var Filter = React.createClass({

  getInitialState: function () {
    return {min: 0, max: 100};
  },

  componentDidMount: function () {
    FilterStore.addChangeListener(this.setMinFilter);
    FilterStore.addChangeListener(this.setMaxFilter);
  },

  setMinFilter: function (e) {
    debugger
    var min = e.currentTarget.value || 0;
    var minParams = {min: min, max: this.state.max};
    FilterActions.setFilter(min);
    this.setState({min: min});
  },

  setMaxFilter: function (e) {
    var max = e.currentTarget.value || 100;
    var maxParams = {min: this.state.min, max: max};
    FilterActions.setFilter(maxParams);
    this.setState({max: max});
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

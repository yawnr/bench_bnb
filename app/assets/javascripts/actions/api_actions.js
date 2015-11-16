ApiActions = {

  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  addBench: function (bench) {
    AppDispatcher.dispatch({
      actiontype: BenchConstants.ADD_BENCH,
      bench: bench
    });
  }

};
